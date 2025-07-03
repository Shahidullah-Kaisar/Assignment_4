import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../redux/api/baseApi";
import type { IBookForm } from "../interfaces/interfaces";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetBookByIdQuery(id);

  const [updateBook] = useUpdateBookMutation();

  const [formData, setFormData] = useState<IBookForm>({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    description: "",
    copies: 1,
    available: true,
  });

  useEffect(() => {
    if (data?.data) {
      setFormData(data.data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const target = e.target;
    const { name, value, type } = target;
    console.log("input form data", { name, value, type });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBook({ id, updatedData: formData }).unwrap();
      alert("Book updated successfully ✅");
      navigate("/books");
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">Edit Book</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow-2xl"
      >
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
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
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
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
            className="w-full border px-3 py-2 rounded"
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

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
