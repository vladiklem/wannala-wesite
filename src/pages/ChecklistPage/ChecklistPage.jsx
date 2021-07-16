import React, { Fragment } from "react";
import cx from "classnames";

import checklist from "assets/images/checklist.jpeg";
import goal from "assets/images/goal.png";
import vocabulary from "assets/images/vocabulary.png";
import learning from "assets/images/learning.png";
import mistakes from "assets/images/mistakes.png";
import regularity from "assets/images/regularity.png";

import styles from "./ChecklistPage.module.scss";

const ChecklistPage = () => {
    return (
        <Fragment>
            <div className={styles.container}>
                <img src={checklist} alt="Checklist" className={styles.backgroundImage} />
                <h1 className={cx("py-2", styles.h1)}>
                    Як <span className={styles.headingText}>НЕ</span> потрібно вивчати англійську
                </h1>
            </div>
            <div className={styles.sectionContainer}>
                <div className="container">
                    <section className={styles.section}>
                        <h2 className={styles.h2}>1. Забувати про ціль</h2>
                        <div>
                            <p>Постав собі запитання: "Навіщо мені англійська?"</p>
                            <p>
                                <img
                                    src={goal}
                                    alt="goal"
                                    width="160px"
                                    className={styles.sectionImageRight}
                                />
                                Чітка ціль дає мотивацію до навчання. Часто буває, що через пару
                                місяців початковий ентузіазм пропадає, а за цей час результати ще
                                можуть не встигнути проявитися. А якщо результату не видно, то
                                пропадає і бажання вчитися. Тут інколи складається хибне враження,
                                що «мови - це не моє».
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.h2}>2. Зубрити слова окремо від контексту</h2>
                        <div>
                            <p>
                                Запам'ятовувати значення слів, як вони написані в словнику, - це
                                марна справа. Половина зі значень взагалі не використовується в
                                сучасній мові, а ще частину потрібно використовувати в чітко
                                визначених ситуаціях.
                            </p>
                            <p>
                                <img
                                    src={vocabulary}
                                    alt="vocabulary"
                                    width="150px"
                                    className={styles.sectionImageLeft}
                                />
                                При спілкуванні мозок згадає фразу, а не складиме її з окремих слів,
                                тому запам'ятовуй цілі фрази у контексті і старайся відчувати його
                                настрій.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.h2}>3. Більше теорії, менше практики</h2>
                        <div>
                            <p>
                                У багатьох людей складається враження,
                                <img
                                    src={learning}
                                    alt="learning"
                                    width="210px"
                                    className={styles.sectionImageRight}
                                />
                                що процес вивчення мови складається тільки із вивчення слів,
                                письмового перекладу і виконання письмових вправ. Так забувають про
                                не менш важливі осболивості вивчення:
                            </p>
                            <ul>
                                <li>
                                    <b>Сприйняття мови.</b> Коли на слух можна зрозуміти, чого від
                                    тебе хоче іноземець.
                                </li>
                                <li>
                                    <b>Навичка думати англійською.</b> Без цього не вийде добре
                                    говорити, адже мозок буде весь час намагатися створювати фрази
                                    рідною мовою і переводити їх на англійську.
                                </li>
                                <li>
                                    <b>Вміле використання словникового запасу.</b> Часто учні
                                    використовують тільки одне слово просто тому, що не відчувають
                                    різниці між синонімами.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.h2}>4. Боятися робити помилки</h2>
                        <div>
                            <p>
                                Помилки - це важлива частина навчального процесу,
                                <img
                                    src={mistakes}
                                    alt="mistakes"
                                    width="120px"
                                    className={cx("mr-2", styles.sectionImageLeft)}
                                />
                                без якої обійтися ну ніяк не вийде. Наш мозок не в змозі ідеально
                                запам'ятовувати і відтворювати всю інформацію, яка в нього
                                потрапляє. Деякі факти забуваються, і спочатку ти будеш багато
                                помилятися в значеннях слів, граматиці і орфографії.
                            </p>
                            <p>
                                Але це цілком нормально. На тебе ніхто не буде показувати пальцем,
                                якщо ти раптом забудеш три форми неправильного дієслова.
                            </p>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.h2}>5. Забувати про систематичність</h2>
                        <div>
                            <p>
                                Краще займатися кожен день по 20 хвилин, ніж раз на тиждень по 4
                                години. Тут вся справа в особливостях сприйняття інформації мозком.
                                <img
                                    src={regularity}
                                    alt="regularity"
                                    width="130"
                                    className={cx("ml-1", styles.sectionImageRight)}
                                />
                                &nbsp;Перші 40 хвилин заняття - найпродуктивніші. В цей час мозок
                                працює дуже активно: запам'ятовує інформацію, будує логічні і
                                асоціативні ланцюжки, відмінно сприймає нюанси і відтінки мови.
                                Після 80 хвилин занять він працюватиме на 50% своїх можливостей.
                                Заняття раз на тиждень не дозволяють мозку сформувати стійкі
                                осередки пам'яті, а за тиждень без занять ти бдуеш втрачати до 80%
                                вивченої інформації.
                            </p>
                            <p>
                                20 хвилин по дорозі на роботу або під час обідньої перерви - це не
                                так вже й багато, а результати зможуть тебе приємно здивувати.
                            </p>
                        </div>
                    </section>
                    <footer className={styles.footer}>
                        <h2 className={styles.text}>@eng.wannablab</h2>
                    </footer>
                </div>
            </div>
        </Fragment>
    );
};

export default ChecklistPage;
