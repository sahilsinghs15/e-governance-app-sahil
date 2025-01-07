export default function Department() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Page Header */}
      <header className="w-full bg-gradient-to-r from-orange-500 to-red-600 p-8 text-center">
        <h1 className="text-4xl font-extrabold capitalize tracking-tighter md:text-5xl">
          Department
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Explore our specialized departments and their unique offerings
        </p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl px-6 py-10">
        {/* Department Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-600 pb-2">
            Overview
          </h2>
          <p className="text-gray-400">
            Our college is home to multiple departments that focus on providing
            quality education, cutting-edge research opportunities, and
            practical training. Each department is designed to equip students
            with specialized knowledge and skills to excel in their careers.
          </p>
        </section>

        {/* Departments List Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-600 pb-2">
            Departments List
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Department 1 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold text-orange-500">
                Information Technology
              </h3>
              <div className="mt-4 text-sm text-gray-400">
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Practical applications of computers and software to solve
                    business problems.
                  </li>
                  <li>Infrastructure, management, and security of networks.</li>
                  <li>
                    Areas covered: networking, cybersecurity, and database
                    administration.
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-lg text-gray-300 font-medium">
                <span className="text-orange-500">Course Fee: </span>35,000 per
                semester
              </p>
            </div>

            {/* Department 2 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold text-orange-500">
                Computer Science
              </h3>
              <div className="mt-4 text-sm text-gray-400">
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Theoretical foundations of computing and efficient
                    algorithms.
                  </li>
                  <li>
                    Mathematical and logical principles underlying computer
                    systems.
                  </li>
                  <li>
                    Areas covered: programming, AI, computer graphics, and
                    software engineering.
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-lg text-gray-300 font-medium">
                <span className="text-orange-500">Course Fee: </span>40,000 per
                semester
              </p>
            </div>

            {/* Department 3 */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold text-orange-500">
                Data Science
              </h3>
              <div className="mt-4 text-sm text-gray-400">
                <ul className="list-disc ml-4 space-y-2">
                  <li>
                    Uses algorithms and systems to extract knowledge from data.
                  </li>
                  <li>
                    Focuses on data cleaning, analysis, and visualization for
                    decision-making.
                  </li>
                  <li>
                    Areas covered: machine learning, statistics, and big data
                    analytics.
                  </li>
                </ul>
              </div>
              <p className="mt-4 text-lg text-gray-300 font-medium">
                <span className="text-orange-500">Course Fee: </span>45,000 per
                semester
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-600 pb-2">
            Faculty
          </h2>
          <p className="text-gray-400">
            Our faculty comprises experienced professors and researchers who are
            dedicated to guiding students in achieving their academic and career
            goals. With expertise in diverse fields, they bring cutting-edge
            knowledge and practical insights to the classroom.
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-orange-600 pb-2">
            Contact the Department
          </h2>
          <p className="text-gray-400 mb-6">
            For any queries about our departments, feel free to reach out to us
            via email or phone. We're here to assist you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-xl font-bold text-orange-500">Email</h3>
              <p className="mt-2 text-sm text-gray-400">
                department@college.edu
              </p>
            </div>

            {/* Phone */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-xl font-bold text-orange-500">Phone</h3>
              <p className="mt-2 text-sm text-gray-400">+1-234-567-890</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
