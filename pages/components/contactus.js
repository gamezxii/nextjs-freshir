import styles from "./contactus.module.css";
import React, { useState } from "react";
import Loader from "./spinner";

export default function contactus() {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const [formContact, setFormContact] = useState({
    name: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formContact.name.length < 6 ||
      formContact.name === "" ||
      formContact.phonenumber.length < 6 ||
      formContact.phonenumber === "" ||
      formContact.email.length < 6 ||
      formContact.email === ""
    ) {
      setValidation(true);
    } else {
      setIsLoading(true);

      handleUpdateToserver();
    }
  };

  const handleUpdateToserver = async () => {
    await fetch("http://localhost:9000/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formContact),
    })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
          setValidation(false);
          setFormContact({ name: "", phonenumber: "", email: "", message: "" });
        }, 3000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginTop: 30, textAlign: "center" }}>
      <div className={styles.loading}>{isLoading ? <Loader /> : ""}</div>
      <h1>Contact Us</h1>
      <form className={`${styles.ul} ${styles.form}`} onSubmit={handleSubmit}>
        <div className={`${styles.field} ${styles.contactForm_input}`}>
          <label>Name</label>
          {validation && (
            <span className={styles.error}>Please enter a name</span>
          )}
          <div className={styles.ui}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className=""
              value={formContact.name}
              onChange={(e) =>
                setFormContact({ ...formContact, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`${styles.field} ${styles.contactForm_input}`}>
          <label>Phome number</label>
          {validation && (
            <span className={styles.error}>Please enter a phone number</span>
          )}
          <div className={styles.ui}>
            <input
              type="text"
              placeholder="Phonenumber"
              name="phonenumber"
              className=""
              value={formContact.phonenumber}
              onChange={(e) =>
                setFormContact({ ...formContact, phonenumber: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`${styles.field} ${styles.contactForm_input}`}>
          <label>Email</label>
          {validation && (
            <span className={styles.error}>Please enter an email</span>
          )}
          <div className={styles.ui}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className=""
              value={formContact.email}
              onChange={(e) =>
                setFormContact({ ...formContact, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className={`${styles.field} ${styles.contactForm_input}`}>
          <label>Message</label>
          <div className={styles.ui}>
            <textarea
              placeholder="Message"
              name="Message"
              rows="3"
              value={formContact.message}
              onChange={(e) =>
                setFormContact({ ...formContact, message: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
}
