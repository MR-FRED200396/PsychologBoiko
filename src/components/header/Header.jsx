import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header(props) {
  let mainNav = props.data.mainNav.map((item) => (
    <li key={item.category}>
      <Link to={item.link}>{item.category}</Link>
    </li>
  ));
  return (
    <>
      <div className={style.header_wraper}>
        <div className={style.routing}>
          <nav>
            <ul>{mainNav}</ul>
          </nav>
        </div>

        <div className={style.img_name}>
          <img src="logo.jpg" alt="logo" />
          <h1>Psycholog Boiko</h1>
          <h3>psycholog success people</h3>
        </div>
      </div>
    </>
  );
}
