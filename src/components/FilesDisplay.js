import React from 'react';
import Image from 'next/image';
import filelogo from "../../public/logo.png"
import serverpath from '../data/serverpath'



const FileDisplay = ({ name }) => {
  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition duration-300"
    >
      <a href={`${serverpath}/download/${name}`}>
      <div className="flex items-center">
        <Image
          src={filelogo} 
          alt="File Icon"
          className="w-10 h-10 mr-4" 
          width={110}
          height={50}
        />
        <span className="text-xl font-semibold">{name}</span>
      </div>
      </a>
    </div>
  );
};

export default FileDisplay;
