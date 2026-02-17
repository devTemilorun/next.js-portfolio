import React from 'react';
import { assets } from '../Assets/assets';
import Image from 'next/image';


type Project = {
  title: string;
  description: string;
  image: string | any;    
};

const projectData: Project[] = [
  {
    title: "Agency.ai",
    description:
      "Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur",
    image: assets.project_1,
  },
  {
    title: "Estate",
    description:
      "Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur",
    image: assets.project_2,
  },
  {
    title: "Petworld",
    description:
      "Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur",
    image: assets.project_3,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-light tracking-wide text-gray-900">
          Finished Projects
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          The result? Digital products that don’t just function
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="hover:scale-102 border border-gray-200 shadow-lg p-4 rounded-xl duration-500 transition-all cursor-pointer"
          >
            <Image src={project.image} className="w-full rounded-xl" alt=''/>
            <h3 className="mt-3 mb-2 text-3xl text-center font-bold">
              {project.title}
            </h3>
            <p className="text-sm opacity-80 px-2">
              {project.description}
            </p>
            <button className='my-2 w-2/4 justify-center py-1 mx-auto flex bg-gray-700 text-white text-xl rounded'>•Preview•</button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Projects;