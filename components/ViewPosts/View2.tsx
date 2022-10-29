import React from 'react'
import {Input} from '../UI/Search'
import PostType from '../UI/PostTypes'

const View2 = () => {
  return (
    <div className='w-full pt-10 pl-5 pb-40'>
      <div className='w-full flex'>
          <div className='flex gap-8 border-black border w-1/2'>
            <div>MY LISTS</div>
            <div>EDIT LIST</div>
            <div>NEW LIST</div>
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