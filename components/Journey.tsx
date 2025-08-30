import { arrayCheck, journey } from "../utils/utils";
import { motion } from "framer-motion";

const JourneySection = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto mt-10 pb-0 bg-primary  text-gray-200 shadow-lg">
      <motion.h2
        className="text-3xl font-bold mb-6 text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        My Journey
      </motion.h2>
      <motion.div
        className="relative border-l border-gray-700"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {arrayCheck(journey) &&
          journey.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              variants={itemVariants}
            >
              <motion.div
                className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-gray-700"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
              ></motion.div>
              <motion.div
                className="p-6 bg-gray-800 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.institution}</p>
                <p className="text-lg text-gray-400">
                  {item.startDate} - {item.endDate}
                </p>

                {item.description && (
                  <ul className="list-disc list-inside text-gray-400 mt-4">
                    {arrayCheck(item?.description) &&
                      item?.description.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2 + index * 0.1 + idx * 0.05,
                            duration: 0.3
                          }}
                        >
                          {point}
                        </motion.li>
                      ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default JourneySection;
