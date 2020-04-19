import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DilogsItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.message} </div>
    )
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Lexa'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Roma'}
    ];
    let messages = [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map(d => <DilogsItem name={d.name} id={d.id}/>)
    // <DilogsItem name = {dialogsData[0].name} id={dialogsData[0].id}/>,
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;