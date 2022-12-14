import React, { useState } from "react";

export default function ArticleCard({ job }) {
  const [applied, setApply] = useState(false);

  function onClickApply() {
    if (job.status === 0) {
      setApply(true);
    }
  }
  const [refered, setRefer] = useState(false);

  function onClickRefer() {
    if (job.refer === 0) {
      setRefer(true);
    }
  }

  return (
    <article className="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
      {applied && (
        <div className="absolute w-[303px] h-[229px] bg-[#DAFF3E] rounded-2xl flex justify-center items-center">
          <p className="text-3xl font-semibold">Applied 🥳</p>
        </div>
      )}
      {refered && (
        <form className="absolute bg-[#DAFF3E] boxShadow rounded-2xl p-8 w-[auto] h-[350px] ">
          <div className="mb-2 text-left mt-4">
            <label
              htmlFor="email"
              className="block text-2xl font-semibold text-black "
            >
              What do you have in mind
            </label>
            <input
              type=""
              required
              placeholder="Paste Profile Link"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 text-left mt-4">
            <label
              htmlFor="email"
              className="block text-base font-medium text-black "
            >
              No Profile Yet?
            </label>
            <input
              type=""
              required
              placeholder="Enter Email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-8 flex justify-center items-center">
            <button
              type="button"
              className="bg-black border-black rounded-full px-4 py-1 font-bold text-[#DAFF3E] text-base"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <div className="flex flex-row justify-between text-left">
        <div>
          <p className="text-[#797979] text-base font-medium mb-2">
            {job.company}
          </p>
          <p className="text-black text-xl font-medium">{job.title}</p>
        </div>
        <div>
          <img src={job.logo} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between my-4 text-left">
        <p className="text-[#D7F050] text-base font-medium">
          ${job.salary_min} - ${job.salary_max}
        </p>
        <p className="text-black text-base font-medium mr-3">REMOTE</p>
      </div>

      <p className="mt-2 text-left text-sm leading-relaxed text-gray-500 line-clamp-3">
        {job.description}
      </p>

      <div className="mt-8 justify-between flex">
        <button
          type="button"
          onClick={onClickApply}
          className="border-2 rounded-full px-4 py-2 font-bold bg-[#DAFF3E] border-black text-black hover:bg-[#DAFF3E]"
        >
          {job.status === 0 ? "FAST APPLY" : "Check Status"}
        </button>
        <a className="border-2 rounded-full px-4 py-2 font-bold bg-black text-[#DAFF3E]">
          REFER & GET {job.bounty_amount} {job.bounty_currency}
        </a>
      </div>
    </article>
  );
}
