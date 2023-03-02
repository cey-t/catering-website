import styles from "./AboutMission.module.scss";
import ContextBox from "components/ContextBox/ContextBox";
const AboutMission = () => {
  const Missions = [
    {
      id: 1,
      name: "Stay Curious",
      content:
        "Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.",
    },
    {
      id: 2,
      name: "Be respectful",
      content:
        "Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.",
    },
    {
      id: 3,
      name: "Do good work",
      content:
        "Esse audiam assentior pri in, ius probatus singulis ne. Exerci fastidii duo ex, ex quo unum senserit.",
    },
  ];
  return (
    <section className={styles.missionRoot}>
      <div className={styles.border}></div>
      <ContextBox
        span="Ad malorum nominati vituperata vix."
        text="Te omnis oporteat vis, omnes reprehendunt nam in. Cum salutatus democritum argumentum an."
        className={styles.contextBox}
      />
      <div className={styles.companyMissions}>
        {Missions.map((mission) => (
          <div key={mission.id} className={styles.missionContainer}>
            <h3 className={styles.missionKey}>0{mission.id}</h3>
            <h2 className={styles.missionText}>{mission.name}</h2>
            <p className={styles.missionContent}>{mission.content}</p>
          </div>
        ))}
      </div>
      <div className={styles.border}></div>
    </section>
  );
};
export default AboutMission;
