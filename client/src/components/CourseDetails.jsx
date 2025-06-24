import React from "react";

const CourseDetails = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Course Image */}
        <img
          src="https://via.placeholder.com/800x400?text=Course+Banner"
          alt="Course Banner"
          className="w-full h-72 object-cover"
        />

        {/* Content Section */}
        <div className="p-6 md:p-10 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Complete React Course for Beginners
          </h1>
          <p className="text-gray-500 text-sm">Published on: June 22, 2025</p>

          <p className="text-lg text-gray-700">
            This course covers everything you need to start building powerful
            and scalable web applications using React. You'll learn about
            components, hooks, routing, state management and even deployment.
          </p>

          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Duration: 12 hours</li>
            <li>Level: Beginner to Intermediate</li>
            <li>Instructor: Jane Doe</li>
            <li>Language: English</li>
          </ul>

          {/* Enroll Button */}
          <div className="pt-6">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              disabled={false}
            >
              Enroll
            </button>
            {/* Optional message */}
            {/* <p className="text-sm text-red-500 mt-2">Please log in to enroll</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
