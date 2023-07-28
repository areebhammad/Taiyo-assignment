import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./Contact";
import Charts from "./Charts";
import Create from "./Create";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/create" element={<Create />} />
          <Route path="/charts" element={<Charts />} />
        </Route>
      </Routes>
    </div>
  );
}
