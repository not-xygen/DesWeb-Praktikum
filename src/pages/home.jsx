import { Link } from "react-router-dom";

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

export default function Home() {
  return (
    <>
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
        <Link to={"/about"} className="border">
          Ke Halaman About
        </Link>
      </section>
    </>
  );
}
