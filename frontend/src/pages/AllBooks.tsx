import { useGetBooksQuery } from "../redux/api/baseApi";
import BooksTable from "../module/books/BooksTable";
import type { IBook } from "../interfaces/interfaces";
import { Link } from "react-router";

const AllBooks = () => {
  
  const { data, isLoading, isError } = useGetBooksQuery();
  const books = data?.data ?? [];

  if (isError) {
    return <p className="text-red-500 text-center mt-50">Failed to load tasks.</p>;
  }

  if (isLoading) {
    return <p className="text-center mt-50 text-3xl font-bold">Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-green-600 mb-6">📚 All Books</h1>
        <Link to='/create-book' className="text-xl font-bold text-white mb-6 bg-amber-600 px-4 py-2 rounded-lg hover:bg-amber-700 duration-300">Add New Book</Link>
      </div>
      

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Title</th>
              <th className="py-2 px-4 text-left">Author</th>
              <th className="py-2 px-4 text-left">Genre</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-center">Copies</th>
              <th className="py-2 px-4 text-center">Available</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>

            <tbody>
              {books.map((book: IBook) => (
              <BooksTable key={book._id} book={book} />
              ))}
            </tbody>
            
          
        </table>

        {books.length === 0 && (
          <p className="text-center text-gray-500 py-4">No books available.</p>
        )}

      </div>
    </div>
  );
};

export default AllBooks;
