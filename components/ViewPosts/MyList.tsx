import React from 'react'

type names = {
    n: string,
    index: number
}

const MyList = () => {
  
    const names: string[] = ['Name', 'Posts', 'Collect']

    let list = {
        name:['Web 3 social media', 'DAOs y Gobernanza', 'DeSci world' ],
        Post:[ 4, 5, 3],
        Collect:[ 10, 8, 2]
    }
  
    return (
    <div>
        <div>
            {names.map((n:string, index:number)=>{
                return(
                    <>
                        <div className='index'>
                            {n}
                        </div>
                    </>
                )
            })}
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default MyList