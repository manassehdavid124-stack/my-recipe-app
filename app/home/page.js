// app/home/page.js
import Home from "../components/Home/page"; // your UI
import ProtectedRoute from "../components/ProtectedRoute"; // your HOC

export default function HomePage() {
  return (
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  );
}
