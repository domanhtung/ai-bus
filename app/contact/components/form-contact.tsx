"use client";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ButtonPrimary } from "@/app/components/custom/button";

const FormContact = () => {
  const formRef = useRef<any>();
  const [dataForm, setDataForm] = useState<any>();
  const [isSumitting, setIsSubmitting] = useState<boolean>(false);

  const changeValue = (key: string, value: string) => {
    const clone = { ...dataForm };
    clone[key] = value;
    setDataForm(clone);
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();
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
      setIsSubmitting(false);
    } catch (e) {
      toast.error("Email failed to send");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 lg:py-24 max-w-[1512px] px-4 lg:px-8 mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-7 lg:gap-10 xl:gap-[124px]">
        <div className="text-[26px] leading-[36px] font-semibold lg:text-[48px] lg:leading-[56px] lg:font-bold text-white opacity-[0.86] hover:scale-105 duration-200">
          We will reach out to you as soon as received your message
        </div>
        <div>
          <form ref={formRef} className="grid gap-4 pb-20 lg:pb-0">
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
                className="w-full"
                onClick={sendEmail}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
