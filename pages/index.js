import Head from "next/head";
import Navbar from "./components/header";
import Contactus from "./components/contactus";
import dynamic from "next/dynamic";
import styles from "./index.module.css";
import BoxImage from "./components/boxImage";
import FadeinSection from "./components/fadeInSection";
import FreshairUnit from "./components/freshairunit";
import AirFilter from "./components/airfilter";
import Link from "next/link";

const Carousel = dynamic(() => import("./components/carousel"), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>เครื่องกรองอากาศควบคุมเชื้อ เติมอากาศสะอาด</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/Logo_air_ql74ln.psd"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        />
        <script
          nomodule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        />
      </Head>

      <Navbar />

      <main className={styles.Home_main}>
        <div className={styles.MuiContainer__root}>
          <h1 className={styles.Home__indexTitle}>Fresh Air Solution</h1>
          <h4 className={styles.Home_indexDetail}>
            อากาศสะอาดที่คุณสร้างเองได้
          </h4>
          <div style={{ marginTop: 30 }}>
            <Carousel />
          </div>
          <div className={styles.Home__margintop100}>
            <FadeinSection>
              <h1 className={styles.Home__indexTitle}>
                HEPA CIRCULATION UNIT: HCU
              </h1>
              <h4 className={styles.Home_indexDetail}>
                เครื่องกรองอากาศควบคุมเชื้อ
              </h4>
              <h5 className={styles.Home_indexDetail2}>
                สะอาดปลอดภัยหายใจได้เต็มปอด
              </h5>
              <div className={styles.Home_indexLine}></div>
            </FadeinSection>
          </div>
          <div className={styles.Home_img}>
            <img
              className={styles.Home_imgCenter}
              alt="Picture of the author"
              src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/huc_preview_yuyfzk.png"
              decoding="async"
            />
          </div>

          <div className={styles.Home__marginTop70}>
            {" "}
            <AirFilter />
          </div>
          <div style={{ marginTop: 70 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/รูปภาพ%202/hepa_u3z8rg.png"
              }
            />
          </div>
          <FadeinSection>
            <h1
              className={styles.Home_indexTitle2}
              style={{ textAlign: "left" }}
            >
              FRESH AIR UNIT
            </h1>
          </FadeinSection>
          <BoxImage
            image={
              "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/fresh_air_preview_wva0nk.png"
            }
          />
          {/*  */}
          <FadeinSection>
            <h2 style={{ textAlign: "left", fontSize: 32 }}>
              Fresh Air Unit เติมอากาศสะอาดในบ้านเพื่อคนที่คุณรัก
            </h2>
            <div className={styles.Home_index_line_air}></div>
          </FadeinSection>

          <div style={{ marginTop: 15 }}>
            <FreshairUnit />
          </div>
          <div style={{ marginTop: 25 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/fresh_air_system_ur6e0r.png"
              }
            />
          </div>
          <div style={{ marginTop: 25 }}>
            <h1 className={styles.Home_indexTitle5}>
              เติมอากาศสะอาดผ่าน Pre Filter และ HEPA Filter
            </h1>
          </div>
          <div style={{ marginTop: 14, textAlign: "left" }}>
            <p>
              ・ HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน
              ที่ประสิทธิภาพ 99.99%
            </p>
            <p>・ สามารถป้องกัน PM 2.5 และมลพิษจากภายนอกได้</p>
            <p>
              ・ สามารถป้องกันการปนเปื้อนของเชื้อไวรัส โควิด-19 จากภายนอกได้
            </p>
          </div>
          <div style={{ marginTop: 34 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/parimanrom_nzxpsu.png"
              }
            />
          </div>
          <p className={styles.Home_indexCenter} style={{ marginTop: 14 }}>
            4.5 ACH ที่ 16 ตร.ม. - 1 ACH ที่ 64 ตร.ม. ที่ความสูงเพดาน 2.7 ม.
          </p>
          <FadeinSection>
            <h1
              className={styles.Home_indexTitle5}
              style={{ marginTop: 35, fontSize: 40 }}
            >
              ปกป้องห้องสำคัญด้วย Positive Pressure
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 34 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/positive_pressure2_oal38x.png"
              }
            />
          </div>
          <p
            className={styles.Home_index_d_positive}
            style={{ textAlign: "left" }}
          >
            <span className={styles.Home_index_d_positive2}>
              หลักการ positive pressure
            </span>
            คือ การทำให้ภายในห้องมีความดันอากาศมากกว่าภายนอกห้อง
            ความดันในห้องที่มากกว่าจะป้องกันการรั่วไหลของของอากาศภายนอกผ่านรอยรั่วของห้อง
            เช่น ร่องประตู,ขอบหน้าต่าง,ขอบฝ้าเพดาน และรอยร้าวของผนัง เป็นต้น
          </p>
          <FadeinSection>
            <h1 style={{ marginTop: 20 }} className={styles.Home_index_smart}>
              Smart Infection Control System
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 34 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/รูปภาพ%202/Image_from_iOS_1_1_1_runihv.gif"
              }
            />
          </div>
          <h1
            className={styles.Home_indexTitle5}
            style={{ fontSize: 40, textAlign: "left" }}
          >
            HEPA Circulation Unit
          </h1>
          <p
            className={styles.Home_index_text_paragraph}
            style={{ marginTop: 15, textAlign: "left" }}
          >
            ระบบสร้างอากาศบริสุทธิ์สำหรับทันตกรรม
            การออกแบบสอดคล้องกับคำแนะนำตามมาตรฐานกองแบบแผน กระทรวงสาธารณสุข
            ตามเอกสารเลขที่ ก.45/เม.ย./63 โดยมุ่งเน้นไปที่ส่วนสำคัญ 2
            ส่วนหลักคือ
          </p>
          <p
            className={styles.Home_index_text_paragraph}
            style={{ textAlign: "left" }}
          >
            1. เติมอากาศบริสุทธิ์จากภายนอก ซึ่งผ่านการกรองด้วย{" "}
            <span className={styles.Home_index_color_only}>
              HEPA Filter class H13
            </span>{" "}
            เข้ามาภายในห้อง{" "}
            <span className={styles.Home_index_color_only}>3 ACH</span>
          </p>
          {/*  */}
          <p
            className={styles.Home_index_text_paragraph}
            style={{ textAlign: "left" }}
          >
            2. หมุนเวียนอากาศภายในห้องให้บริสุทธิ์ โดยกรองผ่าน
            <span className={styles.Home_index_color_only}>
              HEPA Filter class H14 : EN1822 (2009)
            </span>{" "}
            เมื่อขณะทำงาน ระบบในห้องสามารถสร้างอากาศสะอาดอยู่ที่{" "}
            <span className={styles.Home_index_color_only}>21</span> ACH
            และเมื่อเสร็จงาน
            การทำงานช่วงพักห้องระบบสามารถสร้างอากาศสะอาดสูงสุดที่{" "}
            <span className={styles.Home_index_color_only}>50 ACH</span>{" "}
            ด้วยการออกแบบระบบนี้ จึงสามารถทำความสะอาดในห้องให้สะอาด
            <span className={styles.Home_index_color_only}>99.9%</span>
            ภายในระยะเวลา{" "}
            <span className={styles.Home_index_color_only}>8</span> นาที
            ซึ่งลดระยะเวลาการพักห้อง และสามารถรับเคสต่อไปได้เร็วขึ้น
          </p>
          {/*  */}
          <div
            className={styles.Home_index_border_left}
            style={{ marginTop: 20, textAlign: "left" }}
          >
            <p style={{ fontSize: 20 }}>
              8 MINS FOR REMOVAL WITH 99.9% EFFICIENCY
            </p>
            <p style={{ fontSize: 20 }}>
              (50 ACH @ standard Room size 3(w)x4(l)x2.8(h))
            </p>
          </div>
          {/*  */}
          <FadeinSection>
            <h1
              className={styles.Home_indexTitle5}
              style={{ marginTop: 40, fontSize: 40, margin: "45px 0px 35px" }}
            >
              ตัวอย่างการติดตั้ง
            </h1>
          </FadeinSection>
          {/*  */}
          <div style={{ marginTop: 34 }}>
            <div className={styles.Home_imgCap}>
              <div className={styles.Home_imgBox}>
                <img
                  className={styles.Home_imgCenter}
                  alt="Picture of the author"
                  src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Cafe_lrjf0t.png"
                />
              </div>
            </div>
          </div>
          {/*  */}
          <FadeinSection>
            <h1
              className={styles.Home_index_title_left}
              style={{ marginTop: 34 }}
            >
              Cafe
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 23 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Classroom_e0dn8p.png"
              }
            />
          </div>
          <FadeinSection>
            <h1
              className={styles.Home_index_title_right}
              style={{ marginTop: 34 }}
            >
              Classroom
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 23 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Fitness3_gglzv1.png"
              }
            />
          </div>
          <FadeinSection>
            <h1 className={styles.Home_index_title_left}>Fitness</h1>
          </FadeinSection>
          <div style={{ marginTop: 23 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/Office_owlopv.png"
              }
            />
          </div>
          <FadeinSection>
            <h1
              className={styles.Home_index_title_right}
              style={{ marginTop: 34 }}
            >
              Office
            </h1>
          </FadeinSection>

          <div style={{ marginTop: 23 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/review_product_nhf94f.png"
              }
            />
          </div>
          <div style={{ marginTop: 23 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/review_300_ycxikr.png"
              }
            />
          </div>
          <FadeinSection>
            <h1 className={styles.Home_index_title_left}>
              คลินิกทันตกรรม โรงพยาบาลอู่ทอง
            </h1>
          </FadeinSection>
          <FadeinSection>
            <h1
              className={styles.Home_indexTitle2}
              style={{ marginTop: 34, textAlign: "center", marginBottom: 0 }}
            >
              Fresh Air Solution
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 32 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/dark_kcrs5n.png"
              }
            />
          </div>
          <FadeinSection>
            <h1 style={{ marginTop: 34, textAlign: "center", fontSize: 40 }}>
              Our Partner
            </h1>
          </FadeinSection>
          <div
            style={{ marginTop: 23, display: "flex", justifyContent: "center" }}
          >
            <div className={styles.Home_imgCap__2UU3n}>
              <div className={styles.Home_img_Partner_Box}>
                <img
                  className={styles.Home_imgCenter}
                  alt="Picture of the author"
                  src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_640,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/dark2_xvo1ep.png"
                />
              </div>
            </div>
          </div>
          <FadeinSection>
            <h1 style={{ marginTop: 34, textAlign: "center", fontSize: 40 }}>
              Our Clients
            </h1>
          </FadeinSection>
          <div style={{ marginTop: 34 }}>
            <BoxImage
              image={
                "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_3840,q_auto/tectony/fresh%20air/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E%202/2png_omx0qp.png"
              }
            />
          </div>
          <div style={{ marginTop: 50, textAlign: "center" }}>
            <a href="https://lin.ee/WtnzOp2">
              <button
                className={styles.Home_index_button}
                style={{ background: "#4ac911" }}
              >
                <span className={styles.Home_index_text_button}>
                  สอบถามเพิ่มเติม
                </span>
                <span className={styles.Home_index_text_button}> LINE </span>
                <i
                  className="fab fa-line index_icon_play__irFsO"
                  style={{ fontSize: 20 }}
                ></i>
              </button>
            </a>
          </div>
          <Contactus />
        </div>
      </main>

      <style jsx global>{`
        @import url(https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap);
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body,
        html {
          padding: 0;
          margin: 0;
          font-family: kanit;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        a,
        body,
        button,
        div,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        i,
        input,
        li,
        p,
        small,
        span,
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          border: 0;
          -webkit-tap-highlight-color: transparent;
          text-decoration: none;
          color: inherit;
          font-family: Kanit, sans-serif;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5 {
          padding: 0;
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
        }

        h1:last-child,
        h2:last-child,
        h3:last-child,
        h4:last-child,
        h5:last-child {
          margin-bottom: 0;
        }

        h1:first-child,
        h2:first-child,
        h3:first-child,
        h4:first-child,
        h5:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
