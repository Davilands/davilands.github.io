'use client'; // Để báo rằng đây là một Client Component

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/menu.css';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1); // Đặt trạng thái cho slideIndex

  useEffect(() => {
    const slideContainer = document.getElementById('slideContainer');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Khởi tạo vị trí ban đầu
    slideContainer.style.transform = `translateX(${-100 * slideIndex}vw)`;

    function moveSlide(direction) {
      let newSlideIndex = slideIndex + direction;

      // Xử lý khi đến slide "ảo"
      if (newSlideIndex === 0) {
        newSlideIndex = totalSlides - 2; // Nhảy về slide cuối thật
      } else if (newSlideIndex === totalSlides - 1) {
        newSlideIndex = 1; // Nhảy về slide đầu tiên thật
      }

      setSlideIndex(newSlideIndex); // Cập nhật slideIndex
      slideContainer.style.transition = 'transform 0.5s ease-in-out';
      slideContainer.style.transform = `translateX(${-100 * newSlideIndex}vw)`;
    }

    // Tự động chuyển slide mỗi 3 giây
    const intervalId = setInterval(() => {
      moveSlide(1); // Tự động di chuyển sang slide tiếp theo
    }, 3000);

    // Dọn dẹp interval khi component bị unmount
    return () => clearInterval(intervalId);
  }, [slideIndex]);

  // Hàm xử lý di chuyển slide khi người dùng bấm nút
  const handleMoveSlide = (direction) => {
    setSlideIndex(slideIndex + direction);
  };

  return (
    <div className="slider-container">
      <div className="slides" id="slideContainer">
        <div className="slide slide-3">
          <div className="left">
            <p className="title">Trang 3</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 3" />
          </div>
        </div>

        <div className="slide slide-1">
          <div className="left">
            <p className="title">Đây là tiêu đề</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 1" />
          </div>
        </div>

        <div className="slide slide-2">
          <div className="left">
            <p className="title">Trang 2</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 2" />
          </div>
        </div>

        <div className="slide slide-3">
          <div className="left">
            <p className="title">Trang 3</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 3" />
          </div>
        </div>

        {/* Slide "ảo" (sao chép từ slide đầu tiên) */}
        <div className="slide slide-1">
          <div className="left">
            <p className="title">Đây là tiêu đề</p>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Link href="/">ĐĂNG KÝ NGAY</Link>
          </div>
          <div className="right">
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/36/6454dee96205c.png" alt="Banner 1" />
          </div>
        </div>
      </div>

      <button className="prev" onClick={() => handleMoveSlide(-1)}>
        <i className='bx bx-chevron-left'></i>
      </button>
      <button className="next" onClick={() => handleMoveSlide(1)}>
        <i className='bx bx-chevron-right'></i>
      </button>
    </div>
  );
}
