import { useState } from "react";
import type { IFaqList } from "./FaqSection";

interface AccordeonProps {
    faqList: IFaqList[];
}

export default function Accordeon({ faqList }: AccordeonProps) {
    const [openId, setId] = useState<number | null>(null)

    const clickHandler = (id: number) => {
        if (id === openId) setId(null)
            else setId(id)
    }


    const arrowUp = (
        <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.5L10 7.5L5 12.5"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
    )

    const arrowDown = (
        <span className="rotate-180">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12.5L10 7.5L5 12.5"
                stroke="#858585"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
    )

  const accordeonItem = faqList.map((faqItem, id) => {
    return (
      <li className={`p-[16px] border-l-2 mb-[16px] ${id === openId ? "text-[#1e1e1e]" : "text-[#858585]"} `} key={id}>
        <button className="flex items-center text-[18px] md:text-[24px] font-medium leading-[120%] text-left mb-[16px] cursor-pointer" 
        onClick={() => clickHandler(id)} 
        >
          {faqItem.q}
          {id === openId ? arrowUp : arrowDown}
        </button>
        <div className={`overflow-hidden transition-[height] text-[#858585] ${id === openId ? "" : "h-0"}`}>
            <div>{faqItem.a}</div>
        </div>
      </li>
    );
  });

  return <ul className="lg:mt-[30px]">{accordeonItem}</ul>;
}
