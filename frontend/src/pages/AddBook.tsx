import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { IBookForm } from "../interfaces/interfaces";

const AddBook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IBookForm>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;

    const newValue = type === "checkbox" ? (target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    navigate("/books");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">
        Add New Book
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Author</label>
          <input
            type="text"
            name="author"
            required
            value={formData.author}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            required
            value={formData.genre}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">ISBN</label>
          <input
            type="text"
            name="isbn"
            required
            value={formData.isbn}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Copies</label>
          <input
            type="number"
            name="copies"
            min={1}
            required
            value={formData.copies}
            onChange={handleChange}
            className="w-full border border-green-600 px-3 py-2 rounded outline-none focus:border-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-gray-700">Available</label>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
