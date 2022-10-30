import React from 'react'

type names = {
    n: string,
    index: number
}

const MyList = () => {

    const names: string[] = ['Name', 'Posts', 'Collect']

    let list = [
    {
        Name:'Web 3 social media',
        Post:4,
        Collect:10
    },{
        Name:'DAOs y Gobernanza',
        Post:5,
        Collect:8
    },{
        Name:'DeSci world',
        Post:3,
        Collect:2
    }]
    

    return (
    <div className='text-black w-full'>
        <div>
            <div></div>
            <div></div>
        </div>

        <div>
            
            <div className='flex'>
                {names.map((n:string, index:number)=>{
                    return(
                        <>
                            <div className='index w-1/2 text-center'>
                                {n=='name'? (<>
                                    <p>{n}</p>
                                </>) 
                                :(<>
                                    <div>{n}</div>
                                    <div>{n}</div>
                                </>)  }
                            </div>
                        </>
                    )
                })}
            </div>
                
            <div>
                {list.map(( l, index)=>{

                    return(
                        <>
                            <div key={index} className="flex w-full text-center">
                                <div>
                                    <div className="w-1/2">{l.Name}</div>
                                </div>
                                <div className='flex'>
                                    <div className="w-1/2">{l.Post}</div>
                                    <div className="w-1/2">{l.Collect}</div>
                                </div>
                                <div className='flex'>Add<button>icon</button></div>
                            </div>
                        </>
                    )
                })}
            </div>
        
        </div>
        
    </div>
    )
}

export default MyList