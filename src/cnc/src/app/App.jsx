import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar       from "./Sidebar";

import MainFeed            from "./MainFeed";
import MyCompass           from "./MyCompass";
import MLDataScience       from "./MLDataScience";
import SoftwareEngineering from "./SoftwareEngineering";
import MainCV              from "./cv/MainCV";
import HikesAndBytes       from "./HikesAndBytes";
import CodersGarden        from "./CodersGarden";
import Contact             from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/"             element={<MainFeed />}            />
          <Route path="/compass"      element={<MyCompass />}           />
          <Route path="/ml"           element={<MLDataScience />}       />
          <Route path="/sw_eng"       element={<SoftwareEngineering />} />
          <Route path="/cv"           element={<MainCV />}              />
          <Route path="/hikes"        element={<HikesAndBytes />}       />
          <Route path="/codersgarden" element={<CodersGarden/>}         />
          <Route path="/contact"      element={<Contact />}             />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
