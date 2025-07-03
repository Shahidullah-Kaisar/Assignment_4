import { useGetBorrowSummaryQuery } from "../redux/api/baseApi";
import type { IBorrowSummary } from "../interfaces/interfaces";

const BorrowSummary = () => {

  const { data, isLoading, isError } = useGetBorrowSummaryQuery();

    const books = data?.data ?? [];
    console.log("Data From BorrowSummary.tsx", books)

  if (isLoading) {
    return <p className="text-center py-10">Loading summary...</p>;
  }

  if (isError || !data) {
    return ( <p className="text-center text-red-500 py-10">Failed to load summary.</p> );
  }

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
            {books.map((item : IBorrowSummary, idx: number) => (
              <tr key={idx} className="border-t hover:bg-gray-200 duration-300">
                <td className="py-4 px-4">{item.book.title}</td>
                <td className="py-4 px-4">{item.book.isbn}</td>
                <td className="py-4 px-4 text-center font-semibold text-gray-700">{item.totalQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {books.length === 0 && (
          <p className="text-center text-gray-500 py-4">No borrow data available.</p>
        )}
      </div>
    </div>
  );
};

export default BorrowSummary;
