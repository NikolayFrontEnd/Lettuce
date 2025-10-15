import style from './MembershipExecutedTableRow.module.css'

export const MembershipExecutedTableRow = () => {
      const getStatusClass = (outcome: string) => {
    const base = style.usertable__cell__status__circle;
    return `${base} ${
      outcome === "success"
        ? style.usertable__cell__status__circle__success
        : style.usertable__cell__status__circle__failed
    }`;
  };
    return (
        <>
{/*         <div className={style.usertable__userblock}>
        <div className={style.usertable__cell}>
          {cancellation.firstName} {cancellation.lastName}
        </div>
        <div className={style.usertable__cell}>{cancellation.phoneNumber}</div>
        <div className={style.usertable__cell}>{cancellation.emailAddress}</div>
        <div className={style.usertable__cell}>
          {formatDate(cancellation.createdAt)}
        </div>
        <div className={style.usertable__cell__status}>
          <div className={getStatusClass(cancellation.outcome)}>
            {cancellation.outcome}
          </div>
        </div>
      </div> */}
        </>
    )
}