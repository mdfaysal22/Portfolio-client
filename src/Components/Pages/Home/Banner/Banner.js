import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';
import manImage from './../../../../Assets/man.png'

const Banner = () => {
    return (
        <div className="bg-gray-100 my-10 rounded-md pt-5 dark:bg-secondary duration-500">
            <div className="p-0 flex justify-start items-center flex-col-reverse lg:flex-row">

                
                <img src={manImage} alt='Man Images' className=" bottom-0" />
                


                <div className='text-center md:text-left'>
                    <h1 className="text-5xl font-bold">Hello ! <span className='text-primary'>I'm Faysal.</span></h1>
                    <div className="py-6">
                        <p>MERN Stack Developer.</p>
                        <p>Certified By Programming Hero - Batch-6</p>
                    </div>
                    <div className='flex  justify-center md:justify-start pb-5 items-center gap-5'>
                        <a className='text-xl duration-500 font-semibold p-2 rounded-full dark:p-0 dark:rounded-none dark:hover:text-primary dark:bg-secondary bg-primary' href="/"><AiFillGithub></AiFillGithub></a>
                        <a className='text-xl duration-500 font-semibold p-2 rounded-full dark:p-0 dark:rounded-none dark:hover:text-primary dark:bg-secondary bg-primary' href="/"><AiFillLinkedin></AiFillLinkedin></a>
                    </div>
                    <button className="hidden text-white  md:block btn btn-primary"><span>Preview Resume</span> <span><AiOutlineEye className='inline ml-4'></AiOutlineEye></span></button>
                    <button className=' md:hidden btn text-white btn-primary'><span>Download Resume <AiOutlineDownload className='  inline'></AiOutlineDownload></span></button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;