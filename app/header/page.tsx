import Link from 'next/link'
import '@/styles/header.css';

export default function Header() {
  return (
    <div>
      <header>

        <div className="header" id="header">
          <div className="logo">
            <img src="/img/ico/frog-bc.png" alt="F8" />
            <h1 className=""><a className="_subTitle_vdbp4_58 d-lg-none" href="/"> <Link href={"/"}>DaviLands</Link> </a></h1>
          </div>


          <div className="search">
            <i className="search-icon"></i>
            <input placeholder="Tìm kiếm khóa học, bài viết, video, ..." readOnly />
          </div>

          <div id="navbar-actions-portal">
            <button className="register">
              <Link href={"/register"}>Đăng ký</Link>
            </button>
            <button className="signin">
              <Link href={"/signin"}>Đăng nhập</Link>
            </button>
          </div>
        </div>

      </header>
    </div>
  );
}