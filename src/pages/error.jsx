import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className="w-screen h-screen flex  flex-col gap-4 justify-center items-center">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Balik ke Beranda</Link>
    </section>
  );
}
