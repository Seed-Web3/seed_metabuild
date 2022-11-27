import React, {useEffect} from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import {Route, useNavigate, useParams, useRoutes} from "react-router-dom";
import {beApi} from "../../services/api";

function IndexLandingPage() {
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        let code = window.location.href.split('=')[1]
        console.log(111)
        navigate('/profile/form')
        beApi({
            method:'get',
            url:`/auth/email/magicLink`,
            params:{
                code:code
            }
        }).then((res) => {
            console.log(res)
            sessionStorage.setItem("jwt",res.data.jwt)

        })
    },[])
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#DAFF3E]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}

export default IndexLandingPage;
