import vovaAvatar from "assets/images/vova_avatar.webp";
import volodymyrAvatar from "assets/images/volodymyr_avatar.webp";
import sophia from "assets/images/sophia.jpeg";

const translations = {
    ua: [
        {
            name: "Софія",
            instUsername: "@sofiakaniuk",
            avatar: sophia,
            description: (
                <>
                    Нещодавно <strong>підписала контракт з англомовним клієнтом</strong>, з яким
                    сама працювала. Можу говорити з ним по 45 хвилин і взагалі ніякого дискомфорту
                    немає. Під час дзвінків я знаю, що навіть якщо щось не знатиму на англ, то зможу
                    це пояснити і все буде окей.
                </>
            ),
            alt: "Софія, студентка школи розмовної англійської wannablab",
        },
        {
            name: "Вова",
            avatar: vovaAvatar,
            instUsername: "@vovaivanov_17",
            description: (
                <>
                    Мій рівень на тестуванні оцінили в А2. Ціллю була робота, пов’язана із
                    комунікацією англійською. Через 2 місяці занять я{" "}
                    <strong>успішно пройшов співбесіду</strong> та працюю sales менеджером і далі
                    вивчаю англійську.
                </>
            ),
            alt: "Вова, студент школи розмовної англійської wannablab",
        },
        {
            name: "Володимир",
            instUsername: "@volodymyr_shyshko_",
            avatar: volodymyrAvatar,
            description: (
                <>
                    Я навчився <strong>думати англійською</strong> на побутовому рівні. Навіть вдома
                    я намагаюся проговорювати назви предметів англійською. Зараз я переписуюся зі
                    своїм знайомим з Лондону і мені вже не потрібен для цього перекладач. Скоро ми
                    плануємо зустрітися, тому це для мене ще один стимул вдосконалювати мову.{" "}
                </>
            ),
            alt: "Володимир, студент школи розмовної англійської wannablab",
        },
    ],
};

export default translations;
