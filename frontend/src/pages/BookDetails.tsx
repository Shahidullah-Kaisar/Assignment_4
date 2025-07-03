import { useParams } from "react-router";
import { useGetBookByIdQuery } from "../redux/api/baseApi";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetBookByIdQuery(id);
  const book = data?.data ?? [];

  console.log("Details page", book)

  if (isLoading) {
    return <p className="text-center py-10">Loading book details...</p>;
  }

  if (error || !book) {
    return (
      <p className="text-center py-10 text-red-500">
        Book not found or something went wrong.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-6">📖 {book.title}</h1>

      <div className="bg-white p-6 rounded shadow-2xl space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Author:</h2>
          <p className="text-gray-800">{book.author}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Genre:</h2>
          <p className="text-gray-800">{book.genre}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">ISBN:</h2>
          <p className="text-gray-800">{book.isbn}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Description:</h2>
          <p className="text-gray-800">{book.description || "No description."}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Copies:</h2>
          <p className="text-gray-800">{book.copies}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Available:</h2>
          <p
            className={`font-medium ${
              book.available ? "text-green-600" : "text-red-500"
            }`}
          >
            {book.available ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
