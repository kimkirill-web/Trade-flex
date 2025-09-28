interface IEditCard {
  img: string;
  title: string;
  text: string;
}

export default function EditSection() {
  const EditCard = ({ img, title, text }: IEditCard) => {
    return (
      <div className="flex-1 flex-col min-w-[250px] bg-[#f9f9f9] rounded-t-[12px] rounded-b-[48px]  max-md:shrink-0  p-[30px] lg:p-[40px]">
        <img src={img} className="mb-[24px]" alt="" />
        <h3 className="text-[24px] lg:text-[32px] mb-[12px]">{title}</h3>
        <p className="text-[#858585]">{text}</p>
      </div>
    );
  };
  const cardList = [
    {
      title: "400+ Alerts!",
      text: "Receive 400+ Alerts at a Time!",
      img: "Images/edit-img/1.webp",
      id: 1,
    },
    {
      title: "150+ Instruments!",
      text: "Receive Alerts For 150+ Trading Instruments!",
      img: "Images/edit-img/2.webp",
      id: 2,
    },
    {
      title: "5 Markets!",
      text: "Stocks, Indices, Crypto, Forex, Commodities",
      img: "Images/edit-img/3.webp",
      id: 3,
    },
    {
      title: "10K+ Traders Joined!",
      text: "Join Our Discord Community And Communicate With Over 10,000 Traders!",
      img: "Images/edit-img/4.webp",
      id: 4,
    },
  ];

  const card = cardList.map((item) => (
    <EditCard
      key={item.id}
      img={item.img}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <section className="flex justify-center w-full mt-[100px] xl:mt-[160px]">
      <div className="w-[92%] max-w-[1320px]">
        <div className=" lg:flex items-start justify-between">
          <h2 className="lg:w-[616px] text-[28px] md:max-lg:text-[32px] lg:text-[48px]">
            Edit arrow auto library layer asset layer
          </h2>
          <p className="text-[#858585] max-lg:mt-[20px] text-[20px] lg:text-[32px] lg:text-right w-[394px] font-normal">
            Vertical asset variant image team vector.
          </p>
        </div>
        <div className="flex gap-[24px] mt-[30px] md:max-lg:grid md:max-lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:mt-[50px] max-lg:overflow-x-scroll overflow-y-hidden">
          {card}
        </div>
      </div>
    </section>
  );
}
