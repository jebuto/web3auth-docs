import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

export default function QuickNavigation() {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>What is Web3Auth</h2>
      <p>
        Web3Auth is a pluggable wallet infrastructure for Web3 wallets and applications. It streamlines the onboarding of both mainstream and crypto
        native users in under a minute by providing experiences that they're most comfortable with. With support for all OAuth based logins systems,
        web & mobile native platforms, Web3Auth provides a seamless onboarding experience for your users.
      </p>
      <h2 className={styles.heading}>Resources</h2>
      <p>
        We have a varied collection of guides, references and examples to help you around anywhere with your Web3Auth Integration. Deep dive into the
        different aspects of web3 authentication and make your own customised integration.
      </p>
      <div className={styles.cardContainer}>
        <Link className={styles.card} to={`${baseUrl}sdk/`}>
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0498 13.4C10.0498 12.5116 10.4027 11.6595 11.031 11.0312C11.6592 10.403 12.5113 10.05 13.3998 10.05H53.5998C54.4883 10.05 55.3404 10.403 55.9686 11.0312C56.5969 11.6595 56.9498 12.5116 56.9498 13.4V20.1C56.9498 20.9885 56.5969 21.8406 55.9686 22.4689C55.3404 23.0971 54.4883 23.45 53.5998 23.45H13.3998C12.5113 23.45 11.6592 23.0971 11.031 22.4689C10.4027 21.8406 10.0498 20.9885 10.0498 20.1V13.4ZM10.0498 33.5C10.0498 32.6116 10.4027 31.7595 11.031 31.1312C11.6592 30.503 12.5113 30.15 13.3998 30.15H33.4998C34.3883 30.15 35.2404 30.503 35.8686 31.1312C36.4969 31.7595 36.8498 32.6116 36.8498 33.5V53.6001C36.8498 54.4885 36.4969 55.3406 35.8686 55.9689C35.2404 56.5971 34.3883 56.9501 33.4998 56.9501H13.3998C12.5113 56.9501 11.6592 56.5971 11.031 55.9689C10.4027 55.3406 10.0498 54.4885 10.0498 53.6001V33.5ZM46.8998 30.15C46.0113 30.15 45.1592 30.503 44.531 31.1312C43.9028 31.7595 43.5498 32.6116 43.5498 33.5V53.6001C43.5498 54.4885 43.9028 55.3406 44.531 55.9689C45.1592 56.5971 46.0113 56.9501 46.8998 56.9501H53.5998C54.4883 56.9501 55.3404 56.5971 55.9686 55.9689C56.5969 55.3406 56.9498 54.4885 56.9498 53.6001V33.5C56.9498 32.6116 56.5969 31.7595 55.9686 31.1312C55.3404 30.503 54.4883 30.15 53.5998 30.15H46.8998Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>SDK Reference</h5>
            <p>Deep dive into the Web3Auth SDKs and get started with your customised integration.</p>
          </div>
        </Link>
        <Link className={styles.card} to={`${baseUrl}auth-provider-setup/`}>
          <div className={styles.cardIconContainer}>
            <svg className={styles.cardIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.166 4.999C5.06114 4.963 7.84481 3.87746 10 1.944C12.155 3.87782 14.9387 4.96373 17.834 5C17.944 5.65 18 6.32 18 7.001C18 12.226 14.66 16.671 10 18.318C5.34 16.67 2 12.225 2 7C2 6.318 2.057 5.65 2.166 4.999ZM13.707 8.707C13.8892 8.5184 13.99 8.2658 13.9877 8.0036C13.9854 7.7414 13.8802 7.49059 13.6948 7.30518C13.5094 7.11977 13.2586 7.0146 12.9964 7.01233C12.7342 7.01005 12.4816 7.11084 12.293 7.293L9 10.586L7.707 9.293C7.5184 9.11084 7.2658 9.01005 7.0036 9.01233C6.7414 9.0146 6.49059 9.11977 6.30518 9.30518C6.11977 9.49059 6.0146 9.7414 6.01233 10.0036C6.01005 10.2658 6.11084 10.5184 6.293 10.707L8.293 12.707C8.48053 12.8945 8.73484 12.9998 9 12.9998C9.26516 12.9998 9.51947 12.8945 9.707 12.707L13.707 8.707Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Auth Provider Setup</h5>
            <p>Set up your Auth Provider to use it with Web3Auth.</p>
          </div>
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <Link className={styles.card} to={`${baseUrl}connect-blockchain/`}>
          <div className={styles.cardIconContainer}>
            <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.4052 1.35845C11.5865 1.2549 11.7916 1.20044 12.0004 1.20044C12.2092 1.20044 12.4143 1.2549 12.5956 1.35845L14.6956 2.55845C14.8363 2.63451 14.9604 2.73795 15.0606 2.86267C15.1608 2.9874 15.235 3.13089 15.279 3.28472C15.3229 3.43855 15.3356 3.59961 15.3163 3.75843C15.2971 3.91724 15.2463 4.07061 15.1669 4.20951C15.0876 4.34841 14.9812 4.47003 14.8542 4.56723C14.7271 4.66444 14.5819 4.73525 14.4271 4.77551C14.2722 4.81578 14.1109 4.82468 13.9526 4.80169C13.7943 4.7787 13.6422 4.72429 13.5052 4.64165L12.0004 3.78245L10.4956 4.64165C10.3586 4.72429 10.2065 4.7787 10.0482 4.80169C9.88986 4.82468 9.72855 4.81578 9.57372 4.77551C9.41889 4.73525 9.27368 4.66444 9.14662 4.56723C9.01956 4.47003 8.91322 4.34841 8.83385 4.20951C8.75448 4.07061 8.70368 3.91724 8.68445 3.75843C8.66521 3.59961 8.67793 3.43855 8.72184 3.28472C8.76576 3.13089 8.83999 2.9874 8.94017 2.86267C9.04035 2.73795 9.16446 2.63451 9.3052 2.55845L11.4052 1.35845V1.35845ZM6.742 5.40485C6.89976 5.68112 6.94136 6.00874 6.85765 6.31567C6.77395 6.6226 6.57178 6.88373 6.2956 7.04165L6.0196 7.20005L6.2956 7.35845C6.43633 7.43451 6.56044 7.53795 6.66062 7.66267C6.7608 7.7874 6.83504 7.93089 6.87895 8.08472C6.92287 8.23855 6.93558 8.39961 6.91635 8.55843C6.89711 8.71724 6.84631 8.87061 6.76694 9.00951C6.68757 9.14841 6.58123 9.27003 6.45417 9.36723C6.32711 9.46444 6.1819 9.53525 6.02707 9.57551C5.87224 9.61578 5.71093 9.62468 5.55261 9.60169C5.3943 9.5787 5.24218 9.52429 5.1052 9.44165L4.8004 9.26765V9.60005C4.8004 9.91831 4.67397 10.2235 4.44892 10.4486C4.22388 10.6736 3.91866 10.8001 3.6004 10.8001C3.28214 10.8001 2.97691 10.6736 2.75187 10.4486C2.52682 10.2235 2.4004 9.91831 2.4004 9.60005V7.20005C2.39972 6.98449 2.45737 6.77275 2.56722 6.58727C2.67707 6.40179 2.83504 6.24947 3.0244 6.14645L5.1052 4.95845C5.38147 4.80069 5.70908 4.75909 6.01601 4.84279C6.32295 4.9265 6.58408 5.12867 6.742 5.40485V5.40485ZM17.2588 5.40485C17.4167 5.12867 17.6778 4.9265 17.9848 4.84279C18.2917 4.75909 18.6193 4.80069 18.8956 4.95845L20.9752 6.14645C21.1643 6.24992 21.3221 6.4023 21.432 6.58765C21.542 6.77301 21.6002 6.98452 21.6004 7.20005V9.60005C21.6004 9.91831 21.474 10.2235 21.2489 10.4486C21.0239 10.6736 20.7187 10.8001 20.4004 10.8001C20.0821 10.8001 19.7769 10.6736 19.5519 10.4486C19.3268 10.2235 19.2004 9.91831 19.2004 9.60005V9.26765L18.8956 9.44165C18.7586 9.52429 18.6065 9.5787 18.4482 9.60169C18.2899 9.62468 18.1285 9.61578 17.9737 9.57551C17.8189 9.53525 17.6737 9.46444 17.5466 9.36723C17.4196 9.27003 17.3132 9.14841 17.2338 9.00951C17.1545 8.87061 17.1037 8.71724 17.0844 8.55843C17.0652 8.39961 17.0779 8.23855 17.1218 8.08472C17.1658 7.93089 17.24 7.7874 17.3402 7.66267C17.4403 7.53795 17.5645 7.43451 17.7052 7.35845L17.9812 7.20005L17.7052 7.04165C17.429 6.88373 17.2268 6.6226 17.1431 6.31567C17.0594 6.00874 17.101 5.68112 17.2588 5.40485V5.40485ZM8.8588 10.2049C9.01672 9.92867 9.27785 9.7265 9.58478 9.64279C9.89171 9.55909 10.2193 9.60069 10.4956 9.75845L12.0004 10.6177L13.5052 9.75845C13.6422 9.67582 13.7943 9.62141 13.9526 9.59842C14.1109 9.57543 14.2722 9.58433 14.4271 9.62459C14.5819 9.66486 14.7271 9.73567 14.8542 9.83287C14.9812 9.93007 15.0876 10.0517 15.1669 10.1906C15.2463 10.3295 15.2971 10.4829 15.3163 10.6417C15.3356 10.8005 15.3229 10.9616 15.279 11.1154C15.235 11.2692 15.1608 11.4127 15.0606 11.5374C14.9604 11.6622 14.8363 11.7656 14.6956 11.8417L13.2004 12.6961V14.4001C13.2004 14.7183 13.074 15.0235 12.8489 15.2486C12.6239 15.4736 12.3187 15.6001 12.0004 15.6001C11.6821 15.6001 11.3769 15.4736 11.1519 15.2486C10.9268 15.0235 10.8004 14.7183 10.8004 14.4001V12.6961L9.3052 11.8417C9.02901 11.6837 8.82685 11.4226 8.74314 11.1157C8.65943 10.8087 8.70103 10.4811 8.8588 10.2049V10.2049ZM3.6004 13.2001C3.91866 13.2001 4.22388 13.3265 4.44892 13.5515C4.67397 13.7766 4.8004 14.0818 4.8004 14.4001V16.1041L6.2956 16.9585C6.43633 17.0345 6.56044 17.1379 6.66062 17.2627C6.7608 17.3874 6.83504 17.5309 6.87895 17.6847C6.92287 17.8386 6.93558 17.9996 6.91635 18.1584C6.89711 18.3172 6.84631 18.4706 6.76694 18.6095C6.68757 18.7484 6.58123 18.87 6.45417 18.9672C6.32711 19.0644 6.1819 19.1353 6.02707 19.1755C5.87224 19.2158 5.71093 19.2247 5.55261 19.2017C5.3943 19.1787 5.24218 19.1243 5.1052 19.0417L3.0052 17.8417C2.82153 17.7367 2.66886 17.5851 2.56265 17.4022C2.45644 17.2193 2.40046 17.0116 2.4004 16.8001V14.4001C2.4004 14.0818 2.52682 13.7766 2.75187 13.5515C2.97691 13.3265 3.28214 13.2001 3.6004 13.2001V13.2001ZM20.4004 13.2001C20.7187 13.2001 21.0239 13.3265 21.2489 13.5515C21.474 13.7766 21.6004 14.0818 21.6004 14.4001V16.8001C21.6003 17.0116 21.5444 17.2193 21.4381 17.4022C21.3319 17.5851 21.1793 17.7367 20.9956 17.8417L18.8956 19.0417C18.7586 19.1243 18.6065 19.1787 18.4482 19.2017C18.2899 19.2247 18.1285 19.2158 17.9737 19.1755C17.8189 19.1353 17.6737 19.0644 17.5466 18.9672C17.4196 18.87 17.3132 18.7484 17.2338 18.6095C17.1545 18.4706 17.1037 18.3172 17.0844 18.1584C17.0652 17.9996 17.0779 17.8386 17.1218 17.6847C17.1658 17.5309 17.24 17.3874 17.3402 17.2627C17.4403 17.1379 17.5645 17.0345 17.7052 16.9585L19.2004 16.1041V14.4001C19.2004 14.0818 19.3268 13.7766 19.5519 13.5515C19.7769 13.3265 20.0821 13.2001 20.4004 13.2001ZM8.8588 19.8049C9.01672 19.5287 9.27785 19.3265 9.58478 19.2428C9.89171 19.1591 10.2193 19.2007 10.4956 19.3585L10.8004 19.5325V19.2001C10.8004 18.8818 10.9268 18.5766 11.1519 18.3515C11.3769 18.1265 11.6821 18.0001 12.0004 18.0001C12.3187 18.0001 12.6239 18.1265 12.8489 18.3515C13.074 18.5766 13.2004 18.8818 13.2004 19.2001V19.5325L13.5052 19.3585C13.6422 19.2758 13.7943 19.2214 13.9526 19.1984C14.1109 19.1754 14.2722 19.1843 14.4271 19.2246C14.5819 19.2649 14.7271 19.3357 14.8542 19.4329C14.9812 19.5301 15.0876 19.6517 15.1669 19.7906C15.2463 19.9295 15.2971 20.0829 15.3163 20.2417C15.3356 20.4005 15.3229 20.5616 15.279 20.7154C15.235 20.8692 15.1608 21.0127 15.0606 21.1374C14.9604 21.2622 14.8363 21.3656 14.6956 21.4417L12.6136 22.6321C12.4283 22.743 12.2164 22.8015 12.0004 22.8015C11.7844 22.8015 11.5725 22.743 11.3872 22.6321L9.3052 21.4417C9.02901 21.2837 8.82685 21.0226 8.74314 20.7157C8.65943 20.4087 8.70103 20.0811 8.8588 19.8049V19.8049Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Connect Blockchain</h5>
            <p>Connect to the blockchain of your choice.</p>
          </div>
        </Link>
        <Link className={styles.card} to={`${baseUrl}examples`}>
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M41.2585 10.2209C41.676 10.3598 42.0621 10.5797 42.3947 10.8678C42.7272 11.156 42.9998 11.5069 43.1967 11.9004C43.3936 12.294 43.5111 12.7225 43.5424 13.1614C43.5736 13.6003 43.5181 14.0412 43.379 14.4586L29.979 54.6586C29.6983 55.5018 29.0941 56.1989 28.2993 56.5966C27.5046 56.9943 26.5844 57.0599 25.7413 56.7792C24.8981 56.4984 24.201 55.8942 23.8033 55.0995C23.4056 54.3048 23.34 53.3846 23.6207 52.5414L37.0207 12.3414C37.1596 11.9239 37.3795 11.5378 37.6677 11.2052C37.9559 10.8727 38.3067 10.6001 38.7003 10.4032C39.0938 10.2063 39.5223 10.0888 39.9612 10.0575C40.4002 10.0263 40.841 10.0818 41.2585 10.2209ZM19.1183 21.0816C19.7463 21.7098 20.0992 22.5617 20.0992 23.45C20.0992 24.3383 19.7463 25.1903 19.1183 25.8185L11.4368 33.5L19.1183 41.1816C19.4383 41.4906 19.6935 41.8603 19.8691 42.269C20.0446 42.6777 20.137 43.1173 20.1409 43.5621C20.1448 44.0069 20.06 44.448 19.8916 44.8597C19.7231 45.2714 19.4744 45.6455 19.1598 45.96C18.8453 46.2746 18.4713 46.5233 18.0596 46.6917C17.6479 46.8602 17.2067 46.9449 16.7619 46.9411C16.3171 46.9372 15.8775 46.8448 15.4688 46.6692C15.0601 46.4937 14.6904 46.2384 14.3814 45.9185L4.33142 35.8685C3.70339 35.2403 3.35059 34.3883 3.35059 33.5C3.35059 32.6117 3.70339 31.7598 4.33142 31.1316L14.3814 21.0816C15.0096 20.4536 15.8616 20.1008 16.7499 20.1008C17.6382 20.1008 18.4901 20.4536 19.1183 21.0816ZM47.8814 21.0816C48.5096 20.4536 49.3616 20.1008 50.2499 20.1008C51.1382 20.1008 51.9901 20.4536 52.6183 21.0816L62.6683 31.1316C63.2963 31.7598 63.6492 32.6117 63.6492 33.5C63.6492 34.3883 63.2963 35.2403 62.6683 35.8685L52.6183 45.9185C52.3093 46.2384 51.9396 46.4937 51.5309 46.6692C51.1222 46.8448 50.6826 46.9372 50.2378 46.9411C49.793 46.9449 49.3519 46.8602 48.9402 46.6917C48.5285 46.5233 48.1544 46.2746 47.8399 45.96C47.5254 45.6455 47.2766 45.2714 47.1082 44.8597C46.9397 44.448 46.855 44.0069 46.8588 43.5621C46.8627 43.1173 46.9551 42.6777 47.1307 42.269C47.3062 41.8603 47.5615 41.4906 47.8814 41.1816L55.563 33.5L47.8814 25.8185C47.2534 25.1903 46.9006 24.3383 46.9006 23.45C46.9006 22.5617 47.2534 21.7098 47.8814 21.0816Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Examples</h5>
            <p>Explore the range of examples across all our SDKs.</p>
          </div>
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <Link className={styles.card} to="https://toruslabs.medium.com/">
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.7 16.7498C6.7 14.9729 7.40589 13.2687 8.66238 12.0122C9.91887 10.7557 11.623 10.0498 13.4 10.0498H40.2C41.9769 10.0498 43.6811 10.7557 44.9376 12.0122C46.1941 13.2687 46.9 14.9729 46.9 16.7498V50.2498C46.9 52.0268 47.6059 53.7309 48.8624 54.9874C50.1189 56.2439 51.823 56.9498 53.6 56.9498H13.4C11.623 56.9498 9.91887 56.2439 8.66238 54.9874C7.40589 53.7309 6.7 52.0268 6.7 50.2498V16.7498ZM16.75 20.0998H36.85V33.4998H16.75V20.0998ZM36.85 40.1998H16.75V46.8998H36.85V40.1998Z"
                fill="currentColor"
              />
              <path
                d="M50.25 23.4502H53.6C55.377 23.4502 57.0811 24.1561 58.3376 25.4126C59.5941 26.6691 60.3 28.3732 60.3 30.1502V48.5752C60.3 49.9079 59.7706 51.186 58.8282 52.1284C57.8858 53.0708 56.6077 53.6002 55.275 53.6002C53.9423 53.6002 52.6642 53.0708 51.7218 52.1284C50.7794 51.186 50.25 49.9079 50.25 48.5752V23.4502Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Blog</h5>
            <p>
              Learn from the best in the wallet infra market. Product announcements, comparisons, thought leadership articles from Web3Auth just a
              click away.
            </p>
          </div>
        </Link>
        <Link className={styles.card} to={`${baseUrl}content-hub?type=guide`}>
          <div className={styles.cardIconContainer}>
            <svg viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardIcon}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.3674 5.59998C24.6248 5.59998 23.9126 5.89497 23.3875 6.42008C22.8624 6.94518 22.5674 7.65737 22.5674 8.39998C22.5674 9.14258 22.8624 9.85477 23.3875 10.3799C23.9126 10.905 24.6248 11.2 25.3674 11.2H30.9674C31.71 11.2 32.4222 10.905 32.9473 10.3799C33.4724 9.85477 33.7674 9.14258 33.7674 8.39998C33.7674 7.65737 33.4724 6.94518 32.9473 6.42008C32.4222 5.89497 31.71 5.59998 30.9674 5.59998H25.3674Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3672 14C11.3672 12.5148 11.9572 11.0904 13.0074 10.0402C14.0576 8.99002 15.482 8.40002 16.9672 8.40002C16.9672 10.6278 17.8522 12.7644 19.4275 14.3397C21.0028 15.915 23.1394 16.8 25.3672 16.8H30.9672C33.195 16.8 35.3316 15.915 36.9069 14.3397C38.4822 12.7644 39.3672 10.6278 39.3672 8.40002C40.8524 8.40002 42.2768 8.99002 43.327 10.0402C44.3772 11.0904 44.9672 12.5148 44.9672 14V44.8C44.9672 46.2852 44.3772 47.7096 43.327 48.7598C42.2768 49.81 40.8524 50.4 39.3672 50.4H16.9672C15.482 50.4 14.0576 49.81 13.0074 48.7598C11.9572 47.7096 11.3672 46.2852 11.3672 44.8V14ZM19.7672 25.2C19.0246 25.2 18.3124 25.495 17.7873 26.0201C17.2622 26.5452 16.9672 27.2574 16.9672 28C16.9672 28.7426 17.2622 29.4548 17.7873 29.9799C18.3124 30.505 19.0246 30.8 19.7672 30.8H19.7952C20.5378 30.8 21.25 30.505 21.7751 29.9799C22.3002 29.4548 22.5952 28.7426 22.5952 28C22.5952 27.2574 22.3002 26.5452 21.7751 26.0201C21.25 25.495 20.5378 25.2 19.7952 25.2H19.7672ZM28.1672 25.2C27.4246 25.2 26.7124 25.495 26.1873 26.0201C25.6622 26.5452 25.3672 27.2574 25.3672 28C25.3672 28.7426 25.6622 29.4548 26.1873 29.9799C26.7124 30.505 27.4246 30.8 28.1672 30.8H36.5672C37.3098 30.8 38.022 30.505 38.5471 29.9799C39.0722 29.4548 39.3672 28.7426 39.3672 28C39.3672 27.2574 39.0722 26.5452 38.5471 26.0201C38.022 25.495 37.3098 25.2 36.5672 25.2H28.1672ZM19.7672 36.4C19.0246 36.4 18.3124 36.695 17.7873 37.2201C17.2622 37.7452 16.9672 38.4574 16.9672 39.2C16.9672 39.9426 17.2622 40.6548 17.7873 41.1799C18.3124 41.705 19.0246 42 19.7672 42H19.7952C20.5378 42 21.25 41.705 21.7751 41.1799C22.3002 40.6548 22.5952 39.9426 22.5952 39.2C22.5952 38.4574 22.3002 37.7452 21.7751 37.2201C21.25 36.695 20.5378 36.4 19.7952 36.4H19.7672ZM28.1672 36.4C27.4246 36.4 26.7124 36.695 26.1873 37.2201C25.6622 37.7452 25.3672 38.4574 25.3672 39.2C25.3672 39.9426 25.6622 40.6548 26.1873 41.1799C26.7124 41.705 27.4246 42 28.1672 42H36.5672C37.3098 42 38.022 41.705 38.5471 41.1799C39.0722 40.6548 39.3672 39.9426 39.3672 39.2C39.3672 38.4574 39.0722 37.7452 38.5471 37.2201C38.022 36.695 37.3098 36.4 36.5672 36.4H28.1672Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <h5>Guides</h5>
            <p>Set up your Auth Provider to use it with Web3Auth.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
