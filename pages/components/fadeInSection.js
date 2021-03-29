import React from "react";
import styles from "../index.module.css";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`${styles.fade__in__section}  ${
        isVisible ? styles.is__visible : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
