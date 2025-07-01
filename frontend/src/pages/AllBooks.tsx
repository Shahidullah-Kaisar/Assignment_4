import type { IBook } from "../interfaces/interfaces";


const fakeBooks: IBook[] = [
  {
    id: "1",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    isbn: "9780061122415",
    copies: 5,
    available: true,
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 0,
    available: false,
  },
  {
    id: "3",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    isbn: "9780061122415",
    copies: 5,
    available: true,
  },
  {
    id: "4",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 0,
    available: false,
  },
  {
    id: "5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    isbn: "9780061122415",
    copies: 5,
    available: true,
  },
  {
    id: "6",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    isbn: "9780132350884",
    copies: 0,
    available: false,
  },
];

const AllBooks = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <h1 className="text-2xl font-bold text-green-600 mb-6">📚 All Books</h1>

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
            {fakeBooks.map((book) => (
              <tr key={book.id} className="border-t border-gray-300 hover:bg-gray-300 duration-300">
                <td className="py-4 px-4">{book.title}</td>
                <td className="py-4 px-4">{book.author}</td>
                <td className="py-4 px-4">{book.genre}</td>
                <td className="py-4 px-4">{book.isbn}</td>
                <td className="py-4 px-4 text-center">{book.copies}</td>
                <td className="py-4 px-4 text-center">

                  {book.available ? (
                    <span className="text-green-600 font-medium">Yes</span>
                  ) : (
                    <span className="text-red-500 font-medium">No</span>
                  )}

                </td>

                <td className="py-2 px-2 text-center space-x-2">

                  <button className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Edit
                  </button>

                  <button className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
                    Delete
                  </button>

                  <button
                    className={`px-2 py-1 text-sm rounded ${
                      book.available
                        ? "bg-yellow-500 text-white hover:bg-yellow-600"
                        : "bg-gray-400 text-white cursor-not-allowed"
                    }`}
                    disabled={!book.available}
                  >
                    Borrow
                  </button>

                </td>

              </tr>

            ))}
          </tbody>

        </table>

        {fakeBooks.length === 0 && (
          <p className="text-center text-gray-500 py-4">No books available.</p>
        )}
      </div>

    </div>
  );
};

export default AllBooks;
