import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import HeroImage from"../assets/Mental-Health.jpg"
import {Link} from "react-scroll"
import {RiMentalHealthFill} from "react-icons/ri"
import ClientNav from './ClientNav';

const Landing = () => {
  return (
    <div name="Welcome" className="h-screen w-full bg-gradient-to-b from-sky-500 via-sky-600 to-sky-300 ">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Welcome to ME.
                </h2>
                <p className='text-white' py-4 max-w-md>
                    Let ME be the first step of your mental health journey.
                </p>

                <div>
                    <Link to="home" className="group opacity-30 text-black text-opacity-100 font-bold w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-br from-gray-300 to-white cursor-pointer">
                    Login
                        <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineKeyboardArrowRight  size={20} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
            <RiMentalHealthFill alt="my profile" className='rounded-2xl  mx-auto sm:w-auto w-2/3 fill-white' size={500} />
            </div>
        </div>
    </div>
    
  )
}

export default Landing