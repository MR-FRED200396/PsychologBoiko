import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const objectSocialMedia = {
    instagram: "https://instagram.com/psycholog.boiko?igshid=MzRlODBiNWFlZA==",
    telegram: "https://t.me/psycholog_boiko",
    facebook: "https://www.facebook.com/psycholog.vinn",
  };

  function goToSocialMedia(event) {
    for (let key in objectSocialMedia) {
      if (event.target.dataset.icon === key) {
        window.location.assign(objectSocialMedia[key]);
      }
    }
  }
  return (
    <>
      <div className={style.footer_wraper}>
        <h2 className={style.social_media_icons}>
          <FontAwesomeIcon
            icon={faFacebook}
            onClick={goToSocialMedia}
            title="Facebook"
          />
        </h2>
        <h2 className={style.social_media_icons}>
          <FontAwesomeIcon
            icon={faInstagram}
            onClick={goToSocialMedia}
            title="Instagram"
          />
        </h2>
        <h2 className={style.social_media_icons}>
          <FontAwesomeIcon
            icon={faTelegram}
            onClick={goToSocialMedia}
            title="Telegram"
          />
        </h2>
        <div className={style.allRightProtect_Wraper}>
          <p className={style.allRightProtect}>
            &copy; 2023 всі права захижені
          </p>
        </div>
      </div>
    </>
  );
}
