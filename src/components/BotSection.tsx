import ButtonArrow from "../UI/ButtonArrow";

interface IBotCard {
  img: string;
  title: string;
  text: string;
  button: string;
  style: string;
}

export default function BotSection() {
  const BotCard = ({ img, title, text, button, style }: IBotCard) => {
    return (
      <div className="flex max-lg:flex-col items-center gap-[20px] justify-between max-lg:mb-[100px]  xl:mt-[160px]">
        <div className={`md:max-lg:flex md:flex-col xs:items-center lg:max-w-[550px] ${style}`}>
          <h2 className="xs:max-lg:text-center mb-[30px] text-[28px] md:max-lg:text-[32px] lg:text-[48px]">
            {title}
          </h2>
          <p className="xs:max-lg:text-center mb-[40px]">{text}</p>
          <div className="flex xs:max-lg:justify-center">
            <ButtonArrow text={button} width={"w-full xs:w-[211px]"}/>
          </div>
        </div>
        <div className=" max-lg:-order-1 ">
          <img className="max-lg:mb-[30px]" src={img} alt="" />
        </div>
      </div>
    );
  };

  const botList = [
    {
      title: "Outline variant edit ipsum inspect.",
      text: "Image connection blur opacity component outline component project background. Frame vector distribute export thumbnail italic. Vector clip distribute outline select pen bullet opacity. Stroke align reesizing library image align boolean. Library effect subtract fill ipsum.",
      button: "Join us",
      style: "",
      img: "/Images/bot/1.webp",
      id: 1,
    },
    {
      title: "Draft boolean comment shadow",
      text: "Plugin fill plugin fill object. Boolean object outline bold image vector library object auto. Ellipse variant auto component list pen polygon opacity. Arrange content create edit team auto. Italic ipsum rotate ellipse mask prototype flatten boolean. Text underline group undo device.",
      button: "Join us",
      style: "order-1",
      img: "/Images/bot/2.webp",
      id: 2,
    },
    {
      title: "Join our worldwide Discord community of traders",
      text: "Engage with fellow traders, acquire fresh strategies, and gain exclusive insights to enhance your success in the markets.",
      button: "View All",
      style: "",
      img: "/Images/bot/3.webp",
      id: 3,
    },
  ];

  const card = botList.map((item) => (
    <BotCard
      key={item.id}
      img={item.img}
      title={item.title}
      text={item.text}
      button={item.button}
      style={item.style}
    />
  ));

  return (
    <section className="flex w-full justify-center mt-[100px] xl:mt-[160px]">
      <div className=" w-[92%] max-w-[1320px]">
        {card}
      </div>
    </section>
  );
}
