"use client"
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import dogfish from './images/dogfish.png'

const Page = () => {


  return (
    <div className='container'>

      <aside>
        <h1 className='text-white font-semibold p-5 text-[28px] flex text-center mt-[60px]'>Deniz Altının Gizemli Dünyasını Keşfetmeye Hazır mısınız?</h1>

        <p className='text-white text-[18px]  p-5 mt-10 flex text-center'>Bir ömür boyu unutamayacağınız bir maceraya atılın! Türkiye’nin en güzel su altı noktalarında, profesyonel rehberler eşliğinde unutulmaz bir yolculuğa çıkın. Şimdi yerinizi ayırtın ve deniz altının büyüleyici dünyasını keşfedin.</p>

        <h2 className='text-white text-[20px] flex justify-center p-5'>Hemen Rezervasyon Yap</h2>

        <div className="grid h-screen place-items-center mb-[-600px]">
          <button className='bg-blue-400 mt-[-700px] hover:bg-blue-600 hover:bg-opacity-50 bg-opacity-30 w-[250px] h-[40px] text-white rounded-[30px]'>
            <p className='text-[14px] mt-3'>Rezervasyon Yap</p>
          </button>
        </div>



      </aside>

      <hr className='border-blue-300 mt-[30px]' />

      <bside>
        <h1 className='text-white p-5 flex text-center'>Neden Bizimle Keşfetmelisiniz?</h1>

        <img src={dogfish.src} className='w-[400px] mt-[-40px] ml-[-10px] mb-5' alt="" />

        <ul className='text-white'>

          <div className='flex text-start justify-start p-5 flex-col'>
            <li className='text-[20px] mb-5'>Eşsiz Bir Deneyim</li>
            <p className='text-[17px]'>Deniz altının renkli ve gizemli dünyasında yolculuk yaparak su altı canlılarıyla tanışma fırsatı.</p>

            <h3 className='text-[19px]'>Hangi Canlılarla Karşılaşacağım?</h3>
            <button className='bg-blue-400 hover:bg-blue-600 hover:bg-opacity-50 bg-opacity-30 w-[200px] h-[35px] mt-7 text-white rounded-[30px] '><p className='text-[14px] justify-center flex mt-3'>Detaylara Git</p></button>
            <hr className='border-blue-300' />
          </div>

          <div className='flex text-start justify-start p-5 flex-col'>
            <li className='text-[20px] mb-5'>Güvenlik Önceliğimizdir</li>
            <p className='text-[17px]'>Tüm ekipmanlarımız en son teknoloji ile donatılmış ve rehberlerimiz profesyonel dalış eğitmenleridir.</p>
            <hr className='border-blue-300' />
          </div>

          <div className='flex text-start justify-start p-5 flex-col'>
            <li className='text-[20px] mb-5'>Her Yaşa Uygun</li>
            <p className='text-[17px]'>İster yeni başlayan, ister deneyimli bir dalgıç olun, her seviyeye uygun turlarımız ile size en iyi deneyimi sunuyoruz.</p>
            <hr className='border-blue-300' />
          </div>

        </ul>

      </bside>

      <cside className='flex justify-center text-center items-center'>
        <h1 className='text-white p-5'>Tur Paketlerimiz</h1>


        <div className='mt-10 absolute mt-[880px]'>
          <div class="cards">
            <div class="card red">
              <p class="tip">Başlangıç Seviye Turu

              </p>
              <p class="second-text">Süre: 2 saat</p>
              <p class="second-text">Fiyat: 300₺</p>
              <p class="second-text">İçerik: Kısa su altı turu, temel dalış eğitimi.
              </p>
              <button className='bg-blue-400 mt-3 w-[150px] h-[35px] rounded-[30px] hover:bg-blue-600 '><p className='mt-[7px] text-white hover:text-white'>Detayları İncele</p></button>
            </div>
            <div class="card blue">
              <p class="tip">Keşif Turu</p>
              <p class="second-text">Süre: 2 saat</p>
              <p class="second-text">Fiyat: 300₺</p>
              <p class="second-text">İçerik: Kısa su altı turu, temel dalış eğitimi.
              </p>
              <button className='bg-blue-400 mt-3 w-[150px] h-[35px] rounded-[30px] hover:bg-blue-600 '><p className='mt-[7px] text-white hover:text-white'>Detayları İncele</p></button>
            </div>
            <div class="card green">
              <p class="tip">Profesyonel Seviye Turu</p>
              <p class="second-text">Süre: 2 saat</p>
              <p class="second-text">Fiyat: 300₺</p>
              <p class="second-text">İçerik: Kısa su altı turu, temel dalış eğitimi.
              </p>
              <button className='bg-blue-400 mt-3 w-[150px] h-[35px] rounded-[30px] hover:bg-blue-600 '><p className='mt-[7px] text-white hover:text-white'>Detayları İncele</p></button>
            </div>
          </div>
        </div>


      </cside>


    </div>
  )
}
export default Page
