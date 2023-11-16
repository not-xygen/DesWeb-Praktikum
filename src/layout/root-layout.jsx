import { Link, Outlet } from "react-router-dom";

const navlink = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "Kontak",
    path: "/kontak",
  },
];

export default function RootLayout() {
  return (
    <>
      <header className="w-screen h-1/12 flex flex-row justify-center items-center gap-8 py-8">
        {navlink.map((link) => {
          return (
            <Link
              key={link.title}
              to={link.path}
              className="hover:bg-black hover:text-white">
              {link.title}
            </Link>
          );
        })}
      </header>
      <Outlet />
      <footer className="py-4 w-screen flex justify-center items-center">
        Dibuat Oleh Dapa
      </footer>
    </>
  );
}
