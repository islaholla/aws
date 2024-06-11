import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Sdp from "./components/team/SDP/Sdp";
import Aws from "./components/team/AWS/Aws";
import DetailBlog from "./components/detailBlog/DetailBlog";
import Storage from "./components/team/Storage/storage";
import SuksesStory from "./components/sucessStory/SuksesStory";
import BackupStory from "./components/sucessStory/Backup";
import AutomatedStory from "./components/sucessStory/Automated";
import CoalStory from "./components/sucessStory/CoalMining";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
         <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/solutions' element={<Team/>} />
          <Route  path='/solutions/sdp' element={<Aws/>} />
          <Route  path='/solutions/aws' element={<Sdp/>} />
          <Route  path='/pricing' element={<Pricing/>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route  path='/journal/sukses-story' element={<SuksesStory/>} />
          <Route  path='/journal/backup-solution' element={<BackupStory/>} />
          <Route  path='/journal/automated-backup' element={<AutomatedStory/>} />
          <Route  path='/journal/coal-mining' element={<CoalStory/>} />
          <Route  path='/journal/:id' element={<DetailBlog/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/solutions/storage' element={<Storage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
