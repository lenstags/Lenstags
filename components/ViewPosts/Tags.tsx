import React from 'react'

const Tags = ({tags}:any) => {

    console.log(tags, 'goole')

    return (
    <>
        <div>
            
            <div className='flex pl-5 w-auto h-20'>
                <div className='w-1/2 flex items-end pb-5'>
                    <p>Tags</p>
                </div>
                <div className='w-1/2 flex pb-5'>
                    <div className='flex w-full'>
                        <div className='flex'>
                            <button className='border-black border w-auto'>+ tag</button>
                            <img src="" alt="" />
                            <div>3</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-wrap gap-2 pl-5'>
                {tags.map((t:string, index:number)=>{
                    
                    console.log(t, 'TAGS')
                    return(
                    <>
                        <div className='border-black border pr-2 pl-2' key={index}>
                            {t}
                        </div>
                    </>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Tags