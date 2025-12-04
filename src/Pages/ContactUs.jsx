/* eslint-disable no-unused-vars */
import { Sparkles } from "lucide-react";
import SocialLinks from "../components/SocialLinks";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
export default function ContactUs() {
  const contactData = [
    {
      id: "1",
      icon: Mail,
      title: "Email",
      text: "amuhammadthoriq220803@gmail.com",
    },
    {
      id: "2",
      icon: Phone,
      title: "Phone",
      text: "(+62) 895 3643 00163",
    },
    {
      id: "2",
      icon: MapPin,
      title: "Address",
      text: "Jl. Gunuk II, Jakarta Selatan, 12510",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData();
    data.append("access_key", "bcf99b4c-34b3-422f-91b5-efc161af9247");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);

        // Reset status setelah 2 detik
        setTimeout(() => {
          setStatus("");
        }, 2000);

        // Hide toast setelah 3 detik
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setStatus("error");
        // Reset error status juga
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };
  return (
    <>
      <div id="ContactUs" className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Contact Me
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Delivering digital solutions that are fast, modern, and user-focused
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>
      <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-16 w-full px-0 md:px-0">
          {/* KIRI — Kotak Besar (Form) */}
          <div className="flex flex-col gap-6 w-full max-w-xl mx-auto justify-center">
            <div className="relative w-full max-w-4xl pl-10 pt-12 z-10">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-900 to-transparent opacity-50 rounded-2xl"
              ></div>

              <div className="curved-shape hidden sm:block"></div>

              <div data-aos="fade-left" className="relative z-20">
                <h3 className="text-5xl md:text-5xl font-extrabold text-gray-300 leading-tight mb-4">
                  Let's chat.
                </h3>
                <h4 className=" w-full text-5xl md:text-3xl font-extrabold text-gray-300 leading-tight mb-8">
                  Tell us about your project.
                </h4>
                <p className="text-gray-400 text-lg mb-12">
                  Let's create something together
                </p>

                <div
                  data-aos="fade-up"
                  className="hidden lg:flex pr-8 group items-center hover:p-4 hover:bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-lg shadow-2xl rounded-2xl hover:border border-white/20 w-fit transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.05]"
                >
                  <div className="relative bg-gradient-to-br from-purple-500 to-blue-600 p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <div className="absolute inset-0 bg-purple-500/30 rounded-2xl hover:animate-ping"></div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round" // Corrected
                        strokeLinejoin="round" // Corrected
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1.2 12H4.2A2.2 2.2 0 012 17.8V6.2A2.2 2.2 0 014.2 4h15.6A2.2 2.2 0 0122 6.2v11.6A2.2 2.2 0 0119.8 20z"
                      ></path>
                    </svg>
                  </div>

                  <div className="overflow-hidden max-w-0 group-hover:max-w-[400px] transition-all duration-500 ml-0 group-hover:ml-4 opacity-0 group-hover:opacity-100">
                    <p className="text-lg font-semibold text-white/90 mb-1">
                      Mail us at
                    </p>
                    <a
                      href="mailto:amuhammadthoriq220803@gmail.com"
                      className="text-lg font-semibold text-white whitespace-nowrap inline-block
                              hover:text-transparent hover:bg-clip-text 
                              hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7]"
                    >
                      amuhammadthoriq220803@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showToast && (
            <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-lg">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Success!</p>
                  <p className="text-sm opacity-90">
                    Message sent successfully
                  </p>
                </div>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mx-auto md:w-[60%] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 space-y-5 backdrop-blur-xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {/* Form fields sama seperti sebelumnya */}
            <h2 data-aos="fade-left" className="text-white text-2xl font-bold">
              Send us a message
            </h2>

            <div>
              <label
                data-aos="fade-right"
                className="block text-sm font-medium text-white mb-2"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                maxLength="50"
                placeholder="Enter your name"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                required
                data-aos="fade-left"
              />
            </div>

            <div>
              <label
                data-aos="fade-right"
                className="block text-sm font-medium text-white mb-2"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
                className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                required
                data-aos="fade-left"
              />
            </div>

            <div>
              <label
                data-aos="fade-right"
                className="block text-sm font-medium text-white mb-2"
              >
                Tell us more about your project{" "}
                <span className="text-red-400">*</span>
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Type your message*"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                required
                data-aos="fade-left"
              />
            </div>

            <button
              data-aos="fade-right"
              type="submit"
              disabled={status === "sending"}
              className="relative w-full h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : status === "success" ? (
                "✓ Sent!"
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
        </div>
      </div>
    </>
  );
}
