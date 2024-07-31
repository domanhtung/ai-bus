import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
  icon?: string;
}

export const ButtonPrimary = (props: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        props?.className,
        "relative px-4 py-3 text-[14px] font-medium bg-primary text-strong rounded-lg overflow-hidden group disabled:pointer-events-none"
      )}
    >
      <span className="relative z-[1]">
        {props?.title}
        {props?.icon && <i className={props?.icon}></i>}
      </span>
      <div className="absolute group-hover:hidden w-[56px] h-[56px] bg-white rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-0 opacity-85 blur-md" />
    </button>
  );
};

export const ButtonSecondary = (props: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        props?.className,
        "relative px-4 py-3 text-[14px] font-medium bg-transparent hover:bg-primary border border-primary rounded-lg overflow-hidden group disabled:pointer-events-none"
      )}
    >
      <span className="relative z-[1] text-primary group-hover:text-strong">
        {props?.title}
        {props?.icon && <i className={props?.icon}></i>}
      </span>
      <div className="absolute group-hover:hidden w-[56px] h-[56px] bg-primary rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-0 opacity-85 blur-md" />
    </button>
  );
};

export const ButtonDefault = (props: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        props?.className,
        "relative px-4 py-3 text-[14px] font-medium bg-transparent hover:bg-primary hover:border-primary border border-white border-opacity-[0.16] rounded-lg overflow-hidden group disabled:pointer-events-none"
      )}
    >
      <span className="relative z-[1] text-white group-hover:text-background">
        {props?.title}
        {props?.icon && <i className={props?.icon}></i>}
      </span>
      <div className="absolute hidden group-hover:block w-[56px] h-[56px] bg-primary rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-0 opacity-85 blur-md" />
    </button>
  );
};

export const ButtonSecondaryDark = (props: Props) => {
  return (
    <button
      {...props}
      className={clsx(
        props?.className,
        "relative px-4 py-3 text-[14px] font-medium bg-transparent hover:bg-background border border-background rounded-lg overflow-hidden group disabled:pointer-events-none"
      )}
    >
      <span className="relative z-[1] text-background group-hover:text-white">
        {props?.title}
        {props?.icon && <i className={props?.icon}></i>}
      </span>
      <div className="absolute group-hover:hidden w-[56px] h-[56px] bg-background rounded-full bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-0 opacity-85 blur-md" />
    </button>
  );
};
