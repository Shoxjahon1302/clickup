import React, { useEffect, useState } from 'react';

export default function ToTopScrollBar() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(true);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          onClick={scrollUp}
          className="fixed bottom-5 z-50 duration-200 text-white right-5 w-10 h-10 rounded-full bg-blue-700 text-xl"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
