import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-blue-600 font-medium underline hover:text-blue-800"
      >
        Go back to Home
      </Link>
    </div>
  );
}
