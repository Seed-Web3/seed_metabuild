import React from "react";
import logo from "../../../assets/img/companyLogo.png";
import rec from "../../../assets/img/Rectangle.png";

export default function Education(badge) {
  return (
    <div className="sm:mx-[2rem] flex flex-col justify-center"
         style={{margin:"0 auto"}}>
      <div style={{marginLeft:"15vw"}} className="sm:text-2xl text-left font-bold text-2xl">Education</div>
      <div style={{margin:"0 auto"}} className="bg-black text-[#DAFF3E] text-left h-[180px] w-[950px] text-xl pl-10 py-6 font-bold rounded-2xl">
        <ul className="text-left font-bold sm:text-xl max-w-2xl text-[1.8vh]">
          <li>Senior Architect at Google</li>
          <li>Senior Architect at Google</li>
          <li>Senior Architect at Google</li>
        </ul>
      </div>
      {/* <div className="grid sm:grid-cols-3 gap-3 mt-8 grid-cols-2">*/}
      {/*  <div className="bg-black  rounded-2xl ">*/}
      {/*    <div className="relative sm:px-3 px-2 pt-3">*/}
      {/*      <img className="" src={rec} alt="" />*/}
      {/*      <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">*/}
      {/*        <img src={logo} alt="" />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="text-[#DAFF3E] text-left sm:px-5 mt-5 px-2">*/}
      {/*      <p className="font-bold sm:text-xl text-[1.2vh]">{badge.name}</p>*/}
      {/*      <p className="font-normal sm:text-base text-xs text-[1vh] mt-1">*/}
      {/*        Created a web3 job portal that implement NFT credential*/}
      {/*      </p>*/}
      {/*      <p className="font-bold sm:text-lg text-[1vh] py-4">12-OCT-2022</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="bg-black  rounded-2xl ">*/}
      {/*    <div className="relative sm:px-3 px-2 pt-3">*/}
      {/*      <img className="" src={rec} alt="" />*/}
      {/*      <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">*/}
      {/*        <img src={logo} alt="" />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  );

  if (badge.badgetype == "education") {
    return (
      <>
        <div>
          <div className="bg-black  rounded-2xl ">
            <div className="relative sm:px-3 px-2 pt-3">
              <img className="" src={rec} alt="" />
              <div className="absolute -mt-14 ml-2 xs:scale-[0.9]">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="text-[#DAFF3E] text-left sm:px-5 mt-5 px-2">
              <p className="font-bold sm:text-xl text-[1.2vh]">{badge.name}</p>
              <p className="font-normal sm:text-base text-xs text-[1vh] mt-1">
                {badge.description}
              </p>
              <p className="font-bold sm:text-lg text-[1vh] py-4">
                {badge.date}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
