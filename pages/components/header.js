import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <div className={styles.Home__menu}>
        <p className={styles.Home_websiteName__3GYqI}>
          <img
            className={styles.Home_weblogo__2oIBE}
            src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/Logo_air_ql74ln.psd"
            decoding="async"
          />
        </p>
      </div>
    </nav>
  );
}
