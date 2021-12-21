import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messange/Messange";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import { Redirect } from "react-router";
import { Field,  reduxForm, Form } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} avatar={dialog.avatar} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => { //messages - newMessageBody
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) return <Redirect to={"/Login"} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <Button 
        color="secondary" size="small"endIcon={<SendIcon />} variant="contained">Send
        </Button>
      </div>
    </Form>
  );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm) ;

export default Dialogs;
