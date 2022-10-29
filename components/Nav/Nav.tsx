import Image from 'next/image'

const Nav = () => {
  return (
    <div className='flex w-full content-center 
    justify-center bg-greenLengs text-black border-black border
    h-20
    '>
        <div className='w-1/5 h-full text-center border-black border-r grid place-items-center'>
            <Image
          src="/img/logo.svg"
          alt="Lenstags Logo"
          width={100}
          height={60}
          
        />
        </div>
        <div className="w-1/2 h-full border-r-black border-r"></div>
        <div className='w-1/4 h-full text-center grid place-items-center'
            onClick={()=>{
                console.log("CONECTANDO")
            }}
        >CONNECT</div>  
    </div>
  )
}

export default Nav