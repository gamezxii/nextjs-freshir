import styles from "../index.module.css";

export default function BoxImage({ image }) {
  return (
    <div className={styles.Home_imgCap}>
      <div className={styles.Home_imgBox}>
        <img
          className={styles.Home_imgCenter}
          alt="Picture of the author"
          src={image}
        />
      </div>
    </div>
  );
}
