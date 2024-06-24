import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"50px"}}>Contact</h1>
      <div className='contact_content'>
        <p>名前<span style={{color:"red"}}>*</span></p>
        <input placeholder="名前"type='text'/>
        <p>メールアドレス<span style={{color:"red"}}>*</span></p>
        <input placeholder="メールアドレス"type='text'/>
        <p>内容<span style={{color:"red"}}>*</span></p>
        <textarea placeholder="１０文字以上" />
        <br />
        <button>送信</button>
      </div>
    </div>
  )
}

export default Contact