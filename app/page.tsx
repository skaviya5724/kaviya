export default function ResumePage() {
  const skills = [
    "Next.js",
    "HTML",
    " CSS",
    "JAVA",
    "NEXT JS",
    "PYTHON",
  ];

  const projects = [
    "Online Rental Car Booking System",
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-8">
          <h1 className="text-4xl font-bold">deepika</h1>

          <p className="text-lg mt-2 text-gray-300">
            Student
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-2 text-sm">
            <p>📍 namakal, Tamil Nadu, India</p>
            <p>📧 k kaviya</p>
            <p>📞 +91 6369955724</p>
          </div>
        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3">
          {/* Left Sidebar */}
          <aside className="bg-gray-50 p-6 border-r">
            {/* Skills */}
            <section>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Skills
              </h2>

              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Education
              </h2>

              <h3 className="font
              
              -semibold">Diploma</h3>
              <p className="text-sm text-gray-600">
                Computer Science / Information Technology
              </p>
            </section>

            {/* Languages */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                Languages
              </h2>

              <ul className="space-y-2 text-sm">
                <li>✅ English</li>
                <li>✅ Tamil</li>
              </ul>
            </section>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-2 p-8">
            {/* Profile */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Profile
              </h2>

              <p className="text-gray-700 leading-7">
                Passionate student and aspiring full-stack developer with knowledge in
                Next.js, React, Tailwind CSS, and web application development.
                Interested in building modern websites, learning new technologies,
                and developing real-world software projects.
              </p>
            </section>

            {/* Experience */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                Experience
              </h2>

              <div className="space-y-8">


                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-semibold">
                      Next JS Developer
                    </h3>
                  </div>

                  <p className="text-blue-600 font-medium">
                    Intern
                  </p>

                  <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
                    <li>
                      Built a simple e-commerce website using Next.js and Tailwind CSS.
                    </li>

                    <li>
                      Developed product listing, cart, and responsive user interface features.
                    </li>

                    <li>
                      Learned API integration and modern frontend development concepts.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {projects.map((project) => (
                  <div
                    key={project}
                    className="border rounded-xl p-5 hover:shadow-lg transition bg-white"
                  >
                    <h3 className="font-semibold text-lg">{project}</h3>

                    <p className="text-sm text-gray-600 mt-2">
                      Developed using Next.js, TypeScript, Tailwind CSS, APIs,
                      and cloud infrastructure.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
