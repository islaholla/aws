import "./App.css"

import Header from "./components/common/header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import News from "./components/news/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Sdp from "./components/team/SDP/Sdp";
import Aws from "./components/team/AWS/Aws";
import Mso from "./components/team/MSO/mso";
import Catalog from "./components/team/MSO/Catalog";
import DetailBlog from "./components/detailBlog/DetailBlog";
import DetailNews from "./components/detailNews/DetailBlog";
import Storage from "./components/team/Storage/storage";
import SuksesStory from "./components/sucessStory/SuksesStory";
import BackupStory from "./components/sucessStory/Backup";
import AutomatedStory from "./components/sucessStory/Automated";
import CoalStory from "./components/sucessStory/CoalMining";
import MigratingBanking from "./components/sucessStory/MigratingBanking";
import TelekomselSuccess from "./components/sucessStory/TelkomselSukses";
import BTPNSukses from "./components/sucessStory/BtpsSukses";
import BRISuccess from "./components/sucessStory/BRISukses";
import BTNSuccess from "./components/sucessStory/BTNSukses";
import DanamonSuccess from "./components/sucessStory/DanamonSukses";
import BSISuccess from "./components/sucessStory/BSISukses";
import TelcoSuccess from "./components/sucessStory/TelcoSukses";
import AssetManagementSuccess from "./components/sucessStory/AssetManagementSuccess";
import GovermentBankSuccess from "./components/sucessStory/GovermentBankSukses";
import PrivateBankSuccess from "./components/sucessStory/PrivateBankSukses";
import TelecomSukses from "./components/sucessStory/TelecomSukses";
import AssetCompanySukses from "./components/sucessStory/AssetCompanySukses";
import CompanyCSukses from "./components/sucessStory/CompanyCSukses";
import CompanyBSukses from "./components/sucessStory/CompanyBSukses";
import InfrastrukturIT from "./components/detailNews/InfrastrukturIT";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
         <Route  path='/courses' element={<CourseHome/>} />
          <Route  path='/blog' element={<News/>} />
          <Route  path='/solutions' element={<Team/>} />
          <Route  path='/solutions/sdp' element={<Aws/>} />
          <Route  path='/solutions/mso' element={<Mso/>} />
          <Route  path='/solutions/mso/catalog' element={<Catalog/>} />
          <Route  path='/solutions/aws' element={<Sdp/>} />
          <Route  path='/pricing' element={<Pricing/>} />
          <Route  path='/journal' element={<Blog/>} />
          <Route  path='/journal/sukses-story' element={<SuksesStory/>} />
          <Route  path='/journal/backup-solution' element={<BackupStory/>} />
          <Route  path='/journal/automated-backup' element={<AutomatedStory/>} />
          <Route  path='/journal/coal-mining' element={<CoalStory/>} />
          <Route  path='/journal/migrating-banking' element={<MigratingBanking/>} />
          <Route  path='/journal/success-telkomsel' element={<TelekomselSuccess/>} />
          <Route  path='/journal/success-btpns' element={<BTPNSukses/>} />
          <Route  path='/journal/secure-with-multiaccount-gov-owned-bank' element={<BRISuccess/>} />
          <Route  path='/journal/lz-for-gov-owned-bank' element={<BTNSuccess/>} />
          <Route  path='/journal/enhance-and-improve-lz-syariahbank' element={<DanamonSuccess/>} />
          <Route  path='/journal/secure-manage-apps-multiaccount-gov-syariah-bank' element={<BSISuccess/>} />
          <Route  path='/journal/success-telco-company' element={<TelcoSuccess/>} />
          <Route  path='/journal/success-asset-management' element={<AssetManagementSuccess/>} />
          <Route  path='/journal/success-goverment-bank' element={<GovermentBankSuccess/>} />
          <Route  path='/journal/success-private-bank' element={<PrivateBankSuccess/>} />
          <Route  path='/journal/success-telecom' element={<TelecomSukses/>} />
          <Route  path='/journal/success-asset-company' element={<AssetCompanySukses/>} />
          <Route  path='/journal/success-company-c' element={<CompanyCSukses/>} />
          <Route  path='/journal/success-company-b' element={<CompanyBSukses/>} />
          <Route  path='/news/InfrastrukturIT' element={<InfrastrukturIT/>} />
          <Route  path='/journal/:id' element={<DetailBlog/>} />
          <Route  path='/news/:id' element={<DetailNews/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/solutions/storage' element={<Storage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
