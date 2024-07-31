import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";

interface ModalInputType {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: any;
  title?: string;
}

const Modal = ({
  children,
  isOpen,
  className,
  title,
  onClose,
}: ModalInputType) => {
  const resetBodyOverflow = () => {
    if (document) {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    if (document) {
      try {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          resetBodyOverflow();
        }
      } catch (err) {}
    }
    return () => resetBodyOverflow();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={clsx(
        "items-top fixed left-0 top-0 z-50 flex h-full w-full justify-center overflow-y-auto overflow-x-hidden p-4",
        className
      )}
    >
      <div
        className="fixed left-0 top-0 z-0 h-full w-full bg-black bg-opacity-80 p-4"
        onClick={() => handleClose()}
      />
      <div className="z-60 relative my-auto h-fit w-fit max-w-full overflow-x-hidden">
        <div className="relative rounded-3xl bg-background">
          <div className="flex items-center justify-between gap-2 p-6">
            <span className="text-[30px] font-semibold leading-[44px]">
              {title}
            </span>
            <Image
              src={"/images/close.svg"}
              className="cursor-pointer"
              width={48}
              height={48}
              priority
              onClick={() => handleClose()}
              alt="close"
            />
          </div>
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
