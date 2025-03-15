import './contact.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [contact, setConatct] = useState({ name: '', email: '', message: '' });

  //Your EmailJs service ID, template id , and Public Key
  const serviceId = 'service_ev2nsiq';
  const templateId = 'template_r42mjte';
  const publicKey = 'e6ANNdSOOTqKKEfjG';

  //create an object that contains dynamic template params
  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: contact.name,
      from_email: contact.email,
      to_name: 'nitto thomas',
      message: contact.message,
    },
  };

  const onChange = (e, key) => {
    setConatct({ ...contact, [key]: e.target.value });
  };

  //   console.log(contact);

  const onSendClick = async () => {
    try {
      const response = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data
      );
      console.log(response.data);
      toast.success('Message sent sucessfully');
    } catch (error) {
      console.log(error);
      toast.error('Not able to sent data, Try agin');
    }
  };

  return (
    <div className="contact-box">
      <ToastContainer />
      <Input
        type="text"
        label="Name"
        className="input"
        onChange={e => onChange(e, 'name')}
      />
      <Input
        type="email"
        label="Email"
        className="input"
        onChange={e => onChange(e, 'email')}
      />
      <Input
        type="text"
        label="Message"
        className="input"
        id="messageinput"
        onChange={e => onChange(e, 'message')}
      />

      <Button text="Send" className="send-button" onClick={onSendClick} />
    </div>
  );
};

export default Contact;
