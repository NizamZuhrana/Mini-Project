import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import useListUsers from "../../hooks/listUser";

const ListUsers = () => {
  const { users, pagination, getListUsers, handleNextPage, handlePreviousPage } = useListUsers();

  useEffect(() => {
    getListUsers();
  }, [pagination.page]);

  return (
    <div className="min-h-screen font-sans text-gray-800  bg-[#8EACCD]">
      <Navbar />
      <div className="container py-10 mx-auto mt-[60px] ">
        <h1 className="mb-6 text-4xl font-semibold text-center text-white">
          List of Users
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          {users.map((user) => (
            <div
              key={user.id}
              className="overflow-hidden transition-shadow duration-200 bg-[#D2E0FB] rounded-lg shadow-md hover:shadow-lg"
            >
              <img
                className="object-cover w-full h-48"
                src={user.avatar}
                alt={user.name}
              />
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-gray-600">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="mb-4 text-gray-600">{user.email}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Contact Me
                  </a>
                  <Link to={`/detail/${user.id}`}>
                    <button className="px-4 py-2 text-white transition duration-300 bg-yellow-600 rounded-lg hover:bg-yellow-700">
                      Detail User
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={pagination.page === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              pagination.page === 1
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            } transition duration-300`}
          >
            <FaCircleArrowLeft size={20} />
          </button>
          <span className="text-lg font-medium">
            Page {pagination.page} of {pagination.total_pages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={pagination.page === pagination.total_pages}
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              pagination.page === pagination.total_pages
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            } transition duration-300`}
          >
            <FaCircleArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
