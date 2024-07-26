import Breakline from "@/common/components/elements/Breakline";

import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <ContactList />
      <Breakline className="my-6" />
      <ContactForm />
    </>
  );
};

export default Contact;
