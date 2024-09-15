"use client";

const JourneySection = () => {
  const journey = [
    {
      title: "Software Development Engineer - 1",
      institution: "Jio Platforms Limited",
      startDate: "November 2022",
      endDate: "Present",
    },
    {
      title: "Electronics Engineering",
      institution: "Terna Engineering College",
      startDate: "August 2018",
      endDate: "May 2022",
    },
    {
      title: "12th",
      institution: "PEST's New English Junior College, Thane",
      startDate: "June 2017",
      endDate: "March 2018",
    },
    {
      title: "10th Grade",
      institution: "Little Flower High School",
      startDate: "June 2015",
      endDate: "March 2016",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-10 p-8 bg-primary border border-gray-700 rounded-lg text-gray-200 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-left">My Journey</h2>
      <div className="relative border-l border-gray-700">
        {journey.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-lg text-gray-300">{item.institution}</p>
              <p className="text-lg text-gray-400">
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneySection;
