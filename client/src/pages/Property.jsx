import { useLocation } from "react-router-dom";
import "./Property.css";
import { useQuery } from "react-query";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from "../components/Map";

const Property = () => {
    const { pathname } = useLocation();
    const id = pathname.split("/").slice(-1)[0];
    const { data, isLoading, isError } = useQuery(["resd", id], () =>
        getProperty(id)
    );
    console.log(data)
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                <div className="like">
                    <AiFillHeart size={24} color="white" />
                </div>
                <img src={data?.image} alt="home image" />
                <div className="flexCenter property-details">
                    <div className="flexColStart left">
                        <div className="flexStart head">
                            <span className="primaryText">{data?.title}</span>
                            <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                                ₹ {data?.price}
                            </span>
                        </div>
                        <div className="flexStart facilities">
                            <div className="flexStart facility">
                                <FaShower size={20} color="#1F3E72" />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color="#1F3E72" />
                                <span>{data?.facilities.parkings} Parking</span>
                            </div>
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color="#1F3E72" />
                                <span>{data?.facilities.bedrooms} Room/s</span>
                            </div>
                        </div>
                        <span className="secondaryText" style={{ textAlign: "justify" }}>
                            {data?.description}
                        </span>
                        <div className="flexStart" style={{ gap: "1rem" }}>
                            <MdLocationPin size={25} />
                            <span className="secondaryText">
                                {data?.address}{" "}
                                {data?.city}{" "}
                                {data?.country}
                            </span>
                        </div>
                        <button className="button">Book your visit</button>
                    </div>
                    <div className="map">
                        <Map
                            address={data?.address}
                            city={data?.city}
                            country={data?.country}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Property