import React from 'react';
import { IconBrandGithub, IconBrandYoutube,IconBrandInstagram} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ConnectWithUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white p-10 px-10 md:px-20">
      <div className="flex flex-col md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-3xl text-center md:text-left font-bold mb-4">Connect With Us</h1>
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row mt-2">
          <h1 className='bg-black py-3 px-[70px] rounded text-sm text-center'>icssf@itera.ac.id</h1>
          <h1 className='bg-black py-3 px-[70px] rounded text-sm text-center'>+628384773938</h1>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-end md:w-1/2">
        <p className="mb-4 md:mb-10 text-center md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam id neque rhoncus pulvinar at non leo
        </p>
        <div className="flex space-x-4">
          <Link to={"/"} className="bg-black p-2 rounded text-gray-400 hover:text-white">
            <IconBrandGithub/>
          </Link>
          <Link to={"/"} className="bg-black p-2 rounded text-gray-400 hover:text-white">
            <IconBrandYoutube/>
          </Link>
          <Link to={"/"} className=" bg-black p-2 rounded text-gray-400 hover:text-white">
            <IconBrandInstagram/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
