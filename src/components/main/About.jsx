import style from "./main.module.css";
import SliderAbout from "./sliderAbout/SliderAbout";

export default function About() {
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
              src="about3b.jpg"
              alt="about me photo"
              className={style.about_img3}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, iusto
              cumque ipsum fugiat eligendi accusamus quasi nulla assumenda unde,
              consequatur atque voluptatibus aperiam? Eligendi maiores tempora
              officiis neque pariatur error. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. At, iusto cumque ipsum fugiat
              eligendi accusamus quasi nulla assumenda unde, consequatur atque
              voluptatibus aperiam? Eligendi maiores tempora officiis neque
              pariatur error. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At, iusto cumque ipsum fugiat eligendi accusamus quasi nulla
              assumenda unde, consequatur atque voluptatibus aperiam? Eligendi
              maiores tempora officiis neque pariatur error.
            </p>
          </p>

          <h3 className={style.about_h3}>Диплом і сертифікати</h3>
          <SliderAbout />
        </div>
      </div>
    </>
  );
}
