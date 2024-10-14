import '@/styles/footer.css';
import Head from 'next/head';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <div className="socialIcons">
            <a href=""><i className='bx bxl-youtube'></i></a>
            <a href=""><i className='bx bxl-tiktok' ></i></a>
            <a href=""><i className='bx bxl-github' ></i></a>
            <a href=""><i className='bx bxl-facebook' ></i></a>
            {/* <a href=""><i className="fa-brands fa-youtube"></i></a> */}
          </div>
          <div className="footerNav">
            <ul><li><a href="">Home</a></li>
              <li><a href="">News</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">our Team</a></li>
            </ul>
          </div>

        </div>
        <div className="footerBottom">
          <p>Copyright &copy;2023; Designed by <span className="designer">Noman</span></p>
        </div>
      </footer>
    </div>
  );
}
