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
  let dialogsData = [
      {id: 1, name: 'Lexa'},
      {id: 2, name: 'Nastya'},
      {id: 3, name: 'Roma'}
  ];

  let messagesData = [
      {id: 1, message: 'Hey'},
      {id: 2, message: 'Hi'},
      {id: 3, message: 'Yo'}
  ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DilogsItem name = {dialogsData[0].name} id={dialogsData[0].id}/>
                <DilogsItem name = {dialogsData[1].name} id={dialogsData[1].id}/>
                <DilogsItem name = {dialogsData[2].name} id={dialogsData[2].id}/>


            </div>
            <div className={s.messages}>
               <Message message = {messagesData[0].message}/>
               <Message message = {messagesData[1].message}/>
               <Message message = {messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;