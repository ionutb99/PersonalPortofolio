import React, { useEffect, useRef, useState } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook.webp";
import LinkedInIcon from "../../assets/linkedin.webp";
import GithubIcon from "../../assets/github.png";
import emailjs from "@emailjs/browser";
import { ChatOutlined } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.your_name.value;
    const email = form.current.your_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      toast.warn("Fill all fields!");
      setValidationError(true);
      return;
    }

    emailjs
      .sendForm(
        "service_vjgj99w",
        "template_orp1sce",
        form.current,
        "u2K5cWCMovLGdhDhh"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
          setValidationError(false);
          toast("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    let timeout;
    if (messageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [messageSent]);

  return (
    <section id="contactPage">
          {validationError && <ToastContainer />}
      <ChatOutlined className="arrowDown" />
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oportunities.
        </span>
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
          {messageSent && <ToastContainer />}
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.facebook.com/profile.php?id=100069145276277"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="" className="link" />
            </a>
            <a
              href="https://www.linkedin.com/in/buzila-ionut-b6a7201a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="" className="link" />
            </a>
            <a
              href="https://github.com/ionutb99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};
