import styles from "./contactus.module.css";
import { getSortedContactusData } from "../lib/contactus";
import Link from "next/link";
import Header from "../components/header";
import { useRouter } from "next/router";

export default function Contactus({ allContactData }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className={styles.contact__container}>
        <h3>
          <Link href="/">Back</Link>
        </h3>
        <div className={styles.contact__header}>
          <span>Name</span>
          <span>Phonenumber</span>
          <span>Email</span>
          <span>Message</span>
          <span>Created</span>
        </div>
        <div className={styles.contact__content}>
          {allContactData.map((item) => (
            <div
              key={item._id}
              className={styles.contact__content__inner}
              onClick={() =>
                router.push({
                  pathname: "/contact/[id]",
                  query: {
                    id: item._id,
                    name: item.name,
                    phonenumber: item.phonenumber,
                    email: item.email,
                    message: item.message,
                    created: item.created,
                  },
                })
              }
            >
              <span>
                {" "}
                <b className={styles.contact__visible}>Name :</b> {item.name}
              </span>
              <span>
                <b className={styles.contact__visible}>Phonenumber :</b>
                {item.phonenumber}
              </span>
              <span>
                <b className={styles.contact__visible}>Email :</b>
                {item.email}
              </span>
              <span>
                <b className={styles.contact__visible}>Message :</b>
                {item.message.substring(0, 10) + "..."}
              </span>
              <span>
                <b className={styles.contact__visible}>Created :</b>
                {item.created}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const contactus = await getSortedContactusData();

  return {
    props: {
      allContactData: contactus || {},
    },
  };
}
