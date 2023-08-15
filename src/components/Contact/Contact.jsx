import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message})
      })
      if (response.ok) {
        console.log('Email send successfull')
      } else {
        console.error('Error sending this message')
      }
    } catch (error) {
      console.error('Error sending this message', error)
    }
  }

  return (
    <>
      <div className="contact">
        <h2 className="contact__title">Contact me</h2>
        <h2 className="contact__subtitle">Drop Me a message</h2>
        <p className="contact__description">
          if you want to know more about my work, you can just leave me a
          message on my WhatsApp or email, see you soon.
        </p>
        <section className="contact__buttons">
          <div>
            <h3 className="contact">
              <i className="bx bxl-whatsapp"></i>+57 313 2160638
            </h3>
          </div>
          <div>
            <h3 className="contact">
              <i className="bx bxs-envelope"></i>jhonnatan.freire1@gmail.com
            </h3>
          </div>
        </section>
        <input
          className="contact__input"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="contact__input"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="contact__input_message"
          placeholder=" Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="button">
        <button className="button__send" onClick={sendEmail}>Send</button>
      </div>
      <hr />
    </>
  );
};

export default Contact;
