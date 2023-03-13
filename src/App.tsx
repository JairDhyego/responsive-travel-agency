import Navbar from "@/components/navbar"
import Home from "@/components/home"
import Services from "@/components/services"
import Destination from "@/components/Destination"
import { Offer } from "@/components/offer"
import Tours from "@/components/tours"
import Testimonial from "@/components/testimonial"
import DownloadApp from "@/components/DownloadApp"
import Footer from "@/components/footer"

function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destination />
      <Offer />
      <Tours />
      <Testimonial />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default App
