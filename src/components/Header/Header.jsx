import React from "react";
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://www.logaster.ru/blog/wp-content/uploads/2018/03/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-NASA.png'/>
        </header>
    )
}
export default Header;