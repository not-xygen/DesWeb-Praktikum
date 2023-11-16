import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Books() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:9000/books", {
        method: "GET",
      });
      const actualData = await response.json();
      if (response.ok) {
        setData(actualData.data);
        setLoading(false);
      } else {
        setError("Error Fetching Data");
        setLoading(false);
      }
      setLoading(false);
    };

    getBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Retrieving Data</p>;

  return (
    <div className="flex flex-col">
      {data.books.map((item) => {
        return (
          <Link key={item.id} to={`/books/${item.id}`}>
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
