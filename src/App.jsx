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

function MyButton({ onClick }) {
  return (
    <button onClick={onClick} className="border-4 p-4">
      Tambah
    </button>
  );
}

export default function App() {
  const [total, setTotal] = useState(0);

  function handleClick() {
    setTotal(total + 1);
  }

  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-8xl">{total}</h1>
        <MyButton onClick={handleClick}></MyButton>
      </section>
      <section className="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Hello, World!</h1>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Foto " + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className={`${
                product.isFruit ? "text-green-400" : "text-black"
              }`}>
              {product.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
