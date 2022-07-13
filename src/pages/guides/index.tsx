import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

interface Props {
  guides: Record<
    string,
    {
      title: string;
      description: string;
      image: string;
      type: string;
      tags: string[];
      date: string;
      author: string;
      order: number;
    }
  >;
}

export default function GuidesPage({ guides }: Props) {
  const sortedGuides = Object.entries(guides).sort(([, a], [, b]) => a.order - b.order);
  return (
    <Layout title="Guides">
      <header className={styles.header}>
        <h1>Guides</h1>
        <p>A collection of {Object.keys(guides).length + 19} posts</p>
        <hr />
      </header>
      <div className={styles.container}>
        {sortedGuides.map(([key, guide]) => (
          <Link key={key} className={styles.article} to={`/guides/${key}`}>
            <img src={guide.image} alt="Banner" />
            <div className={styles.contentContainer}>
              <span className={styles.type}>{guide.type}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              {guide.tags &&
                guide.tags.map((item, index) => {
                  if (index === guide.tags.length - 1) {
                    return (
                      <span key={item}>
                        <code className={styles.tag}>{item}</code>
                        <br />
                      </span>
                    );
                  }
                  return (
                    <code key={item} className={styles.tag}>
                      {item}
                    </code>
                  );
                })}
              <span className={styles.date}>
                {guide.author} | {guide.date}
              </span>
            </div>
          </Link>
        ))}
        <Link className={styles.article} to="/docs/integration-builder?lang=react&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/react.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a React Application</h3>
            <p>Learn how to add passwordless auth to a React Applications using Web3Auth.</p>
            <code className={styles.tag}>react</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=next&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/nextjs.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a Next.js Application</h3>
            <p>Learn how to add passwordless auth to a Next.js Applications using Web3Auth.</p>
            <code className={styles.tag}>next.js</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=angular&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/angular.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a Angular Application</h3>
            <p>Learn how to add passwordless auth to a Angular Applications using Web3Auth.</p>
            <code className={styles.tag}>angular</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=html&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/htmljs.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a HTML/JS Application</h3>
            <p>Learn how to add passwordless auth to a HTML/JS Applications using Web3Auth.</p>
            <code className={styles.tag}>html</code>
            <code className={styles.tag}>js</code>
            <code className={styles.tag}>javascript</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=vue&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/vue.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a Vue.js Application</h3>
            <p>Learn how to add passwordless auth to a Vue.js Applications using Web3Auth.</p>
            <code className={styles.tag}>vue</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=android&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/android.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in an Android Application</h3>
            <p>Learn how to add passwordless auth to an Android Applications using Web3Auth.</p>
            <code className={styles.tag}>android</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=ios&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/ios-swift.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in an iOS/Swift Application</h3>
            <p>Learn how to add passwordless auth to an iOS/Swift Applications using Web3Auth.</p>
            <code className={styles.tag}>ios</code>
            <code className={styles.tag}>swift</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=flutter&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/flutter.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a Flutter Application</h3>
            <p>Learn how to add passwordless auth to a Flutter Applications using Web3Auth.</p>
            <code className={styles.tag}>flutter</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/integration-builder?lang=react-native&chain=eth&customAuthentication=no&whitelabel=no">
          <img src="/docs/contents/guides/banners/react-native.png" alt="Banner" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>How to Implement Web3Auth in a React Native Application</h3>
            <p>Learn how to add passwordless auth to a React Native Applications using Web3Auth.</p>
            <code className={styles.tag}>react native</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/ethereum">
          <img src="/docs/contents/guides/banners/ethereum.png" alt="Banner ethereum" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Ethereum Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Ethereum Blockchain</p>
            <code className={styles.tag}>ethereum</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/solana">
          <img src="/docs/contents/guides/banners/solana.png" alt="Banner solana" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Solana Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Solana Blockchain</p>
            <code className={styles.tag}>solana</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/polygon">
          <img src="/docs/contents/guides/banners/polygon.png" alt="Banner polygon" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Polygon Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Polygon Blockchain</p>
            <code className={styles.tag}>polygon</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/starkex">
          <img src="/docs/contents/guides/banners/starkex.png" alt="Banner starkex" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the StarkEx Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the StarkEx Blockchain</p>
            <code className={styles.tag}>starkex</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/starknet">
          <img src="/docs/contents/guides/banners/starknet.png" alt="Banner starknet" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the StarkNet Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the StarkNet Blockchain</p>
            <code className={styles.tag}>starknet</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/tezos">
          <img src="/docs/contents/guides/banners/tezos.png" alt="Banner tezos" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Tezos Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Tezos Blockchain</p>
            <code className={styles.tag}>tezos</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/avalanche">
          <img src="/docs/contents/guides/banners/avalanche.png" alt="Banner avalanche" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Avalanche Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Avalanche Blockchain</p>
            <code className={styles.tag}>avalanche</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/bnb">
          <img src="/docs/contents/guides/banners/binance.png" alt="Banner binance" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Binance Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Binance Blockchain</p>
            <code className={styles.tag}>binance</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/optimism">
          <img src="/docs/contents/guides/banners/optimism.png" alt="Banner optimism" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Optimism Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Optimism Blockchain</p>
            <code className={styles.tag}>optimism</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
        <Link className={styles.article} to="/docs/connect-blockchain/arbitrum">
          <img src="/docs/contents/guides/banners/arbitrum.png" alt="Banner arbitrum" />
          <div className={styles.contentContainer}>
            <span className={styles.type}>GUIDE</span>
            <h3>Integrate Web3Auth with the Arbitrum Blockchain</h3>
            <p>Learn how to integrate Web3Auth with the Arbitrum Blockchain</p>
            <code className={styles.tag}>arbitrum</code>
            <code className={styles.tag}>blockchain</code>
            <code className={styles.tag}>web3auth</code>
            <br />
            <span className={styles.date}>Web3Auth Team | 25th May 2022</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
