import React from 'react'

import Nav from '../components/Nav/Nav'
import Card from '../components/Profile/Card'
import Post from '../components/Posts/Post'

const Profiles = () => {
    
    return (
        <div className='bg-white w-full h-auto'>
            <Nav/>
            <div className='flex w-full pr-40'>
    
                    <Card img=""/>
                    <Post/>
            </div>
        </div>
    ) 
}

export default Profiles