import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  let mainNav = props.data.mainNav.map((item) => (
    <li key={item.category} className={style.header_li}>
      <Link className={style.header_a} to={item.link}>
        {item.category}
      </Link>
    </li>
  ));
  function pgUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className={style.header_wraper}>
        <div className={style.header_routing}>
          <nav>
            <ul className={style.header_ul}>{mainNav}</ul>
          </nav>
        </div>

        <div className={style.img_name} onClick={pgUp}>
          <img className={style.header_img} src="logo.jpg" alt="logo" />
          <h1 className={style.header_h1}>Ірина Бойко</h1>
          <h3 className={style.header_h3}>Психолог успішних людей</h3>
        </div>
      </div>
    </>
  );
}
