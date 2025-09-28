import ButtonArrow from "../UI/ButtonArrow";
import GrayButton from "../UI/GrayButton";

export default function HeroSection() {
  return (
    <section className="relative z-1 flex max-lg:flex-col justify-center items-center bg-[#1e1e1e] text-white rounded-b-[40px] lg:rounded-b-[100px] h-[760px] lg:h-[697px]">
      <div className="flex flex-col items-start max-lg:items-center max-xs:w-[300px] gap-10 xs:max-lg:px-[40px]  max-lg:text-center xs:max-w-[950px] lg:justify-between  z-1 lg:w-[647px] h-[433px] lg:ml-[30px]">
        <h1 className="text-[40px] max-xs:text-[28px] max-sm:text-[32px] lg:text-[50px]/20 xl:text-[64px]/20">
          Unlock AI-Powered Market Insights and Trading Alerts
        </h1>
        <p className=" text-[14px] lg:text-[20px]/6 text-[#757575]">
          Join our premium Telegram channel for exclusive trading insights and
          strategies that drive success. Stay ahead of the market with expert
          guidance and real-time updates
        </p>
        <div className="flex max-sm:w-full w-[420px] max-xs:flex-col max-lg:gap-4 lg:gap-8">
          <div className="">
            <ButtonArrow text={"Join us"} width={"xs:max-md:flex-1 w-full xs:w-[211px]"} />
          </div>
          <GrayButton text={"Read more"} />
        </div>
      </div>
      <div className="-order-1 lg:order-0 max-lg:max-w-[550px] animate-bounceY">
        <div className="lg:top-20">
          <img
            src="\Images\home-img.webp"
            alt=""
            width={642}
            height={473}
            className=""
          />
        </div>
      </div>
      <div className="absolute bottom-10 right-0 w-[170%] xs:max-lg:hidden lg:bottom-0 lg:right-0 -z-2 opacity-10  lg:w-[60%]">
        <img src="\Images\bg-img.svg" alt="" className="" />
      </div>
    </section>
  );
}
