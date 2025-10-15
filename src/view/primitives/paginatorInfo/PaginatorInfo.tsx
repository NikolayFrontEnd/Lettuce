import style from './Paginator.module.css';

export const PaginatorInfo = () => {
    
    return (
        <>
        <div className={style.toolbar__amount}>
    <div className={style.toolbar__blockWithNumber}>{0}</div>
    <div>of</div>
    <div>{0}</div>
  </div>  
        </>
    )
}