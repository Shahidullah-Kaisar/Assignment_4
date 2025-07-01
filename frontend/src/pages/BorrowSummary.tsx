import type { IBorrowSummary } from "../interfaces/interfaces";

const fakeBorrowSummary: IBorrowSummary[] = [
  {
    id: "1",
    title: "The Alchemist",
    isbn: "9780061122415",
    totalBorrowed: 3,
  },
  {
    id: "2",
    title: "Clean Code",
    isbn: "9780132350884",
    totalBorrowed: 5,
  },
  {
    id: "3",
    title: "Clean Code",
    isbn: "9780132350884",
    totalBorrowed: 5,
  },
  {
    id: "4",
    title: "Clean Code",
    isbn: "9780132350884",
    totalBorrowed: 5,
  },
];

const BorrowSummary = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-green-600 mb-6">📊 Borrow Summary</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Book Title</th>
              <th className="py-2 px-4 text-left">ISBN</th>
              <th className="py-2 px-4 text-center">Total Quantity Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {fakeBorrowSummary.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-200 duration-300">
                <td className="py-4 px-4">{item.title}</td>
                <td className="py-4 px-4">{item.isbn}</td>
                <td className="py-4 px-4 text-center font-semibold text-gray-700">
                  {item.totalBorrowed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {fakeBorrowSummary.length === 0 && (
          <p className="text-center text-gray-500 py-4">No borrow data available.</p>
        )}
      </div>
    </div>
  );
};

export default BorrowSummary;
