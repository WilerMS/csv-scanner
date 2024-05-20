const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around">
      <h2 className='text-[18px] text-[#4F4F4F] mb-3'>Cargando...</h2>
      <div className='relative overflow-hidden h-[7px] bg-[#F2F2F2] rounded-[8px]'>
        <div className='loading-bar h-full  rounded-[8px]'></div>
      </div>
    </div>
  )
}

export default Loading
