import { GithubLogo, X } from "phosphor-react";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.signInButton}>
      <GithubLogo color="#04D361" weight="bold" />
      Christian Pompeu
      <X color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <GithubLogo color="#EBA417" weight="bold" />
      Sign in with github
    </button>
  );
}
