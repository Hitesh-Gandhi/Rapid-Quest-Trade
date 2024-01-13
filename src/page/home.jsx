import Homepage from '../components/Home/homepage';
import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Side_Bar/sidebar';
import Userprofile from '../components/User_Profile/userprofile';
import './home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <Userprofile />
      <Homepage />
      <Sidebar />
    </div>
  );
}

export default Home;
