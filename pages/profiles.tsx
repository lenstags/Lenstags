import React from 'react'
import Nav from '../components/Nav/Nav'
import Card from '../components/Profile/Card'
import PostView from '../components/ViewPosts/PostView'

const Profiles = () => {
    
    return (
        <div className='bg-white w-full h-auto'>
            <Nav/>
            <div className='flex w-full pr-40'>
    
                    <Card img=""/>
                    <PostView/>
            </div>
        </div>
    ) 
}

export default Profiles