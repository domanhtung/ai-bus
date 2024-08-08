/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { quotesService } from "@/app/constants/service";
import { useEffect, useRef } from "react";

const FutureService = () => {
  const ref = useRef<any>();
  let currentIndex = 0;
  let currentText = "";
  let currentQuotesIdx = 0;

  useEffect(() => {
    if (ref?.current) {
      const intervalId = setInterval(() => {
        if (currentIndex < quotesService?.[currentQuotesIdx]?.length) {
          currentText =
            currentText + quotesService?.[currentQuotesIdx]?.[currentIndex];
          ref.current.innerHTML =
            currentText?.trim() + `<span style="color: #FF6C5C;">|</span>`;
          currentIndex++;
        } else {
          currentIndex = 0;
          currentText = "";
          if (currentQuotesIdx === quotesService?.length - 1) {
            currentQuotesIdx = 0;
          } else {
            currentQuotesIdx++;
          }
        }
      }, 70);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="bg-white">
      <div
        ref={ref}
        className="max-w-[1512px] mx-auto px-4 lg:px-8 py-8 lg:py-24 text-[30px] lg:text-[50px] lg:text-left font-bold whitespace-break-spaces text-background"
      >
        The Future is AI, and It Starts Here.{" "}
        <span className="text-primary">|</span>
      </div>
    </section>
  );
};

export default FutureService;
