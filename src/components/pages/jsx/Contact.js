import React, {Component} from "react";
import {useForm} from "react-hook-form";
import emailjs from "emailjs-com";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const {register, handleSubmit, reset} = useForm();

  const toastifySuccess = () => {
    toast("Email Sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      style: {background: "#0B1359", color: "#FFFFFF"},
      toastId: "notifyToast"
    });
  };

  const onSubmit = async data => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <div>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              {...register("email")}
              placeholder="Email address"
            />
          </div>
        </div>
        <div>
          <div>
            <input
              type="text"
              name="subject"
              {...register("subject")}
              placeholder="Subject"
            />
          </div>
        </div>
        <div>
          <div>
            <textarea
              rows={3}
              name="message"
              {...register("message")}
              placeholder="Message"
            />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            left: "5%"
          }}
        >
          <button className="button" type="submit">
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

class Contact extends Component {
  render() {
    const header_style = {
      textAlign: "center",
      color: "white",
      fontSize: "28px",
      position: "relative"
    };
    return (
      <div className="container">
        <div>
          <a
            href="https://github.com/gdamota/"
            target="_blank"
            rel="noreferrer"
          >
            <h2 style={header_style}>Check out my Github</h2>
          </a>
          <h2 style={header_style}>or</h2>
          <h2 style={header_style}>Email me for more info!</h2>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
