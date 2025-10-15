import style from "./MembershipExecutedTableHeader.module.css";

const columns = ["Name", "Phone", "Email", "Executed", "Status"];

export const MembershipExecutedTableHeader = () => {
  return (
    <>
      <div className={style.usertable__header}>
        {columns.map((col, i) => (
          <div key={i} className={style.usertable__headercell}>
            {col}
          </div>
        ))}
      </div>
    </>
  );
};
