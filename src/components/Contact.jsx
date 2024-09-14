import React, { useContext, useState } from 'react';
import "./Contact.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // dbを正しくインポート
import { ContactInf } from '../Frominfo';
import { useForm } from 'react-hook-form';
import { Button, Container } from '@chakra-ui/react';


function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contact = useContext(ContactInf);
  console.log(contact)

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    setName(watch("name"));
    setEmail(watch("email"));
    setMessage(watch("content"));
    try {
      await addDoc(collection(db, "contact"), {
        name: name,
        email: email,
        message: message,
        createdAt: new Date(),
      });
      window.alert("メールが送信されました！");

    } catch (error) {
      console.error("Error adding document: ", error);
      window.alert("メールの送信に失敗しました");
    }
    reset();
  }
  return (
    <Container as='form' p='10' boxShadow='md' borderRadius='md'>
      <h1 style={{ textAlign: "center" }}>Contact</h1>
      <div className='contact_content'>
        < p > 名前 < span style={{ color: "red" }}>*</ span></p >
        <input
          placeholder="名前"
          value={watch("name")}
          type='text'
          {...register("name", { required: "内容を入力してください。" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}


        <p>メールアドレス<span style={{ color: "red" }}>*</span></p>
        <input
          placeholder="メールアドレス"
          value={watch("email")}
          {...register("email", {
            required: "メールアドレスを入力してください。",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'メールアドレスの形式が不正です',
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <p>内容<span style={{ color: "red" }}>*</span></p>
        <textarea
          placeholder="１０文字以上"
          value={watch("content")}
          {...register("content", {
            required: "内容を入力してください。",
            minLength: {
              value: 10,
              message: "10文字以上入力してください。"
            },
          })}
        />
        {
          errors.content &&
          <div style={{
            backgroundColor: '#ffe6e6',
            border: '1px solid #ff0000',
            padding: '4px',
            borderRadius: '4px',
            color: '#ff0000',
            marginTop: '4px'
          }}>
            <p>{errors.content.message}</p>
          </div>
        }
        <br />
        <Button onClick={handleSubmit(onSubmit)}>送信</Button>

      </div >

      <div className="sample"></div>

      <footer style={{ position: "fixed", bottom: "0px" }}>
        <p>© 2024 Kudo Kousei</p>
      </footer>

    </Container>
  );
}

export default Contact;
