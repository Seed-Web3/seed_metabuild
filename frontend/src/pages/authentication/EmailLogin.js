import React, {useState} from "react";

import bg from "../../../assets/img/globe.png";
import {useNavigate} from "react-router-dom";

import {beApi} from "../../services/api";

function EmailLogin(props) {
  // props.funcNav(false);
    const [message,setMessage] = useState('');
    const navigate = useNavigate()
    function toR() {
        if (message == ''){
            alert('Please enter email')
        }else {
            console.log('发送成功')
            beApi({
                method:'post',
                url:'/auth/email',
                data: {
                    email:message
                }
            }).then((data) => {
                console.log(data)
                navigate('/register')
            })
        }
    }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="w-full h-full fixed mt-[15em]"
        style={{
          background: `url(${bg}) no-repeat bottom`,
          backgroundSize: "cover",
          backgroundOrigin: "content-box",
        }}
      >
        <div className="flex flex-col justify-center items-center-center text-[#DAFF3E] font-robotoMono -mt-[10%]">
          <p className="text-[5vh] font-bold">WELCOME TO SEED</p>
            <div className="text-[#DAFF3E] text-xs mt-5 w-full">
                A link will be sent to your email, check your mailbox
            </div>
          <div className="w-[30%] pt-[rem] m-auto">
            <div className="flex flex-col justify-center items-center mt-10 mx-[6rem] text-black">
              <input
                type="text"
                className="bg-[#DAFF3E] px-4 py-3 w-[300px] mb-4 rounded-lg"
                placeholder="Email"
                value={message}
                onChange={(e)=>{
                    const val =e.target.value;
                    setMessage(val);
                }}
              />
                <button onClick={toR} type="button" class="bg-black text-[white] px-5 py-1 rounded-full">Submit</button>
            </div>
          </div>
        </div>
        <div className="text-[#DAFF3E] text-xs mt-5 w-full">
          By signing in, you are agree to our terms of services
        </div>
      </div>
    </div>
  );
}

export default EmailLogin;
