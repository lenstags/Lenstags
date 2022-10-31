import React from 'react'
import Link from 'next/link'

const Links = ({Text, Href}:any) => {
  return (
    <Link href={ Href }>
        <a href={ Href }>
            <div className='hover:bg-greenLengs'>
                <button>{Text}</button>
            </div>
        </a>
    </Link>
  )
}

export default Links