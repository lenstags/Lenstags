import React from 'react'
import {Input} from '../UI/Search'
import PostType from '../UI/PostTypes'
import { useNavigate } from 'react-router-dom'
import Link from 'next/link'

const View2 = () => {



  return (
    <div className='w-full pt-10 pl-5 pb-40 '>
      <div className='w-full flex'>
          <div className='flex gap-8 border-black border w-1/2'>
            <Link href=""><div className='hover:bg-greenLengs'><button>MY LISTS</button></div></Link>
            <Link href=""><div className='hover:bg-greenLengs'><button>EDIT LIST</button></div></Link>
            <Link href=""><div className='hover:bg-greenLengs' ><button>NEW LIST</button></div></Link>
          </div>
          <div className='w-1/2'>
            <Input
                      placeholder="Search..."
                      type="text"
                      iconLeft= ""
                  />
          </div>
      </div>
      <div>

        <PostType/>

      </div>
    </div>
  )
}

export default View2