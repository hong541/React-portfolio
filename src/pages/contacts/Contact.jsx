import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonContact from "./component/ButtonContact";
import InputField from "./component/InputField";
import TextAreaField from "./component/TextAreaField";
import Notif from "./component/Notif";
import SocialIcon from "./component/SocialIcon.jsx";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_59727ib",
        "template_1jw0ara",
        form.current,
        "zGhvK50zFMj0pmhn5"
      )
      .then(() => {
        setIsSent({ type: "success", text: "Message sent successfully" });
        setIsVisible(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => setIsSent(null), 500);
        }, 3000);
      })
      .catch(() => {
        setIsSent({ type: "error", text: "Failed to send message" });
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(true);
          setIsLoading(false);
          setTimeout(() => setIsSent(null), 500);
        }, 3000);
      });

    e.target.reset();
  };
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-900 via-gray-8 to-gray-900 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let`s Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Have a question or want to work together? feel free to 00reach out!{" "}
        </p>
        {isSent && (
          <Notif
            type={isSent.type}
            text={isSent.text}
            isVisible={isVisible}
          />
        )}
        <form
          action=""
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <InputField
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <InputField
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <TextAreaField
            name="message"
            id="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-teal-500 outline-none"
            rows={5}></TextAreaField>
          <ButtonContact
            type="submit"
            isLoading={isLoading}>
            Send Message
          </ButtonContact>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <SocialIcon
            type="github"
            href="https://github.com/hong541"
          />
          <SocialIcon
            type="linkedin"
            href="https://www.linkedin.com/in/hong541/"
          />
          <SocialIcon
            type="instagram"
            href="https://www.instagram.com/inlovetc/"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
