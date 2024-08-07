"use client";
import { useRef, useState } from "react";
import Modal from "../custom/modal";
import { LoadingSubmit } from "../loading/loading";
import { ButtonPrimary } from "../custom/button";
import { toast } from "react-toastify";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: Props) => {
  const formRef = useRef<any>();
  const [dataForm, setDataForm] = useState<any>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isSumitting, setIsSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const changeValue = (key: string, value: string) => {
    const clone = { ...dataForm };
    clone[key] = value;
    setDataForm(clone);
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();
    setIsSubmit(true);
    setIsSubmitting(true);
    if (!dataForm?.name || !dataForm?.email || !dataForm?.phone) {
      toast.error("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }
    try {
      await emailjs.sendForm(
        process?.env?.NEXT_PUBLIC_SERVICE_ID || "",
        process?.env?.NEXT_PUBLIC_TEMPLATE_ID || "",
        formRef.current,
        {
          publicKey: process?.env?.NEXT_PUBLIC_USER_ID || "",
        }
      );
      toast.success("Your message was sent successfully");
      setIsSubmit(false);
      setIsSubmitting(false);
    } catch (e) {
      toast.error("Email failed to send");
      setIsSubmit(false);
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} title="Contact us" onClose={onClose}>
      <div className="w-[90vw] max-w-[700px]">
        <form ref={formRef} className="grid gap-4">
          <input
            placeholder="Full name*"
            name="name"
            className="w-full p-4 text-[14px] font-medium bg-transparent border-b border-white border-opacity-[0.16] outline-none"
            onChange={(e) => changeValue("name", e?.target?.value)}
          />
          <input
            placeholder="Email*"
            name="email"
            className="w-full p-4 text-[14px] font-medium bg-transparent border-b border-white border-opacity-[0.16] outline-none"
            onChange={(e) => changeValue("email", e?.target?.value)}
          />
          <input
            placeholder="Contact number*"
            name="phone"
            className="w-full p-4 text-[14px] font-medium bg-transparent border-b border-white border-opacity-[0.16] outline-none"
            onChange={(e) => changeValue("phone", e?.target?.value)}
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-full h-[156px] p-4 text-[14px] font-medium bg-transparent border-b border-white border-opacity-[0.16] resize-none outline-none"
            onChange={(e) => changeValue("message", e?.target?.value)}
          />
          <div className="flex pt-4 justify-end">
            <ButtonPrimary
              title={isSumitting ? "Sending..." : "Submit"}
              onClick={sendEmail}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
