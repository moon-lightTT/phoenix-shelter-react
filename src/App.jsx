import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DogDetail from "./components/DogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dog/:id" element={<DogDetail />} /> {}
    </Routes>
  );
}

export default App;