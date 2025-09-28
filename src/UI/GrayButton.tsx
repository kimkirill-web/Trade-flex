interface IProp {
    text: string;
}

export default function GrayButton({ text }:IProp) {
    return(
        <button className="flex-1 bg-[#2f2f2f] max-xs:w-full text-white border-[1px] rounded-full w-[179px] h-15 py-4 border-[#2c2c2c] hover:bg-[#4d4d4d] cursor-pointer">
            {text}
        </button>
    )
}