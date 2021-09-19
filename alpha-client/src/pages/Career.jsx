import BannerCareer from "../components/BannerCarrer";
import Footer from "../components/Footer";
import JobList from "../components/JobList";
import NavbarCareer from "../components/NavbarCareer";

export default function Career() {
  return (
    <div>
      <NavbarCareer />
      <BannerCareer />
      <JobList />
      <Footer />
    </div>
  )
}