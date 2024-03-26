import Blogs from "./Blogs/Blogs";
import Clippath from "./Clippath/Clippath";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Map from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import Newsletter from "./Newsletter/Newsletter";
import Portfolio from "./Portfolio/Portfolio";
import Servicess from "./Servicess/Servicess";
import Sponsors from "./Sponsors/Sponsors";
import Topbar from "./Topbar/Topbar";
import Work from "./Work/Work";


function App() {
  return (
   <>
       <Topbar />
       <Navbar />
       <Hero />
       <Main />
       <Servicess />
       <Portfolio />
       <Sponsors />
       <Work />
       <Clippath />
       <Blogs />
       <Form />
       <Contacts />
       <Map />
       <Newsletter />
       <Footer />
       

       

   </>
  );
}

export default App;
