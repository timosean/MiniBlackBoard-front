import { NextPage } from "next";
import React, { useState } from "react";

const SignUp: NextPage = () => {
  const [identity, setIdentity] = useState<string>("student");
  const [inputs, setInputs] = useState({
    name: "",
    id: "",
    pw: "",
    idNum: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="w-[100vw] h-[100vh] flex">
      {/* 로그인페이지 좌측 엠블렘 영역 */}
      <section className="w-4/12 h-full flex justify-center align-center bg-[#D7C9B2]">
        <img src="/emblem.svg" className="w-8/12" />
      </section>

      {/* 로그인페이지 우측 폼 영역 */}
      <section className="w-8/12 h-full flex justify-center align-center bg-[#7B031D] text-white">
        <div className="w-5/12 flex flex-col justify-center align-start">
          <p className="text-4xl font-bold mb-8 text-center">회원가입</p>
          {/* 폼 작성 */}
          <form className="flex flex-col justify-center align-start">
            <div className="w-full flex mb-6">
              <span
                className={`w-6/12 p-3 text-center text-xl rounded-md cursor-pointer font-bold ${
                  identity === "student"
                    ? "bg-[#edd6d5] text-black"
                    : "bg-[#3f3f3f] text-black"
                }`}
                onClick={() => setIdentity("student")}
              >
                학생
              </span>
              <span
                className={`w-6/12 p-3 text-center text-xl rounded-md cursor-pointer font-bold ${
                  identity === "professor"
                    ? "bg-[#edd6d5] text-black"
                    : "bg-[#3f3f3f] text-black"
                }`}
                onClick={() => setIdentity("professor")}
              >
                교수
              </span>
            </div>
            <input
              placeholder="이름을 입력해주세요"
              type="text"
              name="name"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-6"
              value={inputs.name}
              onChange={onChange}
            />
            <input
              placeholder="아이디를 입력해주세요"
              type="text"
              name="id"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-6"
              value={inputs.id}
              onChange={onChange}
            />
            <input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="pw"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-6"
              value={inputs.pw}
              onChange={onChange}
            />
            <input
              placeholder="학번/교원번호를 입력해주세요"
              type="text"
              name="idNum"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-8"
              value={inputs.idNum}
              onChange={onChange}
            />
            {/* 로그인/회원가입 버튼그룹 */}
            <div className="flex space-x-4">
              <button
                className="w-full p-3 text-xl font-bold rounded-lg bg-[#2D282E]"
                type="submit"
              >
                가입하기
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
