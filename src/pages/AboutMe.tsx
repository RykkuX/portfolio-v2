import React from "react";
import { typographyClasses, combinedClasses } from "../utils/typography";

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* 
        On large screens (lg:), use 10 columns: 
        - 1st and 10th columns as empty margins (col-span-1)
        - Main content in columns 2-9 (col-span-8)
        On smaller screens, use a single column.
        Now, also use grid-rows to create rows for main content.
      */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 lg:grid-cols-10">
        {/* Navigation */}
        <nav className="col-span-full flex justify-start">
          <button className={typographyClasses.aboutmeBody}>
            back to home.
          </button>
        </nav>
        {/* Left margin for large screens */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Main content with rows and columns */}
        <div
          className="
            col-span-1 lg:col-span-8
            grid gap-6
            grid-cols-1 md:grid-cols-8
            grid-rows-[auto_auto_auto_auto_auto_auto_auto]
          "
        >
          {/* Row 1: About Me */}
          <section className="md:col-span-5 row-span-2 row-start-1 bg-gray-800 rounded-lg p-6 h-fit">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0" />
              <div>
                <h1 className={combinedClasses.aboutmeProfileName}>John Llyco Sauza</h1>
                <p className={typographyClasses.aboutmeJobTitle}>Full Stack Developer</p>
              </div>
            </div>
            <div className="text-left">
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

          {/* Row 1: Experience */}
          <section className="md:col-span-3 row-span-2 row-start-1 bg-gray-800 rounded-lg p-6 text-left h-fit">
            <div className="flex items-center gap-2 mb-10">
              <h2 className={typographyClasses.aboutmeH3}>Experience</h2>
            </div>
            <div className="flex justify-between items-center mx-10 mb-10">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium fontweight-extrabold">Present</span>
              <span className={typographyClasses.aboutmeH2}>Open To Work</span>
            </div>
            <div className="space-y-5">
              {/* Experience Item 1 */}
              <div className="grid grid-cols-5 gap-2 items-start">
                <div className="col-span-2">
                  <p className={typographyClasses.aboutmeBody}>June 2025</p>
                  <p className={typographyClasses.aboutmeBody}>Graduated</p>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={typographyClasses.aboutmeBody}>BS in Computer Science</span>
                    <span className="mx-1" />
                    <a
                      href="https://www.isatu.edu.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75`}
                    >
                      Iloilo Science and Technology University
                    </a>
                  </div>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                </div>
              </div>
              {/* Experience Item 2 */}
              <div className="grid grid-cols-5 gap-2 items-start">
                <div className="col-span-2">
                  <p className={typographyClasses.aboutmeBody}>Jan 2025</p>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={typographyClasses.aboutmeBody}>Lead Software Developer</span>
                    <span className="mx-1" />
                    <a
                      href="https://www.facebook.com/BAcademyPH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75`}
                    >
                      B-Academy PH
                    </a>
                  </div>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                </div>
              </div>
              {/* Experience Item 3 */}
              <div className="grid grid-cols-5 gap-2 items-start">
                <div className="col-span-2">
                  <p className={typographyClasses.aboutmeBody}>Jul 2024</p>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={typographyClasses.aboutmeBody}>President</span>
                    <span className="mx-1" />
                    <a
                      href="https://www.facebook.com/isatechsociety"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75`}
                    >
                      ISATech Society
                    </a>
                  </div>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                </div>
              </div>
              {/* Experience Item 4 */}
              <div className="grid grid-cols-5 gap-2 items-start">
                <div className="col-span-2">
                  <p className={typographyClasses.aboutmeBody}>Jan 2024</p>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={typographyClasses.aboutmeBody}>Software Developer</span>
                    <span className="mx-1" />
                    <a
                      href="https://www.facebook.com/ztechsolutionsph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75`}
                    >
                      Z-Tech
                    </a>
                  </div>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                </div>
              </div>
              {/* Experience Item 5 */}
              <div className="grid grid-cols-5 gap-2 items-start">
                <div className="col-span-2">
                  <p className={typographyClasses.aboutmeBody}>Aug 2023</p>
                </div>
                <div className="col-span-3 flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className={typographyClasses.aboutmeBody}>Software Developer</span>
                    <span className="mx-1" />
                    <a
                      href="https://www.linkedin.com/in/llyco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${typographyClasses.aboutmeBody} underline underline-offset-2 transition-transform duration-150 hover:scale-105 opacity-75`}
                    >
                      Freelance
                    </a>
                  </div>
                  <span className={`${typographyClasses.aboutmeBody} opacity-75`}>Iloilo City, Philippines</span>
                </div>
              </div>
            </div>
          </section>

          {/* Row 2: Certifications */}
          <section className="md:col-span-2 row-start-3 bg-gray-800 rounded-lg p-6 w-fit">
            <h2 className={typographyClasses.aboutmeBody}>Certifications</h2>
            <ul className="space-y-2 mt-2">
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
          {/* Row 2: Recognitions */}
          <section className="md:col-span-3 row-start-3 bg-gray-800 rounded-lg p-6 w-fit h-fit">
            <h2 className={typographyClasses.aboutmeBody}>Recognitions</h2>
            <ul className="space-y-2 mt-2">
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

          {/* Row 3: Skills */}
          <section className="col-span-full row-start-4 bg-gray-800 rounded-lg p-6">
            <h2 className={typographyClasses.aboutmeBody}>Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="space-y-3">
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>Software Development</h3>
                  <p className={typographyClasses.aboutmeBody}>React | JavaScript | TypeScript | SQL | Docker</p>
                </div>
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>Data Analytics | AI / ML</h3>
                  <p className={typographyClasses.aboutmeBody}>Python | TensorFlow | PyTorch | OpenAI</p>
                </div>
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>DevOps</h3>
                  <p className={typographyClasses.aboutmeBody}>Terraform | GitHub | Azure</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>Information / Cybersecurity</h3>
                  <p className={typographyClasses.aboutmeBody}>Kali Linux | Nmap | Splunk | Wireshark | Metasploit</p>
                </div>
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>Project Management</h3>
                  <p className={typographyClasses.aboutmeBody}>Jira | Google Workspace | Microsoft 365</p>
                </div>
                <div>
                  <h3 className={typographyClasses.aboutmeBody}>Toolset</h3>
                  <p className={typographyClasses.aboutmeBody}>React | JavaScript | Python | C# | GitHub</p>
                </div>
              </div>
            </div>
          </section>

          {/* Row 4: Contact */}
          <section className="md:col-span-4 row-start-5 bg-gray-800 rounded-lg p-6">
            <h2 className={typographyClasses.aboutmeBody}>Contact</h2>
            <div className="space-y-2 mt-2">
              <a href="https://github.com/RvkkuX" target="_blank" rel="noopener noreferrer" className={typographyClasses.aboutmeBody}>github.com/RvkkuX</a>
              <a href="https://www.linkedin.com/in/llyco-sauza-654151321/" target="_blank" rel="noopener noreferrer" className={typographyClasses.aboutmeBody}>linkedin.com/in/llyco-sauza</a>
              <a href="https://www.facebook.com/LikesXauza" target="_blank" rel="noopener noreferrer" className={typographyClasses.aboutmeBody}>facebook.com/LikesXauza</a>
              <a href="mailto:llycosauza@gmail.com" className={typographyClasses.aboutmeBody}>llycosauza@gmail.com</a>
              <p className={typographyClasses.aboutmeBody}>09283397248</p>
            </div>
          </section>

          {/* Row 5: Footer */}
          <footer className="col-span-full row-start-6 flex justify-between items-center pt-6 border-t border-gray-700">
            <p className={typographyClasses.aboutmeBody}>Llyco Sauza 2025.</p>
            <button className={typographyClasses.aboutmeBody}>Download as PDF</button>
          </footer>
        </div>

        {/* Right margin for large screens */}
        <div className="hidden lg:block lg:col-span-1" />
      </div>
    </div>
  );
};

export default AboutMe;
