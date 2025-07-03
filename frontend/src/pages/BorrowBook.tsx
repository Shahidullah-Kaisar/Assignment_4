// src/pages/BorrowBook.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import {useGetBookByIdQuery,useBorrowBookMutation } from "../redux/api/baseApi";

const BorrowBook: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useGetBookByIdQuery(bookId);
  
  const book = data?.data ?? [];
  console.log("borrow page", book)

  const [borrowBook] = useBorrowBookMutation();

  const [quantity, setQuantity] = useState<number>(1);
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookId || !dueDate) return;

    if (quantity > book?.copies) {
      alert("Cannot borrow more than available copies.");
      return;
    }

    try {
      await borrowBook({ book: bookId, quantity, dueDate }).unwrap();
      navigate("/borrow-summary");
    } catch (error) {
      console.error("Borrow failed:", error);
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading book...</p>;
  if (!book) return <p className="text-center text-red-500 py-10">Book not found.</p>;

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        📕 Borrow: {book.title}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 text-gray-700">Quantity</label>
          <input
            type="number"
            min={1}
            max={book.copies}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Borrow Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowBook;
