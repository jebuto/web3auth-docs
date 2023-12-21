import * as hostedFileLinks from "../../../../../common/hostedFileLinks.json";
import STEPS from "./stepContent";

export default function getSteps(steps, files, replacementAggregator) {
  steps.push(
    {
      ...STEPS.unityQuickStart,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Quick Start"
      ),
    },
    {
      ...STEPS.installation,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_MANIFEST_JSON,
        files[hostedFileLinks.PNP_UNITY_MANIFEST_JSON],
        "Web3Auth Installation"
      ),
    },
    {
      ...STEPS.registerApp,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Dashboard Registration"
      ),
    },
    {
      ...STEPS.initialization,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "SDK Initialization"
      ),
    },
    {
      ...STEPS.login,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Login"
      ),
    },
    {
      ...STEPS.blockchainCalls,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Blockchain Calls"
      ),
    },
    {
      ...STEPS.logout,
      pointer: replacementAggregator.highlightRange(
        hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS,
        files[hostedFileLinks.PNP_UNITY_WEB3AUTHSCRIPT_CS],
        "Logout"
      ),
    }
  );
}
