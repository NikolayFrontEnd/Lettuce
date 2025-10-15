import style from './CustomerTableHeader.module.css'

const columns = ["Name", "Phone", "Email", "Actions"];


export const CustomerTableHeader = () => {
    
    return (
<div className={style.usertable__header}>
    {columns.map((col, i) => (
      <div key={i} className={style.usertable__headercell}>
        {col}
      </div>
    ))}
  </div>
    )
}