import Accordeon from "./Accordeon"


export interface IFaqList {
    q: string;
    a: string;
    id: number;
}

const faqList: IFaqList[] = [
    {
        q: "What types of market alerts are available, and how can they help improve my trading decisions?",
        a: "Market alerts can vary, but common types include price alerts, news alerts, technical analysis alerts, and economic event alerts. These alerts help improve your trading decisions by keeping you informed of key market movements, enabling you to act quickly on trading opportunities, and helping you avoid potential risks.",
        id: 1,
    },
    {
        q: "How often are market alerts sent, and are they customizable based on my trading preferences?",
        a: "Market alerts can vary, but common types include price alerts, news alerts, technical analysis alerts, and economic event alerts. These alerts help improve your trading decisions by keeping you informed of key market movements, enabling you to act quickly on trading opportunities, and helping you avoid potential risks.",
        id: 2,
    },
    {
        q: "What criteria are used to generate these market alerts, and how reliable are they?",
        a: "Market alerts can vary, but common types include price alerts, news alerts, technical analysis alerts, and economic event alerts. These alerts help improve your trading decisions by keeping you informed of key market movements, enabling you to act quickly on trading opportunities, and helping you avoid potential risks.",
        id: 3,
    },
    {
        q: "Can I receive market alerts through different channels, like email, SMS, or push notifications, to stay updated on the go?",
        a: "Market alerts can vary, but common types include price alerts, news alerts, technical analysis alerts, and economic event alerts. These alerts help improve your trading decisions by keeping you informed of key market movements, enabling you to act quickly on trading opportunities, and helping you avoid potential risks.",
        id: 4,
    },
]


export default function FaqSection() {
    
    return(
        <section className="flex justify-center w-full mt-[100px] xl:mt-[160px]">
            <div className=" w-[92%] max-w-[1320px]">
                <h2 className="w-[616px] text-[28px] md:max-lg:text-[32px] lg:text-[48px]">Most asked questions</h2>
                <div className="flex max-xl:flex-col items-start justify-between md:items-center lg:items-center xl:gap-[144px] lg:mt-[50px]">
                    <img src="/Images/faq-img/1.webp" className="max-lg:my-[30px]" alt="" />
                    <Accordeon  faqList={faqList}/>
                </div>
            </div>
        </section>
    )
}