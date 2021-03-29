import FadeinSection from "./fadeInSection";
import styles from "../index.module.css";

export default function FreshairUnit() {
  const freshAirItems = [
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_64,q_auto/tectony/fresh%20air/icon/%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B8%9A%E0%B8%A7%E0%B8%81_ad8mmt.png",
      desc: "สร้างห้องความดันบวก",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_64,q_auto/tectony/fresh%20air/icon/%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%9C%E0%B9%88%E0%B8%B2%E0%B8%99_HEPA_FILTER_mpudhq.png",
      desc:
        "เติมอากาศสะอาดผ่าน HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน ที่ประสิทธิภาพ 99.99%      ",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_64,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99_PM_2.5_%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A1%E0%B8%A5%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%81_dsjogq.png",
      desc: "ป้องกัน PM 2.5 และมลพิษจากภายนอก    ",
    },
    {
      image:
        "https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_64,q_auto/tectony/fresh%20air/icon/%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%A5%E0%B8%A1%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%AA%E0%B8%B8%E0%B8%94_210_CMH_h1sd16.png",
      desc: "ปริมาณสูงสุด 210 CMH",
    },
  ];
  return (
    <FadeinSection>
      {freshAirItems.map((freshAir, index) => (
        <div
          key={index}
          className={`${styles.MuiGrid_root} ${styles.MuiGrid_container}`}
        >
          <div
            className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_1} `}
          >
            <div className={styles.Home_indexCenter}>
              <div className={styles.Home_imgCap}>
                <div className={styles.Home_imgIconAirBox}>
                  <img
                    className={styles.Home_imgCenter}
                    alt="Picture of the author"
                    src={freshAir.image}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.MuiGrid_root} ${styles.MuiGrid_item} ${styles.MuiGrid_grid_xs_11}`}
            style={{ paddingTop: 2 }}
          >
            <p style={{ textAlign: "left" }}>{freshAir.desc}</p>
          </div>
        </div>
      ))}
    </FadeinSection>
  );
}
