import './App.css';
import Background from './Background';
import Intro from './Intro';
import Monitor from './Monitor';
import About from "./About"
import Navbar from './Navbar';
import "./Responsive.css"
import Work from './Work';
import ContactForm from './ContactForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { send } from "emailjs-com";



const App = () => {

  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    message: "",
    reply_to: ""
  })

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      //ServiceID
      'service_r76eupk',
      //TemplateID
      'template_u9xaust',
      toSend,
      //UserID
      'mxTTQBdikoSMlFRj9'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("message sent")
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("error sending message, please try again")
      });

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path='/' element={<><Intro /><About /><Work /></>} />
        <Route exact path='/contact' element={<ContactForm
          toSend={toSend}
          onSubmit={onSubmit}
          handleChange={handleChange} />} />
        <Route exact path='/work' element={<Work />} />
        {/* <Route exact path='/resume' element={<Resume/>} /> */}
      </Routes>

      {/* <Intro /> */}

      {/* <About /> */}

      {/* <Work /> */}

      {/* <ContactForm /> */}

    </BrowserRouter>
  );
}

export default App;
