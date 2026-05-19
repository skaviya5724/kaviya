"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Python",
    "React",
    "Cloud Computing",
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">

        {/* Header */}
        <div className="bg-slate-900 text-white p-10">
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Profile Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/pic.jpeg"
              alt="Kaviya"
              className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-2xl"
            />

            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black">
                Kaviya K
              </h1>

              <p className="text-xl mt-3 text-gray-300">
                Diploma in Computer Engineering — 3rd Year
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-3 text-sm md:text-base text-gray-300">
                <p>📍 Namakkal, Tamil Nadu, India</p>
                <p>📧 s.kaviya5724@gmail.com</p>
                <p>🏫 Paavai Polytechnic College</p>
                <p>📞 6369955734</p>
              </div>
            </div>

          </div>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3">

          {/* Sidebar */}
          <aside className="bg-gray-50 p-8 border-r">

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Education
              </h2>

              <div className="space-y-4 text-gray-700 leading-7">
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Diploma in Computer Engineering
                  </h3>

                  <p>Paavai Polytechnic College</p>

                  <p>Namakkal, Tamil Nadu - 637201</p>

                  <p className="mt-2">
                    Currently Pursuing 3rd Year
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Achievement
              </h2>

              <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-lg">
                <h3 className="text-lg font-bold">
                  Futures of AI Hackathon
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  Secured 3rd Place in the Futures of AI Hackathon
                  by presenting innovative ideas and technical
                  solutions.
                </p>
              </div>
            </div>

          </aside>

          {/* Main Content */}
          <section className="md:col-span-2 p-8">

            {/* About */}
            <div>
              <h2 className="text-3xl font-black text-black mb-6">
                About Me
              </h2>

              <p className="text-gray-700 leading-8 text-lg">
                Motivated and enthusiastic Computer Engineering student
                with strong interest in web development and software
                technologies. Passionate about building responsive,
                modern, and user-friendly applications using frontend
                and backend technologies. Quick learner with excellent
                teamwork and problem-solving skills.
              </p>
            </div>

            {/* Project */}
            <section className="mt-12">
              <h2 className="text-3xl font-black text-black mb-6">
                Project
              </h2>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">

                <h3 className="text-2xl font-bold text-black">
                  Online Car Rental System
                </h3>

                <ul className="list-disc ml-6 mt-5 space-y-4 text-gray-700 leading-8">

                  <li>
                    Developed a complete Online Car Rental System
                    for managing vehicle rentals through a digital platform.
                  </li>

                  <li>
                    Created features for customer registration,
                    login authentication, vehicle listing,
                    and online booking management.
                  </li>

                  <li>
                    Implemented rental status tracking and customer
                    support functionalities for better user experience.
                  </li>

                  <li>
                    Designed an admin dashboard to manage car details,
                    booking records, and customer information efficiently.
                  </li>

                  <li>
                    Used HTML, CSS, JavaScript, Python,
                    and Next.js technologies during development.
                  </li>

                </ul>

              </div>
            </section>

            {/* Career Objective */}
            <section className="mt-12">
              <h2 className="text-3xl font-black text-black mb-6">
                Career Objective
              </h2>

              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700 leading-8 text-lg">
                  Seeking an opportunity to enhance my technical
                  knowledge and practical skills in software
                  development and web technologies while contributing
                  effectively to organizational growth.
                </p>
              </div>
            </section>

          </section>
        </div>
      </div>
    </main>
  );
}
