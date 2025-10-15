import style from "./MembershipScheduledTableHeader.module.css";

const columns = ["Name", "Phone", "Email", "Scheduled", "Actions"];

export const MembershipScheduledTableHeader = () => {
  return (
    <div className={style.usertable__header}>
      {columns.map((col, i) => (
        <div key={i} className={style.usertable__headercell}>
          {col}
        </div>
      ))}
    </div>
  );
};
