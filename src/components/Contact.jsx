import React from 'react';
import { IconBrandGithub, IconBrandYoutube,IconBrandInstagram} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const ConnectWithUs = () => {
  return (
    // <div className="flex flex-col md:flex-row justify-center items-center text-white m-20">
    //   <div className="flex flex-col md:w-1/2">
    //     <h1 className="text-3xl text-center md:text-left font-bold mb-4 font-spaceGrotesk">Connect With Us</h1>
    //     <div className="flex flex-col gap-5 md:gap-10 md:flex-row mt-2">
    //       <h1 className='bg-black py-3 px-[70px] rounded text-sm text-center'>icssf@itera.ac.id</h1>
    //       <h1 className='bg-black py-3 px-[70px] rounded text-sm text-center'>+628384773938</h1>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-center md:items-end md:w-1/2">
    //     <p className="text-center md:text-right">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam id neque rhoncus pulvinar at non leo
    //     </p>
    //     <div className="flex space-x-4">
    //       <Link to={"/"} className="bg-black p-2 rounded text-gray-400 hover:text-white">
    //         <IconBrandGithub/>
    //       </Link>
    //       <Link to={"/"} className="bg-black p-2 rounded text-gray-400 hover:text-white">
    //         <IconBrandYoutube/>
    //       </Link>
    //       <Link to={"/"} className=" bg-black p-2 rounded text-gray-400 hover:text-white">
    //         <IconBrandInstagram/>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center mx-10 mt-32 gap-5">
  <div className="flex flex-col md:flex-row text-white items-center justify-between w-full">
    <h1 className="text-5xl font-spaceGrotesk font-bold text-center md:text-left">Connect With Us</h1>
    <p className="font-plusJakarta text-center md:text-right w-full md:w-1/2 mt-3 md:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a quam id neque rhoncus pulvinar at non leo</p>
  </div>
  <div className="flex flex-col md:flex-row gap-3 w-full">
    <Link className='bg-black py-3 px-5 rounded text-md text-center text-white w-full'>icssf@itera.ac.id</Link>
    <Link className='bg-black py-3 px-5 rounded text-md text-center text-white w-full'>+628384773938</Link>
    
    <div className="flex gap-3 justify-center w-full md:w-auto">
      <Link to={"/"} className="bg-black p-3 rounded text-gray-400 hover:text-white flex justify-center items-center w-full md:w-auto">
        <IconBrandGithub/>
      </Link>
      <Link to={"/"} className="bg-black p-3 rounded text-gray-400 hover:text-white flex justify-center items-center w-full md:w-auto">
        <IconBrandYoutube/>
      </Link>
      <Link to={"/"} className="bg-black p-3 rounded text-gray-400 hover:text-white flex justify-center items-center w-full md:w-auto">
        <IconBrandInstagram/>
      </Link>
    </div>
  </div>
</div>



  );
};

export default ConnectWithUs;
