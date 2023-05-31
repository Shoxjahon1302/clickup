import React from 'react';

export default function Main() {
  return (
    <div className="">
      <div className="w-[1140px] m-auto">
        <div className="flex py-56  items-center justify-between">
          <div className="flex flex-col z-30 p-2 w-[900px] items-start">
            <h1 className="text-6xl w-96 font-extrabold m-[0xp 20px] font-['Open Sans'] text-[#2c234d]">
              Your Course To Success
            </h1>
            <p className="text-[#5d5a67] font-normal leading-[30px] py-9 text-[16px] w-[460px]">
              Loo you mug lurgy baking cakes boot cracking goal morish up the
              duff haggle hotpot faff about no biggie burke, is bleeder
              bamboozled bite your.
            </p>
            <button className="bg-blue-700 text-lg hover:shadow-[0px_20px_20px_10px_#00000024] text-white duration-300 p-3 rounded">
              Ready to Get Started?
            </button>
          </div>
          <div className="w-full">
            <img
              className="max-w-[1400px]"
              src="https://quomodosoft.com/html/bisy/assets/images/home/layer.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
