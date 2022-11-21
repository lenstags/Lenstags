import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav  from '../components/Nav/Nav'
import Principal from '../components/Principal'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generax|" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      
      <main className="h-screen bg-white">
  
      <div className="container flex justify-center">
        <div>Form container
          <div><div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div></div>
          <div><div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div></div>
          <div><div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div></div>
          <div><div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pick a file</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div></div>
          <div><div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div></div>
        </div>
        
      </div>
       
      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}

export default Home
