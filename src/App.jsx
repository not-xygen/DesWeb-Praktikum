import { useState } from "react";

const user = {
  name: "Dapa Agus",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Kubis", isFruit: false, id: 1 },
  { title: "Bawang Putih", isFruit: false, id: 2 },
  { title: "Apel", isFruit: true, id: 3 },
];

// Komponen MyButton adalah contoh komponen fungsional yang menerima prop 'onClick'.
function MyButton({ onClick }) {
  return (
    <button onClick={onClick} className="border-4 p-4">
      Tambah
    </button>
  );
}

export default function App() {
  const [total, setTotal] = useState(0);

  // handleClick adalah fungsi yang akan dijalankan ketika tombol di komponen MyButton diklik.
  function handleClick() {
    setTotal(total + 1); // Menggunakan useState untuk mengubah state 'total'.
  }

  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        {/* // Menampilkan nilai 'total' dalam elemen h1. */}
        <h1 className="text-8xl">{total}</h1>
        {/* // Menggunakan komponen MyButton. */}
        <MyButton onClick={handleClick}></MyButton>
      </section>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        {/* // Menampilkan nama dari objek 'user'. */}
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Foto " + user.name}
          style={{
            width: user.imageSize, // Menggunakan properti CSS dalam inline style.
            height: user.imageSize,
          }}
        />
        <ul>
          {products.map((product) => (
            <li
              key={product.id} // Menggunakan 'key' unik untuk elemen dalam daftar.
              className={`${
                product.isFruit ? "text-green-400" : "text-black"
              }`}>
              {/* Mengubah warna teks berdasarkan properti 'isFruit'. */}
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
