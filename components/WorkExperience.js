import { FaCheck } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div className="mt-10 px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex justify-between items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <div className="p-2 bg-green-500 rounded-full">
          <FaCheck />
        </div>
        <div>
          <p className="text-yellow-500 font-medium text-xl"> +5</p>
          <p>Years of Experience</p>
        </div>
        <div>
          <FaChevronRight />
        </div>
      </div>
      <div className="flex justify-between items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <div className="p-2 bg-green-500 rounded-full">
          <FaCheck />
        </div>
        <div>
          <p className="text-yellow-500 font-medium text-xl"> +100</p>
          <p>Projects Completed</p>
        </div>
        <div>
          <FaChevronRight />
        </div>
      </div>
      <div className="flex justify-between items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <div className="p-2 bg-green-500 rounded-full">
          <FaCheck />
        </div>
        <div>
          <p className="text-yellow-500 font-medium text-xl"> +50</p>
          <p>happy Client</p>
        </div>
        <div>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
