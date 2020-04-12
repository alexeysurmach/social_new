import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Lexa
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
                <div className={s.dialog}>
                    Nastya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}> Hey </div>
                <div className={s.dialog}> Hi </div>
                <div className={s.dialog}> Yo </div>
            </div>
        </div>
    )
}

export default Dialogs;