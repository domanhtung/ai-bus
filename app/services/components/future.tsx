/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { quotesService } from "@/app/constants/service";
import { useEffect, useRef } from "react";

const FutureService = () => {
  const ref = useRef<any>();
  const defaultText = "The Future is AI, and It Starts Here.";
  let currentIndex = 0;
  let currentText = "";
  let currentQuotesIdx = 0;
  let direction = 1;

  useEffect(() => {
    if (ref?.current) {
      const intervalId = setInterval(() => {
        if (
          currentIndex < quotesService?.[currentQuotesIdx]?.length &&
          direction > 0
        ) {
          currentText =
            currentText + quotesService?.[currentQuotesIdx]?.[currentIndex];
          ref.current.innerHTML =
            currentText + `<span style="color: #FF6C5C;">|</span>`;
          currentIndex++;
        } else if (
          currentIndex >= quotesService?.[currentQuotesIdx]?.length &&
          direction > 0
        ) {
          direction = -1;
        } else if (
          currentIndex <= quotesService?.[currentQuotesIdx]?.length &&
          currentIndex > 0 &&
          direction < 0
        ) {
          currentIndex = currentIndex - 4 <= 0 ? 0 : currentIndex - 3;
          currentText = quotesService?.[currentQuotesIdx]?.substring(
            0,
            currentIndex
          );
          ref.current.innerHTML =
            currentText + `<span style="color: #FF6C5C;">|</span>`;
        } else if (currentIndex <= 0 && direction < 0) {
          currentIndex = 0;
          currentText = "";
          direction = 1;
          if (currentQuotesIdx === quotesService?.length - 1) {
            currentQuotesIdx = 0;
          } else {
            currentQuotesIdx++;
          }
        }
      }, 150);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="bg-white rounded-xl">
      <div
        ref={ref}
        className="max-w-[1512px] mx-auto px-4 lg:px-8 py-12 lg:py-24 text-[46px] lg:text-[72px] text-center lg:text-left font-bold text-background"
      >
        The Future is AI, and It Starts Here.{" "}
        <span className="text-primary">|</span>
      </div>
    </section>
  );
};

export default FutureService;
