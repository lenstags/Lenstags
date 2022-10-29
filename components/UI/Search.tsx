import React from 'react'
import type {ReactNode} from 'react'

interface attrInput {
    placeholder:string,
    type:String,
    iconLeft: ReactNode
}

export const Input= ({placeholder, type, iconLeft}:attrInput) => {
  return (
    <div className='w-full'>
          <input type="" />
    </div>
  )
}
