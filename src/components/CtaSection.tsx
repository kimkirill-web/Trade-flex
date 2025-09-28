import ButtonArrow from "../UI/ButtonArrow";

export default function CtaSection() {
  return (
    <section className="flex justify-center w-full">
      <div className=" w-[92%] max-w-[1320px] relative flex max-lg:flex-col items-center justify-end lg:justify-between mt-[100px] xl:mt-[160px] max-lg:p-[32px] lg:p-[64px] bg-[#1e1e1e] rounded-t-[12px] rounded-b-[24px] max-xs:h-[610px] xl:max-h-[319px]">
        <div className="flex flex-col max-lg:items-center max-xs:w-[95%] max-w-[580px] xs:max-lg:text-center">
          <h3 className="text-white mb-2 text-[24px] lg:text-[32px] w-full">
            Follow the latest trends
          </h3>
          <p className="text-[#858585] mb-[32px] xl:mb-[48px]">
            Layout plugin scale selection style inspect pixel union device.
          </p>
          <form className="flex max-xl:flex-col w-full max-xl:h-[130px] items-center lg:items-start justify-between gap-3">
            <input
              type="email"
              name="email"
              id=""
              className="flex-1 bg-white w-full lg:w-[364px] h-[60px] rounded-full px-3"
              placeholder="you@example.com"
            />
            <ButtonArrow text={"Join us"} width={"w-full lg:w-[211px]"} />
          </form>
        </div>
        <div className="max-xs:absolute lg:shrink-0 top-7 right-0 max-w-[500px] max-lg:-order-1 animate-bounceY">         
          <img
            src="/Images/home-img.webp"
            className=""
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
