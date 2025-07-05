import React, { useState } from "react";
import { useNavigate } from "react-router";
import type { IBookForm } from "../interfaces/interfaces";
import { useCreateBookMutation } from "../redux/api/baseApi";
import { toast } from "react-toastify";

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

  const [createBook, { isLoading }] = useCreateBookMutation();

  if (isLoading) {
    return <p className="text-center mt-50 text-3xl font-bold">Loading...</p>;
  }

  const handleChange = ( e: React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement > ) => {

    const target = e.target;
    const { name, value, type } = target;

    let newValue: string | number | boolean = value;

    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    } else if (name === "copies") {
      newValue = Number(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async ( e: React.FormEvent ) => {
    e.preventDefault();

    try {
      const res = await createBook(formData).unwrap();
      
      if (res.success) {
        toast.success(res.message);
        navigate("/books");
      }

    } catch (error: any) {
      console.log(error.data);

      toast.error(
        ( () => {
          try {
            return JSON.parse(error.data.message)[0].message;
          } catch {
            return error.data.message;
          }
        })
      ); 
      
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-700 mb-2">Add New Book</h1>
        <p className="text-gray-600">
          Fill in the details to add a new book to the collection
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Author */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="author"
              required
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Genre */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Genre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="genre"
              required
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* ISBN */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              ISBN <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="isbn"
              required
              value={formData.isbn}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Copies */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Copies <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="copies"
              min={1}
              required
              value={formData.copies}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
              className="w-5 h-5 text-green-600 rounded focus:ring-green-500 border-gray-300"
            />
            <label className="text-sm font-medium text-gray-700">
              Available for checkout
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Adding Book..." : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
