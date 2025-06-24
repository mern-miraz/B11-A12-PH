const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Our courses are taught by industry professionals with real-world experience.",
      icon: "🎓",
    },
    {
      title: "Flexible Learning",
      description:
        "Learn at your own pace from anywhere, anytime using any device.",
      icon: "⏱️",
    },
    {
      title: "Certified Courses",
      description:
        "Get recognized certifications after completing each course successfully.",
      icon: "📜",
    },
  ];

  return (
    <section className="py-10 px-4 md:px-10 bg-base-100">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
