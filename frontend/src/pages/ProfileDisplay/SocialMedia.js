import React, { useContext } from "react";
import github from "../../../assets/img/githubIcon.png";
import website from "../../../assets/img/websiteIcon.png";
import twitter from "../../../assets/img/twitter.png";
import { UserProfileContext } from "./display";

function Socialmedia() {

  const {profile} = useContext(UserProfileContext)

  return (
    <div>
      <form>
        <div className="flex flex-row justify-center pb-[2rem]">
          <div>
            <img src={twitter} alt="" className="w-[auto] h-[40px]" />
          </div>
          <div>
            <img src={github} alt="" className="w-[auto] h-[40px]" />
          </div>
          <div>
            <img src={website} alt="" className="w-[auto] h-[40px]" />
          </div>
        </div>

        <div className="bg-black text-[#DAFF3E] h-[180px] w-[950px] text-xl pl-10 py-6 font-bold rounded-2xl"
        style={{margin:"0 auto"}}>
          {profile.bio}
        </div>
      </form>
    </div>
  );
}

export default Socialmedia;
