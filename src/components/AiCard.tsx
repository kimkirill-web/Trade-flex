interface ICard {
    img: string;
    title: string;
    item1: React.ReactNode;
    item2: React.ReactNode;
    item3: React.ReactNode;
}

export default function AiCard({ img, title, item1, item2, item3 }: ICard) {
    return(
            <div className="bg-[#f9f9f9] rounded-t-[12px] rounded-b-[48px] flex-1">
                <div className="p-[40px]">
                    <div className="flex items-center justify-start gap-[32px]">
                        <img src={img} alt="" />
                        <h3 className="text-[20px] md:max-lg:text-[24px] lg:text-[32px] font-medium">{title}</h3>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4">
                        <ul className="grid grid-cols-1 gap-1 xl:gap-2 mt-[32px]">
                            {item1}
                        </ul>
                        <ul className="grid grid-cols-1 gap-1 xl:gap-2 mt-[32px] ">
                            {item2}
                        </ul>
                        <ul className="grid grid-cols-1 gap-1 xl:gap-2 mt-[32px] ">
                            {item3}
                        </ul>
                    </div>
                </div>
            </div>
    )
}