
import axios from 'axios'
import { useState } from 'react'


const endpoint = 'https://immense-temple-05008.herokuapp.com/api/contact';

const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');

const [error, setError] = useState(false);
const [sending, setSending] = useState(false);
const [succes, setSucces] = useState(false);

const [validName, setValidName] = useState(false);    
const [validEmail, setValidEmail] = useState(false);    
const [validPhone, setValidPhone] = useState(false);    

const Error = () => {
    setError(true);
    setSending(false);
}

const Sending = () => {
    setSending(true);
    setError(false);
    setSucces(false);
}


const Success = () => {
    setSucces(true);
    setSending(false);
    
}

const store = async(e) =>{
    e.preventDefault();

    setValidName(false);
    setValidEmail(false);
    setValidPhone(false);

    var expRegName=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegEmail=/^\w+@(\w+\.)+\w{2,4}$/; 
    var expRegPhone=/^\d+$/;

    !expRegName.exec(name) ? setValidName(true) : setValidName(false);
    !expRegEmail.exec(email) ? setValidEmail(true) : setValidEmail(false);
    !expRegPhone.exec(phone) ? setValidPhone(true) : setValidPhone(false);

    Sending();

    

    if([name, email, phone, message].includes('') || validName || validEmail || validPhone){
        Error();
        console.log(error);
        console.log('nombre '+validName);
        console.log('mail '+validEmail);
        console.log('numero '+validPhone);
        return;
      }
    

    await axios.post(endpoint, {name:name, email:email, phone:phone, message:message});

        Success();

      

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
}




  return (
    <div id='contact' className='contact'>
        <div className='myContainer contact-info'>
            <form onSubmit={store} className='form-contact'>
                <h3>Get in touch <br/><span>we are hiring!</span></h3>
                {error && (<p className='error'>cannot be sent with empty fields</p>)}
                {sending && (<p className='sending'>Sending...</p>)}
                {succes && (<p className='succes'>Sended!</p>)}
                <div className="form-contact-data">
                    <label htmlFor="">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                </div>
                {validName && (<p className='error'>Only letters allowed</p>)}
                <div className="form-contact-data">
                    <label htmlFor="">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
                </div>
                {validEmail && (<p className='error'>Invalid Email</p>)}
                <div className="form-contact-data">
                    <label htmlFor="">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text"/>
                </div>
                {validPhone && (<p className='error'>Only numbers allowed</p>)}
                <div className="form-contact-data">
                    <label htmlFor="">Message</label>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} type="text"/>
                </div>
                <button type='submit' className='button-submit'>Send</button>
            </form>
            <div className='contact-image'>
                <img src="./src/assets/img/contact-image.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact