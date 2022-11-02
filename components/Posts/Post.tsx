import cover from "../../assets/cover.jpg"
import Profile from "../../assets/profilePic.png"
import Image from 'next/image'

const Post = () => {

  let tags: string[] = ["Tokenomics", "Food", "Desing Systems", "Tokenomics", "Solidity", "Proof of Stake",
  "Movies & Series", "Proof of Stake", "Communities", "Art", "Proof of Stake", "Metaverso",
  "eSports", "DAO", "Comics"]

  return (
    <div className='text-black w-full'>
      <div>
      
        <div className='w-auto'>
          <div className='w-full'>
           <div className="flex justify-center  p-5">
            
            <div className="max-w-3xl w-full">
                <div className="text-5xl mb-5 font-extrabold">World's 50 best surf spots</div>

                <div className="flex justify-center">
                <div className="min-w-[280px] w-[768px] max-w-3xl"><Image  layout="responsive" width={100}  height={60}   src="/img/cover.jpg" alt=""></Image></div>
                </div>

                <div className="flex justify-between border-2 border-black mt-3">
                    <div className="p-2  border-black flex">       
                        <div><svg className="mr-2 h-6  w-6 text-black-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></div>             
                        <div className="font-semibold">121 collected</div>
                    </div>

                    <div className=" border-black flex justify-between "> 
                    
                    <div className="p-2 font-semibold">02 November 2022 </div>
                    <div className="w-10"><Image src={Profile.src} height={10} width={10} layout="responsive" alt=""></Image></div>
                    <div className="p-2 font-semibold">cryptonahue.lens</div>
                    
                    </div>
                </div>

                <div className="flex justify-between border-2 border-black mt-3">
                    <div className="p-2  border-black flex">       
                        <div><svg className="h-6 w-6 mr-2 text-black-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg></div>             
                        <div className="font-semibold">Article</div>
                    </div>

                    <div className=" border-black flex justify-between "> 
                    
                
                    </div>
                </div>

                <div >
                    <div className="flex justify-start">
                        <div className="p-1 font-semibold border-2 border-black mr-2 mt-2 bg-greenLengs"> 
                            DAO
                       </div>
                       <div className="p-1 font-semibold border-2 border-black mr-2 mt-2 bg-greenLengs"> 
                            Web3
                       </div>
                       <div className="p-1 font-semibold border-2 border-black mr-2 mt-2 bg-greenLengs"> 
                            Rekts
                       </div>
                    </div>
                </div>
                <article className="mt-2">
                   <p className=" text-lg font-sans tracking-normal  leading-relaxed break-words "> Markdown is a very lightweight markup language that lets you create rich text (meaning text that has emphasis, headers, etc) in any plain text editor. Markdown, like HTML, allows you to specify text formatting, but it is far less expressive than HTML, which is perfectly fine since it is only meant to format text and not create full web pages.</p>

                    <p className=" text-lg font-sans tracking-normal  leading-relaxed break-words">The resulting Markdown you write is then fed in to a converter that replaces the Markdown syntax with HTML, which can then be displayed on a web page. In addition to the Markdown syntax, you can also write plain HTML as well, so if you have some more complicated structure you want to add in-line with your text, you'll still have the ability to do so.</p>

                    <p className=" text-lg font-sans tracking-normal  leading-relaxed break-words ">John Gruber created the Markdown syntax with Aaron Swartz in 2004 as a way "to write using an easy-to-read, easy-to-write plain text format, and optionally convert it to structurally valid XHTML (or HTML)".</p>

                    <p className=" text-lg font-sans tracking-normal  leading-relaxed  break-words">He seems to have achieved his goal, but there have been problems with standardization since there isn't a clearly defined standard other than the initial documentation by Gruber. Because of this, there has been some fragmentation issues with converters, although many of them agree on the majority of the syntax, there are still quite a few different flavors out there. Throughout this article we'll stick as closely to the original implementation as possible, and note when I'm describing a feature not fully supported.</p>
                </article>
                
                <div className="border-t mb-2 pt-2">
                    <div className="font-semibold">2 Likes</div></div>
                <div className="border-2 border-black p-2">Comment Box</div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post