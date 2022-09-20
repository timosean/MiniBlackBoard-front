import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const LoginPage: NextPage = () => {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
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
          <p className="text-4xl mb-3">MiniBB에 로그인하세요</p>
          <p className="text-3xl mb-8">학습관리시스템</p>
          {/* 폼 작성 */}
          <form className="flex flex-col justify-center align-start">
            <input
              placeholder="아이디를 입력해주세요"
              type="text"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-4"
              value={id}
              onChange={(e) => handleIdInput(e)}
            />
            <input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              className="py-3 px-5 rounded-lg text-black text-xl focus:outline-none mb-8"
              value={pw}
              onChange={(e) => handlePwInput(e)}
            />
            {/* 로그인/회원가입 버튼그룹 */}
            <div className="flex space-x-4">
              <button
                className="w-3/12 p-3 text-xl font-bold rounded-lg bg-[#2D282E]"
                type="submit"
              >
                로그인
              </button>
              <Link href="/signup">
                <button className="w-3/12 p-3 text-xl font-bold rounded-lg bg-[#2D282E]">
                  회원가입
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
