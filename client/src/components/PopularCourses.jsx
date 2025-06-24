import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const mockCourses = [
  {
    id: "1",
    title: "React for Beginners",
    image: "https://via.placeholder.com/400x200?text=React",
    addedAt: "2025-06-20",
    enrollCount: 120,
    description: "Learn React from scratch with real-world examples.",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    image: "https://via.placeholder.com/400x200?text=JavaScript",
    addedAt: "2025-06-19",
    enrollCount: 230,
    description: "Deep dive into ES6+, closures, async, and more.",
  },
  {
    id: "3",
    title: "Node.js & Express",
    image: "https://via.placeholder.com/400x200?text=Node.js",
    addedAt: "2025-06-18",
    enrollCount: 310,
    description: "Build powerful APIs with Node and Express framework.",
  },
  {
    id: "4",
    title: "Tailwind CSS Mastery",
    image: "https://via.placeholder.com/400x200?text=TailwindCSS",
    addedAt: "2025-06-17",
    enrollCount: 150,
    description: "Master utility-first CSS with beautiful UI examples.",
  },
  {
    id: "5",
    title: "Firebase for Web",
    image: "https://via.placeholder.com/400x200?text=Firebase",
    addedAt: "2025-06-16",
    enrollCount: 275,
    description: "Learn Firebase Auth, Firestore, and Hosting.",
  },
  {
    id: "6",
    title: "Full Stack MERN App",
    image: "https://via.placeholder.com/400x200?text=MERN",
    addedAt: "2025-06-15",
    enrollCount: 340,
    description:
      "Create a complete web app using MongoDB, Express, React, and Node.",
  },
];

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Sort by enrollCount descending
    const popular = [...mockCourses]
      .sort((a, b) => b.enrollCount - a.enrollCount)
      .slice(0, 6);
    setCourses(popular);
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-500">
                Enrolled: {course.enrollCount} students
              </p>
              <p className="text-sm text-gray-700 line-clamp-2">
                {course.description}
              </p>
              <Link
                to={`/courses/${course.id}`}
                className="inline-block mt-2 px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
