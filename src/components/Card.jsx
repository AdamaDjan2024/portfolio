export default function Card({ children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      {children}
    </div>
  );
}