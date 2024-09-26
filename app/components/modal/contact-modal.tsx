"use client";
import Modal from "../custom/modal";
import AIBusContactForm from "@/app/contact/components/form";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} title="Contact us" onClose={onClose}>
      <div style={{ width: "calc(100vw - 32px)" }} className="max-w-[700px]">
        <AIBusContactForm />
      </div>
    </Modal>
  );
};

export default ContactModal;
