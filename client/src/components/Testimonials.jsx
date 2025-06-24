const Testimonials = () => {
  const feedbacks = [
    {
      name: "Ayesha Rahman",
      comment:
        "This platform changed the way I learn. The courses are clear and very well-structured.",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Tanvir Ahmed",
      comment:
        "I landed a job after completing the MERN stack course. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <section className="py-10 px-4 md:px-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Students Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbacks.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex gap-4 items-start"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-700 italic">"{item.comment}"</p>
              <p className="text-sm font-semibold mt-2">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
