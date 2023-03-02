import styles from "./Team.module.scss";

import { teamMembers } from "utils/data/teamMembers";
import ContextBox from "components/ContextBox/ContextBox";
const Team = () => {
  return (
    <section className={styles.aboutTeam}>
      <ContextBox
        span="Meet the awesome team behind Spoon."
        text="We’re bridging the gap between the world’s oldest and largest industry and a future where technology can be used to solve our hardest problems."
      />
      <div className={styles.teamMembersContainer}>
        {teamMembers.map((member) => (
          <div key={member.id} className={styles.teamMemberBox}>
            <img src={member.image} width={"100%"} alt={member.name} />
            <div className={styles.memberInfo}>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.border}></div>
    </section>
  );
};
export default Team;
