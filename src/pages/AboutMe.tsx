import React from "react";
import { useNavigate } from "react-router-dom";
import { typographyClasses, combinedClasses, colorClasses } from "../utils/typography";

const AboutMe: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-12 auto-rows-max">
        {/* Nav */}
        <nav className="col-span-full flex justify-start">
          <button 
            onClick={handleBackToHome}
            className={`${typographyClasses.aboutmeBody} hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
          >
            back to home.
          </button>
        </nav>

        {/* Left Side */}
        <div className="lg:col-span-7 col-span-full flex flex-col gap-6">
          {/* Profile / About Me */}
          <section className="bg-gray-800 rounded-lg p-6 text-left">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0" />
              <div>
                <h1 className={combinedClasses.aboutmeProfileName}>John Llyco Sauza</h1>
                <p className={typographyClasses.aboutmeJobTitle}>Full Stack Developer</p>
              </div>
            </div>
            <div>
              <h2 className={`${typographyClasses.aboutmeH3} my-4`}>About Me</h2>
              <div className="space-y-2">
                <p className={typographyClasses.aboutmeBody}>
                  Hi, I'm Llyco. I'm a graduate of Bachelor of Science in Computer Science. I have a couple of years of experience in Software Engineering, Project Management, and DevOps. A founder of a small tech startup currently incubated here at Iloilo City.
                </p>
                <p className={typographyClasses.aboutmeBody}>
                  My interest in tech is cybersecurity and information security, currently I'm taking a certification from HackTheBox for penetration testing specialist. I would describe myself as eager to learn, objective and critical thinker, a passion for creating things and engineering stuff.
                </p>
              </div>
            </div>
          </section>

          {/* Recognitions & Certifications */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-6 text-left">
            {/* Recognitions */}
            <section className="bg-gray-800 rounded-lg p-6 h-fit md:col-span-3">
              <h2 className={typographyClasses.aboutmeH3}>Recognitions</h2>
              <ul className="space-y-2 mt-4">
                {[
                  "Academic Excellence Awardee",
                  "Student Tech Startup of the Year Awardee",
                  "Hack4Health Nationals Finalist",
                  "Hack4Gov3 Nationals Finalist",
                  "Best Thesis Awardee",
                  "With Honors SHS Graduate",
                ].map((recog, idx) => (
                  <li key={idx} className={`${typographyClasses.aboutmeBody} flex items-start`}>
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    <span>{recog}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Certifications */}
            <section className="bg-gray-800 rounded-lg p-6 md:col-span-2">
              <h2 className={typographyClasses.aboutmeH3}>Certifications</h2>
              <ul className="space-y-2 mt-4">
                {[
                  "TOPCIT Competency Certified",
                  "Penetration Testing Specialist HackTheBox",
                  "Civil Service Professional Level",
                  "CompTia A+ Cyber (Ongoing)",
                  "CompTia A+ Core 1 V15",
                ].map((cert, idx) => (
                  <li key={idx} className={`${typographyClasses.aboutmeBody} flex items-start`}>
                    <span className="text-yellow-500 mr-2 mt-1">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            {/* Contact */}
            <section className="bg-gray-800 rounded-lg p-6 text-left md:col-span-full">
              <h2 className={typographyClasses.aboutmeBody}>Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-x-4 gap-y-6 mt-4 w-full">
                <div className="flex flex-col items-start w-full">
                  <a
                    href="https://github.com/RvkkuX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}
                  >
                    GitHub
                  </a>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Code</span>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a
                    href="https://www.linkedin.com/in/llyco-sauza-654151321/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}
                  >
                    LinkedIn
                  </a>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Connections</span>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a
                    href="https://www.facebook.com/LikesXauza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}
                  >
                    Facebook
                  </a>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Socials</span>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a
                    href="mailto:llycosauza@gmail.com"
                    className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}
                  >
                    Email
                  </a>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Gmail</span>
                </div>
                <div className="flex flex-col items-start w-full">
                  <span className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}>
                    09283397248
                  </span>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Mobile</span>
                </div>
                <div className="flex flex-col items-start w-full lg:col-span-2 pl-10">
                  <span className={`${typographyClasses.aboutmeBody} underline underline-offset-2 w-full`}>
                    Location
                  </span>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, PH</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-5 col-span-full flex flex-col gap-6">
          {/* Experience */}
          <section className="bg-gray-800 rounded-lg p-6 text-left h-fit">
            <div className="flex items-center gap-2 mb-10">
              <h2 className={typographyClasses.aboutmeH3}>Experience</h2>
            </div>
            <div className="grid grid-cols-5 gap-4 mb-10">
              <div className="flex items-center col-span-2">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">Present</span>
              </div>
              <div className="flex items-center justify-start col-span-3">
                <span className={`${typographyClasses.aboutmeH2}, ${colorClasses.success}`}>Open To Work</span>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  date: "June 2025",
                  title: "BS in Computer Science",
                  org: "Iloilo Science and Technology University",
                  url: "https://www.isatu.edu.ph/",
                },
                {
                  date: "Jan 2025",
                  title: "Lead Software Developer",
                  org: "B-Academy PH",
                  url: "https://www.facebook.com/BAcademyPH",
                },
                {
                  date: "Jul 2024",
                  title: "President",
                  org: "ISATech Society",
                  url: "https://www.facebook.com/isatechsociety",
                },
                {
                  date: "Jan 2024",
                  title: "Software Developer",
                  org: "Z-Tech",
                  url: "https://www.facebook.com/ztechsolutionsph",
                },
                {
                  date: "Aug 2023",
                  title: "Software Developer",
                  org: "Freelance",
                  url: "https://www.linkedin.com/in/llyco",
                },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-5 gap-2 items-start">
                  <div className="col-span-2">
                    <p className={typographyClasses.aboutmeBody}>{item.date}</p>
                  </div>
                  <div className="col-span-3 flex flex-col gap-1">
                    <div>
                      <div className={typographyClasses.aboutmeBody}>{item.title}</div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75 block`}
                      >
                        {item.org}
                      </a>
                    </div>
                    <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

           {/* Skills */}
           <section className="bg-gray-800 rounded-lg p-6 h-fit md:col-span-5 text-left">
              <h2 className={typographyClasses.aboutmeH3}>Skills</h2>
              <ul className="flex flex-wrap gap-3 mt-2">
                {[
                  "Project Management",
                  "Data Analytics",
                  "Machine Learning",
                  "Software Development",
                  "DevOps",
                  "Cybersecurity",
                ].map((skill, idx) => (
                  <li
                    key={idx}
                    className={`${typographyClasses.aboutmeBody} opacity-80 underline`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
        </div>

        {/* Footer */}
        <footer className="col-span-full flex justify-between items-center pt-6 border-t border-gray-700">
          <p className={typographyClasses.aboutmeBody}>Llyco Sauza 2025.</p>
          <button className={typographyClasses.aboutmeBody}>Download as PDF</button>
        </footer>
      </div>
    </div>
  );
};

export default AboutMe;
