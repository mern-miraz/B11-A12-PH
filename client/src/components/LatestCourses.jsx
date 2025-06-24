import React, { useEffect, useState } from "react";
import { Link } from "react-router";

// Dummy course structure for example
const mockCourses = [
  {
    id: "1",
    title: "React for Beginners",
    image: "https://via.placeholder.com/400x200?text=React",
    addedAt: "2025-06-20",
    description: "Learn React from scratch with real-world examples.",
  },
  {
    id: "2",
    title: "Advanced JavaScript",
    image: "https://via.placeholder.com/400x200?text=JavaScript",
    addedAt: "2025-06-19",
    description: "Deep dive into ES6+, closures, async, and more.",
  },
  {
    id: "3",
    title: "Node.js & Express",
    image: "https://via.placeholder.com/400x200?text=Node.js",
    addedAt: "2025-06-18",
    description: "Build powerful APIs with Node and Express framework.",
  },
  {
    id: "4",
    title: "Tailwind CSS Mastery",
    image: "https://via.placeholder.com/400x200?text=TailwindCSS",
    addedAt: "2025-06-17",
    description: "Master utility-first CSS with beautiful UI examples.",
  },
  {
    id: "5",
    title: "Firebase for Web",
    image: "https://via.placeholder.com/400x200?text=Firebase",
    addedAt: "2025-06-16",
    description: "Learn Firebase Auth, Firestore, and Hosting.",
  },
  {
    id: "6",
    title: "Full Stack MERN App",
    image: "https://via.placeholder.com/400x200?text=MERN",
    addedAt: "2025-06-15",
    description:
      "Create a complete web app using MongoDB, Express, React, and Node.",
  },
];

const LatestCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulating fetching and sorting by newest date
    const sortedCourses = mockCourses
      .sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
      .slice(0, 6);

    setCourses(sortedCourses);
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Courses</h2>

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
                Added on: {new Date(course.addedAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-700 line-clamp-2">
                {course.description}
              </p>
              <Link
                to={`/course-details/${course.id}`}
                className="inline-block mt-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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

export default LatestCourses;
