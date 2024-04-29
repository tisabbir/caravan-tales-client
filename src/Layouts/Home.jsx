import { useLoaderData } from "react-router-dom";
import MyComponent from "../Components/MyComponent";
import ReactToolTip from "../Components/ReactToolTip";
import Banner from "../Components/Banner";
import BannerText from "../Components/BannerText";
import TouristSpots from "../Components/TouristSpots";

const Home = () => {
  const data = useLoaderData();
    const banners = data.banner_images;
  return (
    <div>
       
       {/* banner containr */}
       <div className="relative max-w-6xl mx-auto">
            <Banner banners={banners} />
                <div className="absolute top-10 md:top-20 lg:top-1/3 left-5 md:left-10 lg:left-20 z-10  ">
                        <BannerText />
                </div>
            </div>
            {/* banner containr */}
            <TouristSpots />

    </div>
  );
};

export default Home;
