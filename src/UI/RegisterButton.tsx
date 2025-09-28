export default function RegisterButton({style = 'text-white', width = 'w-[186px]'}) {
    return(
        <button className={`border-[1px] rounded-full ${width} h-[50px] lg:w-28 lg:h-12 border-[#2c2c2c] hover:bg-[#4d4d4d] cursor-pointer`}>
            <p className={style}>Register</p>
        </button>
    )
}