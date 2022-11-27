import bg from "../../../assets/img/globe2.png";
import {Link} from "react-router-dom";
import React from "react";

function MyJobHire() {
    return(
        <div className="relative h-screen overflow-hidden bg-black">
            <div
                className="w-full h-full fixed"
                style={{
                    // background: `url(${bg}) no-repeat bottom`,
                    backgroundColor:"#DAFF3E",
                    backgroundSize: "cover",
                    backgroundOrigin: "content-box",
                }}
            >
                <div className="flex flex-col justify-center items-center w-full">
                    <div className="w-[50%] px-8 py-[6rem] m-auto bg-[#DAFF3E] rounded-3xl font-robotoMono">
                        <div className="rounded-3xl bg-black font-bold h-[70vh] text-[5vh] text-[#DAFF3E] pt-[10vh] pl-[40px]">
                            <div className="text-[3vh] text-left">Database Progammer</div>
                            <div className="text-[2vh] text-left">Talent Hired : Constance @11x11</div>
                            <div className="text-[2vh] text-left">Referer: Direct</div>
                            <div className="text-[2vh] text-left">Bounty: To be Refunded</div>
                            <div className="mt-[10rem]">
                                <Link to="/profile/form">
                                    <button
                                        type="button"
                                        className="text-[15px] bg-[#DAFF3E] px-2 py-2 rounded-full font-bold text-black"
                                    >
                                        Confirm
                                    </button>
                                </Link>
                            </div>
                            <div className="text-[1vh]">By confirming, you agree to terms & conditions</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default MyJobHire
