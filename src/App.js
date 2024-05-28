import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="impshop">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
