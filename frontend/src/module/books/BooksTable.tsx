import type { IBook } from "../../interfaces/interfaces";
import { useDeleteBookMutation } from "../../redux/api/baseApi";
import { useNavigate } from "react-router";

interface BooksTableProps {
  book: IBook;
}

const BooksTable = ({ book }: BooksTableProps) => {

  const navigate = useNavigate();

  const  [ deleteBook ] = useDeleteBookMutation();

  const handleDelete = async() => {   
  const isConfirmed = window.confirm("Are you sure you want to delete this task?");
    if (!isConfirmed) return;
    
    try {
      await deleteBook(book._id)
      alert("Book deleted successfully ✅");
    } catch (error) {
      console.error("Delete failed", error)
    }
  }

  const handleEdit = () => {
    navigate(`/edit-book/${book._id}`);
  };

  const handleDetails = () => {
    navigate(`/books/${book._id}`);
  };

  const handleBorrow = () => {
    navigate(`/borrow/${book._id}`);
  };

  return (
    <tr className="border-t border-gray-300 hover:bg-gray-200 duration-300">

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
        <button onClick={handleDetails} className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">See Details</button>
        <button onClick={handleEdit} className="px-2 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Edit</button>
        <button
          onClick={handleBorrow}
          className={`px-2 py-1 text-sm rounded ${
            book.available
              ? "bg-yellow-500 text-white hover:bg-yellow-600"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
          disabled={!book.available}
        >
          Borrow
        </button>

        <button onClick={handleDelete} className="px-2 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">Delete</button>
      </td>

    </tr>
  );
};

export default BooksTable;
