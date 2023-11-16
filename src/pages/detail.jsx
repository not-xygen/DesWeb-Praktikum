import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailBook() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      const response = await fetch(`http://localhost:9000/books/${id}`, {
        method: "GET",
      });
      const actualData = await response.json();
      if (response.ok) {
        setData(actualData.data.book);
        setLoading(false);
      } else {
        setError("Error Fetching Data");
        setLoading(false);
      }
      setLoading(false);
    };

    getBook();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Retrieving Data</p>;

  console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.publisher}</h1>
      <h1>{data.summary}</h1>
    </div>
  );
}
