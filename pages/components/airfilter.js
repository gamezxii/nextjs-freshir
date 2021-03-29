import FadeinSection from "./fadeInSection";
import styles from "../index.module.css";
export default function AirFilter() {
  const item = [
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99_COVID-19_%E0%B8%AB%E0%B8%A1%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94_go7ux7.png",
      title: "หมุนเวียนอากาศสะอาดผ่าน HEPA FILTER",
      desc: "ประสิทธิภาพการกรอง 99.999% on 0.3 micron",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon%202/settings_fe7xep.png",
      title: "ติดตั้ง HEPA FILTER Class H14 EN 1822:2009",
      desc: "ผ่านการทดสอบ Installation Leak Test (ISO14644-3(2005))",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon/%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%AA%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%A5%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%90%E0%B8%B2%E0%B8%99_hxbvqe.png",
      title: "ออกแบบสอดคล้องตามมาตรฐาน",
      desc:
        "การออกแบบสอดคล้องตามมาตรฐาน กองแบบแผนกระทรวงสาธารณสุข เอกสารเลขที่ ก.45/เม.ย./63",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%A5%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B8%87_n6sru1.png",
      title: "ปริมาณลมสูง 1,000 CFM",
      desc: "อัตราหมุนเวียนอากาศ 50 ACH (ห้องขนาดมาตรฐาน 3m x 4m x 2.8m)",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon/%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B5%E0%B8%A2%E0%B8%9A_ukargk.png",
      title: "เสียงเงียบ",
      desc: "เสียงเบา ไม่เกิน 10 dB (เทียบกับขณะตอนปิดเครื่อง)",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_96,q_auto/tectony/fresh%20air/icon/pm_2.5_plfk8q.png",
      title: "กรองฝุ่น PM 2.5",
      desc: "ป้องกันวัณโรค แบคทีเรีย เชื้อไวรัส Covid-19",
    },
  ];

  return (
    <div
      className={`${styles.MuiGrid_root} ${styles.MuiGrid_container} ${styles.MuiGrid_spacing_xs_3}`}
    >
      <div
        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_md_4} `}
      >
        <div className={styles.Home_indexCenter}>
          <div className={styles.Home_imgCap}>
            <div className={styles.Home_imgAirBox}>
              <img
                className={styles.Home_imgCenter}
                src="/hcu_profduct_scscko.png"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_md_8} `}
      >
        <FadeinSection>
          <h2 className={styles.Home_index_h3_air}>
            เครื่องกรองอากาศควบคุมเชื้อ
          </h2>
          <div className={styles.Home_index_line_air}></div>
        </FadeinSection>
        <div className={styles.Home_marginTop15}>
          {item.map((i, index) => (
            <FadeinSection key={index}>
              <div
                style={{ marginBottom: 10 }}
                className={`${styles.MuiGrid_root} ${styles.MuiGrid_container}`}
              >
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_2} `}
                >
                  <div className={styles.Home_imgCap}>
                    <div className={styles.Home_imgIconBox}>
                      <img
                        className={styles.Home_imgCenter}
                        src={i.image}
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_10}`}
                >
                  <div style={{ textAlign: "left" }}>
                    <div>
                      <span className={styles.Home_index_text_detail}>
                        {i.title}
                      </span>
                    </div>
                    <small>{i.desc}</small>
                  </div>
                </div>
              </div>
            </FadeinSection>
          ))}
        </div>
      </div>
    </div>
  );
}
