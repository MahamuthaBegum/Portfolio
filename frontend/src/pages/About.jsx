import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About Me</h1>

      <p className="max-w-3xl text-lg mb-11">
        I'm <span className="text-teal-600 font-semibold">Magdoom Mahamutha Begum M</span>, a passionate and self-motivated
        aspiring full stack developer. I love solving problems, learning new technologies,
        and building user-friendly applications.
      </p>

      <div className="max-w-6xlxl w-full flex flex-col md:flex-row gap-6 justify-center">
        {/* Education */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">🎓 Education</h2>
          <ul className="list-inside list-disc mb-4 ">
            <li>B.Sc. Computer Science, Jamal Mohamed College (2019 - 2022)</li>
            <li>M.Sc. Computer Science, Bharathidasan University - Cores Campus (2023 - 2025)</li>
          </ul>
        </div>
        {/* Technical Skills */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">🧑‍💻 Technical Skills</h2>
          <p className="mb-4">
            HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, GitHub, Firebase
          </p>
        </div>
        {/* Course Completed */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">📚 Course Completed</h2>
          <p className="mb-4">
            3-Month Full Stack Web Development Program – Covered frontend, backend, and deployment.
          </p>
        </div>
        {/* Career Goals */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">🚀 Career Goals</h2>
          <p className="">
            To start my career as a junior developer where I can learn from real-world projects and
            grow into a skilled full-stack developer.
          </p>
        </div>
        {/* Traits & Soft Skills */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">💡 Traits & Soft Skills</h2>
          <p>
            Curious, detail-oriented, eager to learn, good communication, and team collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
