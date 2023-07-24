import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact</h2>
        <h2 className="contact__subtitle">Drop Me a message</h2>
        <p className="contact__description">if you want to know more about my work, you can just leave me a message on my WhatsApp or Email, see you soon</p>
        <h3 className="contact__whatsapp"><i className='bx bxl-whatsapp-square'></i>+57 313 2160638</h3>
        <h3 className="contact__email"><i className='bx bxs-envelope' ></i>jhonnatan.freire1@gmail.com</h3>
        <input className="contact__input" type="text" />
        <input className="contact__input" type="email" />
        <input className="contact__input" type="text" />
    </div>
  )
}

export default Contact
