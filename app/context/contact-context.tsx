"use client";
import { createContext, useState } from "react";
import ContactModal from "../components/modal/contact-modal";

interface ContextType {
  isShowContact: boolean;
  showContact: () => void;

  hideContact: () => void;
}

const defaultValue: ContextType = {
  isShowContact: false,
  showContact: () => {},
  hideContact: () => {},
};

const ContactContext = createContext<ContextType>(defaultValue);

interface Props {
  children: any;
}

const ContactContextProvider = ({ children }: Props) => {
  const [isShowContact, setIsShowContact] = useState<boolean>(false);

  const showContact = () => setIsShowContact(true);
  const hideContact = () => setIsShowContact(false);

  return (
    <ContactContext.Provider
      value={{ isShowContact, showContact, hideContact }}
    >
      {children}
      <ContactModal isOpen={isShowContact} onClose={hideContact} />
    </ContactContext.Provider>
  );
};

export { ContactContextProvider, ContactContext };
