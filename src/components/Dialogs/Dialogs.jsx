import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DilogsItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/'+ props.id}> {props.name}</NavLink>
        </div>
    )
}

const Message =(props) => {
    return(
        <div className={s.dialog}> {props.message} </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DilogsItem name = 'Lexa' id='1'/>
                <DilogsItem name = 'Nastya' id='2'/>
                <DilogsItem name = 'Roma' id='3'/>

            </div>
            <div className={s.messages}>
               <Message message = "Hey"/>
               <Message message = "Hi"/>
               <Message message = "Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;