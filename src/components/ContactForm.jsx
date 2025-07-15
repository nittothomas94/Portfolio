import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const serviceId = 'service_ev2nsiq';
  const templateId = 'template_r42mjte';
  const publicKey = 'e6ANNdSOOTqKKEfjG';

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
    setContact({ ...contact, [key]: e.target.value });
  };

  const onSendClick = async () => {
    try {
      const response = await axios.post(
        'https://api.emailjs.com/api/v1.0/email/send',
        data
      );
      console.log(response.data);
      toast.success('Message sent successfully');
    } catch (error) {
      console.error(error);
      toast.error('Unable to send message. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-[60vh] lg:h-[500px] p-3 md:p-8 lg:p-[15px] lg:pt-0 flex flex-col gap-6 rounded-[5px] shadow-[0px_0px_4px_4px_rgb(28,86,24)] hover:shadow-[0px_5px_4px_4px_green] transition-shadow duration-300">
      <ToastContainer />

      {/* Name Input */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Name</label>
        <input
          type="text"
          value={contact.name}
          onChange={e => onChange(e, 'name')}
          className="!bg-white w-full h-[35px] px-3 py-2 rounded-md border border-gray-300 text-black text-sm font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Email</label>
        <input
          type="email"
          value={contact.email}
          onChange={e => onChange(e, 'email')}
          className="!bg-white w-full h-[35px] px-3 py-2 rounded-md border border-gray-300 text-black text-sm font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col gap-2">
        <label className="text-white font-medium">Message</label>
        <textarea
          id="messageInput"
          value={contact.message}
          onChange={e => onChange(e, 'message')}
          rows={6}
          className="!bg-white w-full px-3 py-2 rounded-md border border-gray-300 text-black text-sm font-bold focus:outline-none focus:ring-2 focus:ring-green-500 resize-y"
        />
      </div>

      {/* Send Button */}
      <button
        onClick={onSendClick}
        className="w-full h-[35px] rounded-[10px] !bg-green-700 text-white font-semibold mx-auto mt-4 hover:scale-105 active:scale-90 transition-transform duration-150"
      >
        Send
      </button>
    </div>
  );
};

export default ContactForm;
