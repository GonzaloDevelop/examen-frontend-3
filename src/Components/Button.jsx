const Button = ({children}) => {
    return (
        <button className="bg-mariner-600 rounded-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px] transition-all duration-500 ease-in-out transform scale-100 hover:scale-105 hover:bg-mariner-500 pointer-events-auto font-bold text-[15px]">
            {children}
        </button>
    )
}

export default Button