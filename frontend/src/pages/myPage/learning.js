import {TypeAnimation} from "react-type-animation";
import cursor from "../../../assets/img/cursor.png";
import React from "react";
import academylogo from "../../../assets/img/academylogo.png";
import web3profilelogo from "../../../assets/img/web3profilelogo.png";
import web3careerlogo from "../../../assets/img/web3careerlogo.png";
import my1 from "../../../assets/img/my1.png";
import my2 from "../../../assets/img/my2.png";

function Learning() {

    return(
        <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
            <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                <section className="text-black h-screen font-robotoMono flex flex-col w-full items-center p-8">
                    <div className="text-4xl font-bold mt-4">Web3 Learned. </div>

                    <ul className="text-left font-bold text-xl max-w-2xl bg-[#000000]">
                        <li className="text-red-500">
                            <TypeAnimation sequence={["01 hello world.", 1000]} />
                        </li>
                        <li className="text-[#F5F5F5]">02 welcome to the (web3 career hub)</li>
                        <li className="text-[#F5F5F5]">03 join 7 million to kickstart your web3 journey _</li>
                    </ul>
                    <div className="text-left font-bold text-3xl mt-20">402</div>
                    <div className="text-left font-bold text-2xl">const trainedTalents = () => {<br/>}
                        "console.log(“402”);"
                    }</div>
                    <p className="text-left font-bold text-2xl">
                            'chievement: {'{'}
                    </p>
                    <p className="text-left font-bold text-2xl">
                            achievement{': {'}
                            employment: 93%,<br/>
                            corporatePartner: 25,<br/>
                            totalProject: 15 <br/>
                            totalSharedMaterial: 200H+ <br/>
                        }
                    </p>
                    <div>
                        <a
                            className="inline-flex text-[60px] my-8 items-center bg-[#9D00FF] font-bold w-full text-[#DAFF3E] rounded border px-12 py-3 text-white hover:bg-[#FF5733] hover:text-black focus:bg-black focus:text-[#DAFF3E] active:bg-blue-500 sm:w-auto"
                            href="https://lu.ma/buidl-on-near-bootcamp"
                        >
                            <span className="text-3xl"> JOIN and LEARN now </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                        <div className="flex flex-row justify-end">
                            <img
                                src={cursor}
                                alt=""
                                className="relative left-10 bottom-5 h-[120px] justify-right"
                            />
                        </div>
                    </div>
                </section>

            </div>
            <div className="relative min-h-screen overflow-x-hidden bg-black">
                <div className="text-4xl font-bold mt-30 text-[#DAFF3E]">STAR Program</div>
                <div className="px-[10rem] py-[11rem] text-[#DAFF3E] my-[10rem]">
                    <div className="flex flex-row justify-between mb-5">
                        <div className="pl-[3rem]">
                            <img src={academylogo} alt="" className="w-[150px] h-auto" />
                        </div>
                        <div className="pl-[2rem]">
                            <img src={my1} alt="" className="w-[100px] h-auto" />
                        </div>
                        <div className="pr-[3rem]">
                            <img src={my2} alt="" className="w-[150px] h-auto" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-around">
                        <div className="font-bold mt-4">Tailor learning journey to your career goal</div>

                        <div className="text-1xl font-bold mt-4">Intense training with hands-on</div>

                        <div className="text-1xl font-bold mt-4">Qualified Web3 Dev with Career Opportunity</div>
                    </div>
                </div>
                <a
                    className="inline-flex text-[60px] my-8 items-center bg-[#DAFF3E] font-bold w-full text-[#DAFF3E] rounded border px-12 py-3 text-black hover:bg-[#FF5733] hover:text-black focus:bg-black focus:text-[#DAFF3E] active:bg-blue-500 sm:w-auto"
                    href="https://lu.ma/buidl-on-near-bootcamp"
                >
                    <span className="text-3xl text-black"> Check Next Cohort </span>

                    <svg
                        className="ml-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
                <div className="font-bold text-[#DAFF3E]">limited slots for each batch</div>
            </div>
        </div>
    )
}
export default Learning
