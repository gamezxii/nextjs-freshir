import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./id.module.css";
import React from "react";
import Loader from "../components/spinner";
import Header from "../components/header";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isConfirm, setIsConfirm] = React.useState(false);
  const router = useRouter();
  const { id, name, message, email, phonenumber, created } = router.query;
  async function deleteItem(id) {
    setIsConfirm(!isConfirm);
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:9000/contactus/` + id, {
        method: "DELETE",
      });
      const json = await res.json();
      if (json.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          router.push("/contact");
        }, 2500);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function CardConfirm() {
    return (
      <div className={styles.card__confirm}>
        <h3>คุณแน่ใจว่าต้องการลบข้อมูลนี้ ?</h3>
        <div className={styles.card__confirm__inner}>
          <button
            onClick={() => setIsConfirm(!isConfirm)}
            className={styles.cancle}
          >
            ยกเลิก
          </button>
          <button onClick={() => deleteItem(id)} className={styles.accept}>
            ตกลง
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        {isLoading ? <Loader /> : null}
        {isConfirm ? <CardConfirm /> : null}
        <h1>
          <Link href="/contact">
            <a>Back</a>
          </Link>
        </h1>
        <div className={styles.box__item}>
          <h3>Name: {name}</h3>
        </div>
        <div className={styles.box__item}>
          <h3>Phonenumber: {phonenumber}</h3>
        </div>
        <div className={styles.box__item}>
          <h3>Email: {email}</h3>
        </div>
        <div className={styles.box__item}>
          <span>
            <h3>Message: </h3>
            <h5>{message}</h5>
          </span>
        </div>
        <div className={styles.box__item}>
          <h3>Created: {created}</h3>
        </div>
        <button onClick={() => setIsConfirm(!isConfirm)}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
