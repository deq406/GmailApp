import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MessagePage from "./pages/MessagePage/MessagePage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/message/:id" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
