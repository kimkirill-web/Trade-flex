export default function DataSection() {
  return (
    <section className="flex justify-center w-full mt-[100px] xl:mt-[160px]">
      <div className="flex flex-col w-[92%] max-w-[1320px]">
        <h2 className="text-[28px] md:max-lg:text-[32px] lg:text-[48px]">
          Data provided from
        </h2>
        <div className="flex items-center xl:justify-between gap-[30px] mt-[30px] lg:mt-[50px] overflow-x-auto">
          <img
            src="\Images\data-img\01.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
          <img
            src="\Images\data-img\02.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
          <img
            src="\Images\data-img\03.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
          <img
            src="\Images\data-img\04.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
          <img
            src="\Images\data-img\05.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
          <img
            src="\Images\data-img\06.svg"
            className="contrast-1 opacity-60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
