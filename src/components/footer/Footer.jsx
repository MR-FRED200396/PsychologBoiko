import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className={style.footer_wraper}>
        <h1>footer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          obcaecati neque reiciendis deleniti quo ab officiis porro facere
          provident, numquam, repudiandae aut accusantium dolor? Natus libero ab
          repudiandae fugiat consequatur!
        </p>
      </div>
      <h1>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTelegram} />
      </h1>
    </>
  );
}
