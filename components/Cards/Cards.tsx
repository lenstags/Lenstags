import world from "../../assets/World.png"
import Image from "next/image";

const Index = () => (
    <div>
            

                    

        <div className="mx-auto container mb-28 ">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            
            <div className="w-full h-64 flex flex-col bg-white justify-between  rounded-lg border border-gray-400 mb-6 py-5">
                   

                    <div className="flex justify-between border-gray-200 border-b pb-5 px-5"> 
                        <div> <figure>
                            <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"></img>
                            <div className="font-medium text-left">
                                <div className="text-gray-500">Roberta Casas</div>
                                <div className="text-sm font-light text-gray-500">@robertacasas</div>
                            </div>
                        </figcaption>    
                    </figure></div>
                        <div>
                            <img className="w-6 h-6" src="/icons/vertical-dots.svg" />
                        {/*     <Image className="" width="100%" height="100%" src="/icons/vertical-dots.svg" alt="avatar" />
                         */}</div>


                    </div>

                        <div>
                            <h3 className="text-gray-800 leading-7 font-semibold w-11/12 px-4">What does success as a UX designer look like and ...</h3>
                        </div>
                            <a href="#">
                                    <img src={world.src}  alt="" />
                            </a>
                        <div className="bg-white rounded-b-lg border border-gray-400">
                            <div className="mb-3 flex items-center flex-no-wrap px-4">
                                <div className="w-6 h-6 bg-cover bg-center rounded-md">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_0.png"  className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" ></img>
                                </div>
                                <div className="w-6 h-6 bg-cover rounded-md -ml-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_1.png" className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" ></img>
                                </div>
                                <div className="w-6 h-6 bg-cover rounded-md bg-center -ml-2">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_4_2.png" className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white dark:border-gray-700 shadow" ></img>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-gray-800 px-4">
                                <p className="dark:text-gray-100 text-sm">March 28, 2020</p>
                                <div className="w-8 h-8 rounded-full dark:bg-gray-100 dark:text-gray-800 bg-gray-800 text-white flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            </div>
            </div>
);
export default Index;