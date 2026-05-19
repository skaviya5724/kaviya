"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  const skills = [
    "HTML",
    "CSS",
    "JAVA",
    "NEXT JS",
    "PYTHON",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <div className="flex flex-col md:flex-row items-center gap-10">

            <motion.img
              whileHover={{ scale: 1.08 }}
              src="/pic.jpeg"
              alt="profile"
              className="w-44 h-44 rounded-full border-4 border-pink-500 shadow-2xl object-cover"
            />

            <div className="text-center md:text-left">

              <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Kaviya K
              </h1>

              <p className="text-2xl mt-4 text-gray-300">
                Diploma in Computer Engineering - 3rd Year
              </p>

              <p className="mt-3 text-lg text-gray-400">
                Paavai Polytechnic College - Namakkal, Tamilnadu - 637201
              </p>

              <div className="mt-6 space-y-2 text-gray-300 text-lg">
                <p>📞 6369955734</p>
                <p>✉️ s.kaviya5724@gmail.com</p>
                <p>📍 Namakkal, Tamilnadu</p>
              </div>

            </div>

          </div>

        </motion.section>

        {/* About */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            About Me
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-9">
            Motivated and enthusiastic Computer Engineering student
            with strong interest in web development and software
            technologies. Passionate about creating modern,
            responsive, and user-friendly applications using
            frontend and backend technologies. Quick learner with
            good problem-solving skills and teamwork abilities.
          </p>

        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-5 rounded-2xl text-center text-lg font-semibold shadow-xl"
              >
                {skill}
              </motion.div>
            ))}

          </div>

        </motion.section>

        {/* Project */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Project
          </h2>

          <div className="mt-6">

            <h3 className="text-2xl font-semibold text-white">
              Online Car Rental System
            </h3>

            <p className="mt-5 text-lg text-gray-300 leading-9">
              Developed an Online Car Rental System project to simplify
              the process of booking rental vehicles through a digital
              platform. The application allows users to browse available
              cars, check rental prices, and reserve vehicles online.
            </p>

            <p className="mt-5 text-lg text-gray-300 leading-9">
              The project includes features such as customer registration,
              login authentication, vehicle listing, booking management,
              rental status tracking, and contact support. Admin users can
              manage car details, customer records, and booking information
              efficiently through the system dashboard.
            </p>

            <p className="mt-5 text-lg text-gray-300 leading-9">
              The project was designed with responsive UI principles to
              ensure smooth usage across desktop and mobile devices. It
              improved understanding of frontend development, database
              handling, and real-time user interaction in web applications.
            </p>

          </div>

        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Education
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">
            <p className="text-2xl font-semibold text-white">
              Diploma in Computer Engineering
            </p>

            <p className="mt-2">
              Paavai Polytechnic College
            </p>

            <p>
              Namakkal, Tamilnadu - 637201
            </p>

            <p className="mt-2">
              Currently Pursuing 3rd Year
            </p>
          </div>

        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl"
        >

          <h2 className="text-4xl font-bold text-pink-400">
            Achievements
          </h2>

          <div className="mt-6 text-lg text-gray-300 leading-9">

            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl shadow-xl">

              <h3 className="text-2xl font-semibold text-white">
                AI Futures Hackathon
              </h3>

              <p className="mt-3">
                Participated in the AI Futures Hackathon and secured
                Third Place. Successfully presented innovative ideas
                and received certification for outstanding performance
                in the competition.
              </p>

            </div>

          </div>

        </motion.section>

      </div>

    </main>
  );
}
