import { useState } from "react";
import { Button } from "../components/button";
import { Link } from "react-router-dom";

export default function About() {
  const [total, setTotal] = useState(0);

  // handleClick adalah fungsi yang akan dijalankan ketika tombol di komponen MyButton diklik.
  function handleClick() {
    setTotal(total + 1); // Menggunakan useState untuk mengubah state 'total'.
  }

  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      {/* // Menampilkan nilai 'total' dalam elemen h1. */}
      <h1 className="text-8xl">{total}</h1>
      {/* // Menggunakan komponen MyButton. */}
      <Button onClick={handleClick} />
      <Link to={"/"} className="border">
        Ke Halaman Home
      </Link>
    </section>
  );
}
