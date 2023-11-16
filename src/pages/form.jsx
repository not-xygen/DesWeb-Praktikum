import { useState } from "react";

export default function BookForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [year, setYear] = useState(null);
  const [author, setAuthor] = useState(null);
  const [summary, setSummary] = useState(null);
  const [publisher, setPublisher] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [readPage, setReadPage] = useState(null);
  const [reading, setReading] = useState(false);

  const req = {
    name: name,
    year: year,
    author: author,
    summary: summary,
    publisher: publisher,
    pageCount: pageCount,
    readPage: readPage,
    reading: reading,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  };

  const handleCreateBook = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:9000/books", options);
    if (response.ok) {
      setLoading(false);
    } else {
      setError("Error Creating Data");
      setLoading(false);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error Creating data Data</p>;

  return (
    <div>
      <form onSubmit={handleCreateBook} className="flex flex-col">
        <label htmlFor="name">Nama</label>
        <input
          name="name"
          type="text"
          className="border"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="year">Year</label>
        <input
          name="year"
          type="number"
          className="border"
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          name="author"
          type="text"
          className="border"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="summary">Summary</label>
        <textarea
          name="summary"
          className="border"
          onChange={(e) => setSummary(e.target.value)}
        />
        <label htmlFor="publisher">Publisher</label>
        <input
          name="publisher"
          type="text"
          className="border"
          onChange={(e) => setPublisher(e.target.value)}
        />
        <label htmlFor="pageCount">Page Count</label>
        <input
          name="pageCount"
          type="number"
          className="border"
          onChange={(e) => setPageCount(e.target.value)}
        />
        <label htmlFor="readPage">Read Page</label>
        <input
          name="readPage"
          type="number"
          className="border"
          onChange={(e) => setReadPage(e.target.value)}
        />
        <label htmlFor="reading">Reading</label>
        <input
          name="reading"
          type="text"
          className="border"
          onChange={(e) => setReading(e.target.value)}
        />
        <input name="Submit" type="submit" />
      </form>
    </div>
  );
}
