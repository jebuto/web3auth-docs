const axios = require("axios");
const util = require("util");
const fs = require("fs");
const path = require("path");
const joi = require("joi");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const environment = process.env.NODE_ENV || "development";

async function fetchHostedFile(filename) {
  try {
    response = await axios.get("https:/raw.githubusercontent.com/" + filename);
    var fileContent = response.data;
    if (typeof fileContent !== "string") {
      fileContent = JSON.stringify(fileContent, null, 2);
    }
    return fileContent;
  } catch (e) {
    console.log(`Error fetching ${filename}: ${e}`);
    return "";
  }
}

const hostedFileLinks = require("../../src/common/hostedFileLinks.json");
module.exports = (context, options) => ({
  name: "docusaurus-plugin-virtual-files",
  async loadContent() {
    const dir = path.resolve(context.siteDir, options.rootDir);
    const filenames = Object.values(hostedFileLinks);
    const fileContents = {};

    if (environment === "development") {
      var data = "";
      for (const filename of filenames) {
        const filePath = path.join(dir, filename.replaceAll("/", "-"));
        const directoryPath = path.dirname(filePath);

        try {
          data = await readFileAsync(filePath);
        } catch (e) {
          console.log(`Fetching ${filename} since local cache not available`);

          data = await fetchHostedFile(filename);

          try {
            if (!fs.existsSync(directoryPath)) {
              fs.mkdirSync(directoryPath, { recursive: true });
            }
            await writeFileAsync(filePath, data);
            console.log(`Saved ${filename} to cache`);
          } catch (error) {
            console.log(`Error saving ${filename} to cache`);
          }
        }
        fileContents[filename] = data;
      }
    } else {
      for (const filename of filenames) {
        fileContents[filename] = await fetchHostedFile(filename);
      }
    }

    return fileContents;
  },
  async contentLoaded({ content, actions }) {
    const { createData, addRoute } = actions;
    const files = await createData("files.json", JSON.stringify(content));
    addRoute({
      path: (process.env.REACT_APP_BASE_URL || "/docs/") + "integration-builder",
      component: "@site/src/pages/integration-builder",
      modules: {
        files,
      },
    });
  },
});

module.exports.validateOptions = ({ options, validate }) =>
  validate(
    joi.object({
      rootDir: joi.string().required(),
    }),
    options
  );
