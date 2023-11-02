const Input = ({label, ...rest}) => {
  return (
    <div className = "mb-[20px]">
    <label className="block m- text-martini-950 text-xl font-bold mt-0 mr-0 mb-[5px] ml-0 pt-[5px] pb-[5px] pr-[10px] pl-[10px]"> {label} </label>
    <input {...rest} className= "outline-0 text-xl pt-[10px] pb-[10px] pr-[15px] pl-[15px] border rounded-lg border-bitter-lemon-200 bg-white text-gray-700 w-full"/> 
    </div>
  )
}

export default Input
