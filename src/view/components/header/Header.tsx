import type { PageType } from "../../pages/mainPage/MainPage";
import HeaderIcon from "../../primitives/icons/HeaderIcon";
import style from "./Header.module.css";

interface HeaderProp{
page:PageType;
changePage:(page:PageType) => void;
}

export const Header = ({page, changePage}:HeaderProp) => {
    
    return (
            <div className={style.header}>
      <div className={style.header__logo}>
        <HeaderIcon />
      </div>

      <div className={style.header__menu}>
<div onClick = {()=>changePage(0)} className={page === 0 ? style.header__menu__item__active : style.header__menu__item}>
Customers
</div>

<div onClick = {()=>changePage(1)}  className={page === 1 ? style.header__menu__item__active : style.header__menu__item}>
Scheduled Membership Cancellation
</div>

<div onClick = {()=>changePage(2)}  className={ page === 2 ? style.header__menu__item__active : style.header__menu__item}>
Executed Membership Cancellation
</div>
      </div>
    </div>
    )
}