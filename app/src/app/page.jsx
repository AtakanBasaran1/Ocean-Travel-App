"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import aside from './images/aside.png'
import dogfish from './images/dogfish.png'

const Page = () => {
  return (
    <div className='min-h-screen w-full bg-custom-blue  '>
      {/* <img src={aside.src} alt="" className="w-full h-full z-10 object-cover fixed" /> */}

      <div className='z-50 absolute'>
        <h1 className='mt-[80px] flex justify-start ml-10 text-[35px] text-gray-300'>AQUA</h1>

        <p className='ml-10 flex justify-start w-[250px] text-[14px] mt-10 text-gray-300'>Bir ömür boyu unutamayacağınız bir maceraya atılın! Türkiye’nin en güzel su altı noktalarında, profesyonel rehberler eşliğinde unutulmaz bir yolculuğa çıkın. Şimdi yerinizi ayırtın ve deniz altının büyüleyici dünyasını keşfedin.</p>


        <div className='flex justify-center'>
          <button
            className='bg-white w-[300px] h-[50px] mt-[280px] hover:bg-gray-300  rounded-[10px]'
          ><p className='text-blue-600 text-[16px] mt-3 font-semibold'>Hemen Başlayın</p></button>
        </div>
      </div>
    </div>
  )
}

export default Page;
