import { Route, Routes } from "react-router-dom";
import BackEndSkills from "./Components/BackEndSkills/BackEndSkills";
import DataBaseSkills from "./Components/DatabaseSkills/DataBaseSkills";
import Footer from "./Components/Footer/Footer";
import FrontEndSkills from "./Components/FronEndSkills/FrontEndSkills";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<FrontEndSkills />} />
          <Route path="skill/front-end" element={<FrontEndSkills />} />
          <Route path="skill/back-end" element={<BackEndSkills />} />
          <Route path="skill/database" element={<DataBaseSkills />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
