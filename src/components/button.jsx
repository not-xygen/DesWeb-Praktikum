// Komponen MyButton adalah contoh komponen fungsional yang menerima prop 'onClick'.
export function Button({ onClick }) {
  return (
    <button onClick={onClick} className="border-4 p-4">
      Tambah
    </button>
  );
}
