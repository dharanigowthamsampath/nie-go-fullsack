import Link from "next/link";

export default function Syllabus() {
  const syllabus = [
    {
      day: "Day 1",
      topics: "Bootstrap",
      link: "/Bootstrap/b_index",
    },
    {
      day: "Day 2",
      topics: "React Basic with Bootstrap",
      link: "/React/r_index",
    },
    {
      day: "Day 3",
      topics: "Go Basics / CRUD Operations",
      link: "/Go/g_index",
    },
    {
      day: "Day 4",
      topics: "MongoDB / Go APIs / React connection",
      link: "/MongoDB/m_index",
    },
    { day: "Day 5", topics: "Students Project", link: "" }, // No link for project day
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Go Full Stack Course Syllabus</h1>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 text-left">Day</th>
              <th className="p-3 text-left">Topics</th>
              <th className="p-3 text-left">Link</th>
            </tr>
          </thead>
          <tbody>
            {syllabus.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.day}</td>
                <td className="p-3">{item.topics}</td>
                <td className="p-3">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="text-blue-500 hover:underline"
                    >
                      Visit
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
