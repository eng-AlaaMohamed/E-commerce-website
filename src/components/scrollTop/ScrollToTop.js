import { useRef } from 'react';
import './scrollToTop.css';

function ScrollToTop() {

    const scrollBtn = useRef();

    function handleClickOnScrollBtn () {
        window.scrollTo(0,0);
    }

    window.onscroll = function () {
        if(this.scrollY > 450 ) {
            scrollBtn.current.classList.add('active-btn');
        } else {
            scrollBtn.current.classList.remove('active-btn');
        }
    }

  return (
    <div onClick={handleClickOnScrollBtn} ref={scrollBtn} className='scroll-to-top'>
      <i className="bi bi-arrow-up"></i>
    </div>
  )
}

export default ScrollToTop;
