import { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <div className={styles.loginLogo}>⬚</div>
        <h1 className={styles.loginTitle}>Product Data Repository</h1>
        <p className={styles.loginSubtitle}>Secure Data Management System</p>
      </div>

      <div className={styles.loginRight}>
        <div className={styles.loginFormContainer}>
          <h2 className={styles.loginFormTitle}>Welcome Back</h2>
          <p className={styles.loginFormSubtitle}>Sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <div className={styles.loginFormGroup}>
              <label className={styles.loginFormLabel}>Email Address</label>
              <input
                type="email"
                className={styles.loginFormInput}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.loginFormGroup}>
              <label className={styles.loginFormLabel}>Password</label>
              <input
                type="password"
                className={styles.loginFormInput}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.loginFormRemember}>
              <input
                type="checkbox"
                className={styles.loginFormCheckbox}
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </div>

            <button type="submit" className={styles.loginFormSubmit}>
              Sign In
            </button>
          </form>

          <p className={styles.loginFormLink}>
            Don’t have an account?{" "}
            <a href="#" className={styles.loginFormLinkAnchor}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
