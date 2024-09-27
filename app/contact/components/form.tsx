"use client";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ButtonPrimary } from "@/app/components/custom/button";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  process: process?.env?.NEXT_PUBLIC_API_KEY,
  authDomain: process?.env?.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process?.env?.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process?.env?.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process?.env?.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process?.env?.NEXT_PUBLIC_APP_ID,
};

const AIBusContactForm = () => {
  const formRef = useRef<any>();
  const [dataForm, setDataForm] = useState<any>();
  const [isSumitting, setIsSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

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

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = event?.target?.files?.[0];
      if (file && typeof window !== "undefined") {
        const storageRef = ref(storage, `aibus/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            toast?.error("Error during upload:" + error);
            setLoading(false);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const clone = { ...dataForm };
              clone.pdf = downloadURL;
              setDataForm(clone);
              setLoading(false);
            });
          }
        );
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  return (
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
      <div className="w-full flex text-[14px] font-medium bg-transparent border-b border-white border-opacity-[0.16] outline-none truncate">
        <label
          htmlFor="fileInput"
          className="w-full p-4 text-[14px] text-blue-100 font-medium bg-transparent opacity-60 cursor-pointer"
        >
          {loading
            ? "Loading..."
            : dataForm?.pdf
            ? dataForm?.pdf
            : "Upload CV (pdf)"}
        </label>
        <input value={dataForm?.pdf} name="cv" className="hidden" />
        <input
          placeholder="Contact number*"
          type="file"
          id="fileInput"
          disabled={loading}
          className="hidden"
          accept="application/pdf"
          onChange={uploadFile}
          onClick={(event: any) => {
            event.target.value = null;
          }}
        />
      </div>
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
          disabled={isSumitting}
          onClick={sendEmail}
        />
      </div>
    </form>
  );
};

export default AIBusContactForm;
