import { Link, useParams } from "react-router";
import { useGetBookByIdQuery } from "../redux/api/baseApi";
import { FaBookOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const BookDetails = () => {

  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetBookByIdQuery(id);
  
  const book = data?.data;

  if (isError) {
    return (
      <p className="text-red-500 text-center mt-50">Failed to load tasks.</p>
    );
  }

  if (isLoading) {
    return <p className="text-center mt-50 text-3xl font-bold">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gradient-to-br from-gray-50 to-green-50 rounded-xl shadow-xl">

      {/* Book Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-green-200 text-green-900 font-semibold text-sm tracking-wide">
          <FaBookOpen />
          <span>{book.genre}</span>
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight drop-shadow-md">
          {book.title}
        </h1>
        <p className="mt-2 text-lg text-gray-700 italic">by {book.author}</p>
      </div>

      {/* Book Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6 border-r border-gray-200 pr-6">
          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide">
              Author
            </h3>
            <p className="mt-1 text-lg text-gray-900 font-medium">
              {book.author}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide">
              Genre
            </h3>
            <p className="mt-1 text-lg text-gray-900 font-medium">
              {book.genre}
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide">
              ISBN
            </h3>
            <p className="mt-1 text-lg text-gray-900 font-medium">
              {book.isbn}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 pl-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide flex-grow">
              Availability
            </h3>
            {book.available ? (
              <FaCheckCircle className="text-green-600 text-xl" />
            ) : (
              <FaTimesCircle className="text-red-500 text-xl" />
            )}
          </div>
          <p
            className={`text-lg font-semibold ${
              book.available ? "text-green-700" : "text-red-600"
            }`}
          >
            {book.available ? "Available" : "Checked Out"} ({book.copies}{" "}
            {book.copies === 1 ? "copy" : "copies"})
          </p>

          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 tracking-wide">
              Description
            </h3>
            <p className="mt-2 text-gray-800 leading-relaxed italic max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-50">
              {book.description || "No description available."}
            </p>
          </div>
        </div>
      </div>

      {/* Action Button - Floating style */}
      <div className="flex justify-center items-center">
        <Link to={`/borrow/${id}`}>
          <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform mt-4">
            <FaBookOpen className="text-xl" />
            <span>Borrow Book</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
