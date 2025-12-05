import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "../assets/education.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrambledText from "../components/ScrambledText";
export default function Education() {
  const educData = [
    {
      pendidikan: "S1 System Information",
      place: "Bina Sarana Informatika University",
      tahun: "2021 - 2025 | GPA: 4.0",
      description:
        "Completed my undergraduate degree in Information Systems. This comprehensive program rigorously covered the full software development lifecycle, providing expertise in system analysis, coding best practices (Software Development), creating intuitive user flows and interfaces (UI/UX Principles), and ensuring product reliability through effective Quality Assurance (QA) and testing methodologies.",
    },
    {
      pendidikan: "Madrasah Aliyah",
      place: "MA Nurussaadah",
      tahun: "2018 - 2021",
      description:
        "Completed my senior secondary education at MA Nurussaadah, specializing in the Science Track (IPA). This specialization provided me with an intensive grounding in Physics, Chemistry, Biology, and Advanced Mathematics, preparing me with strong analytical skills for scientific and technical higher education.",
    },
    {
      pendidikan: "Sekolah Menengah Pertama Negeri",
      place: "SMPN 239 Jakarta",
      tahun: "2015 - 2018",
      description:
        "Continued my foundational education at SMPN 239 Jakarta. This phase focused on expanding my understanding across a diverse range of subjects, emphasizing critical thinking, collaborative projects, and the transition from elementary concepts to more complex academic disciplines.",
    },
    {
      pendidikan: "Sekolah Dasar Negeri",
      place: "SDN 06 PT Pejaten Timur",
      tahun: "2009",
      description:
        "Started my formal educational journey at SDN 06 PT Pejatan Timur. This foundational experience provided me with a strong base in literacy, numeracy, character building, and the essential skills needed for lifelong learning and community engagement.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,

      offset: 40,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
    });

    AOS.refresh();
  }, []);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionHeight = rect.height;

      const scrollPassed = windowHeight - rect.top;
      const fasterScrollDistance = (sectionHeight + windowHeight) * 0.75;

      const p = Math.min(1, Math.max(0, scrollPassed / fasterScrollDistance));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="Education"
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden pb-16"
    >
      {/* Header */}
      <div className="text-center mb-8 px-[5%]">
        <h2
          data-aos="fade-right"
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          Education
        </h2>

        <p
          className="mt-2 text-gray-400 max-w-1xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Building a strong foundation in technology to deliver modern and
          impactful digital solutions.
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      {/* Journey */}
      <section
        ref={sectionRef}
        className="min-h-screen pb-4 pt-10 flex flex-col items-center justify-start w-full" // Tambahkan w-full
      >
        <div className="relative w-full max-w-6xl px-6">
          <div
            className="absolute 
              left-6 md:left-1/2 md:-translate-x-1/2 
              top-0 w-1 h-full bg-gray-700/50 rounded-full z-0"
          />

          <div
            className="absolute 
            left-[1.4rem] md:left-1/2 md:-translate-x-1/2
            top-0 w-1 bg-gradient-to-b 
            from-purple-600 to-pink-500 rounded-full
            will-change-transform z-0"
            style={{ height: `${progress * 100}%` }}
          />

          {educData.map((item, index) => {
            const isLeft = index % 2 === 0;

            // --- PERBAIKAN 2: Logika Dot yang Paling Aman ---
            const totalItems = educData.length;

            // Posisi dot dibagi berdasarkan jumlah item
            const dotPositionBase = (index + 1) / totalItems;

            // Batasi posisi aktivasi di 90% dari batas maksimal
            // Dot paling bawah (index 2) akan aktif pada 0.9 * 1.0 = 0.9
            const dotPosition = dotPositionBase * 0.8;

            // apakah garis sudah melewati dot?
            const active = progress >= dotPosition;
            // ---------------------------------------------

            return (
              <div key={index} className="relative w-full min-h-[200px] py-7">
                {/* DOT */}
                <div
                  className="
                  absolute
                    left-0 -translate-x-1/2 
                    md:left-1/2 md:-translate-x-1/2  // DESKTOP
                    w-6 h-6 bg-purple-500 rounded-full border-4 border-black shadow-lg
                    transition-all duration-400 z-10
                  "
                  style={{
                    top: "20%",
                    opacity: active ? 1 : 0,
                    scale: active ? 1 : 0.3,
                  }}
                ></div>

                {/* Card */}
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className={`w-full md:w-1/2 px-6 ${
                    isLeft ? "md:pr-16" : "md:pl-16 md:ml-auto"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white">
                    {item.pendidikan}
                  </h3>
                  <p className="text-gray-400">{item.place}</p>
                  <p className="mt-1 text-purple-300 text-sm tracking-widest">
                    {item.tahun}
                  </p>
                  <p className="text-justify break-words whitespace-normal mt-4 text-gray-300">
                    {item.description}
                    {/* <ScrambledText
                      className="scrambled-text-demo"
                      radius={100}
                      duration={1.2}
                      speed={0.5}
                      scrambleChars={":."}
                    >
                      {item.description}
                    </ScrambledText> */}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
