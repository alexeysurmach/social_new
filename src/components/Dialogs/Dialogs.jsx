import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


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


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
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