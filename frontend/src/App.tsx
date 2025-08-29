import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './pages/Jobs';
import ProfileSettings from './pages/ProfileSettings';
import ForYou from './pages/ForYou';
import Job from './pages/Job';
import AiApply from './pages/AiApply';

function App() {

  return (
    <>
      <div className="bg-[#FFF5EE] w-full min-h-screen">

        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<Jobs />} />
              <Route path="profilesettings" element={<ProfileSettings />} />
              <Route path="foryou" element={<ForYou />} />
              <Route path="/job/:slug" element={<Job />} />
              <Route path="aiaply" element={<AiApply />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
