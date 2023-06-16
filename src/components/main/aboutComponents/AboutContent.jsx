import style from "./aboutComponents.module.css";

export default function AboutContent() {
  return (
    <>
      <div className={style.about_wraper}>
        <h3 className={style.about_h3}>Привіт</h3>
        <div className={style.about_content}>
          <p className={style.about_p}>
            <p>
              Ну що ж пропоную познайомитись трохи ближче. Мене звати Іра, я
              психолог. Працюю в Гештальт підході. Але так було не завжди.
            </p>
            <img
              src="about1.jpeg"
              alt="about me photo"
              className={style.about_img}
            />
            <p>
              В дитинстві я мріяла стати cпочатку ветеринаром. Але я усвідомила,
              що щоб зробити тварині добре, спочатку треба зробити їй боляче, а
              я надто вразлива до таких речей. Потім моєю мрією була професія
              акторки. Слава богу, само пройшло. В 10-11 класі, коли переді мною
              стояло питання куди поступати, я не мала жодного поняття (і нічого
              дивного, мені було всього 16 років). Міжнародні відносини? А чому
              б ні, звучить гарно, давайте. Приблизно так і було. . Тільки у 22
              річному віці, до мене почало приходити усвідомлення чим я хочу
              займатись. І я поступила на психологію. . Чи це і є та сама
              професія мого життя? Не знаю. Але знаю точно, що це одна з
              небагатьох професій, в якій людина постійно пізнає себе. Це
              Безцінно.
            </p>
            <img
              src="about2.jpg"
              alt="about me photo"
              className={style.about_img2}
            />
            <p>
              Отже, я
              <ul>
                <li> магістр психології в КНТЕУ </li>
                <li>
                  гештальт психотерапевт в процесі навчання в КГУ (ІІ ступінь)
                </li>
                <li></li>
              </ul>
              Також закінчила курси:
              <ul>
                <li> курс по роботі з тривогою та панічними атаками</li>
                <li>курс розлади харчової поведінки</li>
                <li>
                  семінар по кризовій підтримці та роботі з травматичним
                  досвідом під час військових дій.
                </li>
              </ul>
            </p>
            <img
              src="about3b.jpg"
              alt="about me photo"
              className={style.about_img3}
            />
            <p>
              Також додам трохи цікавих фактів про мене. По перше, я
              інтроверт.Обожнюю водити машину. Для мене це кайф в чистому
              вигляді. Сарказм - моє друге ім’я. Чи це захисна реакція мозку, чи
              просто моя ізюминка, я ще не розібралась. Не люблю їсти/пити з
              пластику. Я ненавиджу мити волосся, дай бог здоров’я тій людині,
              яка придумала сухий шампунь. Люблю смачно матюкнутись. В сумці
              завжди таскаю з собою книжку. Не скажу, що часто її читаю, але
              мені так спокійніше. Я мінімаліст. Хазяйка з мене така собі(все
              вмію робити, але шкода тратити на домашні справи свій час).
            </p>
          </p>
        </div>
      </div>
    </>
  );
}