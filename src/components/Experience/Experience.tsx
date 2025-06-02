import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full" />
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg font-medium">
          A collection of my work experience and roles in various organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/20 z-0" />

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative z-10 flex flex-col sm:flex-row items-center mb-20 ${
                isLeft ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-[50%] bg-white border-4 border-[#1f1f2e] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-20 shadow-xl">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`bg-[#002d4d] text-white w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] border border-white/10 backdrop-blur-md ${
                  isLeft ? "sm:ml-20" : "sm:mr-20"
                } mt-16 sm:mt-0`}
              >
                {/* Header Row */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-400">{experience.company}</h4>
                    <p className="text-sm text-gray-500">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-300 hover:text-white">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="text-sm font-medium text-blue-300 uppercase tracking-wide">
                    Skills
                  </h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-blue-700/20 text-blue-200 px-3 py-1 text-xs sm:text-sm rounded-full mr-2 mb-2 border border-blue-500/40"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
