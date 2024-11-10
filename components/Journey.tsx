import { arrayCheck, journey } from "./../utils/utils";

const JourneySection = () => {
  return (
    <section className="max-w-7xl mx-auto p-8 pb-0 bg-primary  text-gray-200 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-left">My Journey</h2>
      <div className="relative border-l border-gray-700">
        {arrayCheck(journey) &&
          journey.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"></div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.institution}</p>
                <p className="text-lg text-gray-400">
                  {item.startDate} - {item.endDate}
                </p>

                {item.description && (
                  <ul className="list-disc list-inside text-gray-400 mt-4">
                    {arrayCheck(item?.description) && item?.description.map((point, idx) => (
                      <li key={idx} className="text-lg">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default JourneySection;
