import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../utils/common";
import PropertyCard from "./PropertyCard";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Residencies = () => {
    const {data, isError, isLoading} = useProperties()
    if (isError) {
        return (
            <div className='wrapper'>
                <span>Error while fetching data</span>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color="#4066ff"
                    aria-label="puff-loading"
                />
            </div>
        )
    }
    
    return (
        <div id="residencies" className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="flexColStart r-head">
                    <span className="orangeText">Awesome Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}>
                    {data.slice(0, 8).map((card, i) => (
                        <SwiperSlide key={i}>
                            <PropertyCard card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Residencies;

