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
    // Send form email
    console.log(data);
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
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "20px",
            position: "relative"
          }}
        >
          Email Me!
        </h2>
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
            margin: "1%",
            position: "relative",
            left: "35%"
          }}
        >
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

class Contact extends Component {
  render() {
    return <ContactForm />;
  }
}

export default Contact;
