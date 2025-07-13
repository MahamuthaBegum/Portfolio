import React from "react";
import {useNavigate} from "react-router-dom";


function Home() {

const navigate = useNavigate();

const handleClick=()=>{
  navigate("/about");
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 p-6 text-center">
      
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mb-6 drop-shadow-md">
        Welcome to My Portfolio
      </h1>

      <img
        src={require("../assets/avataaars.png")}
        alt="Avatar"
        className="rounded-full w-36 h-36 border-4 border-blue-500 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out mb-5"
      />

      <h2 className="text-2xl font-bold text-gray-800">
        Hi, I'm <span className="text-teal-600">Magdoom Mahamutha Begum M</span>
      </h2>

      <h3 className="text-lg text-gray-600 mt-1 mb-4 italic">Junior Full Stack Developer</h3>

      <p className="max-w-2xl text-gray-700 mb-8 leading-relaxed text-[17px]">
        I’m a passionate and motivated fresher in web development, skilled in <span className="font-medium text-blue-600">React</span>, 
        <span className="font-medium text-green-600"> Node.js</span>, and <span className="font-medium text-purple-600">MongoDB</span>. I love turning ideas into reality
        through clean, efficient code. Eager to collaborate, learn, and contribute to meaningful tech solutions.
      </p>

      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300"
      >
        Learn More About Me
      </button>

      <div className="flex space-x-8 mt-8">
        <a
          href="https://github.com/MahamuthaBegum/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-black transition font-medium shadow-sm hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mahamuthabegum"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-blue-600 transition font-medium shadow-sm hover:underline"
        >
          LinkedIn
        </a>
      </div>

    </div>
  );
}

export default Home;
