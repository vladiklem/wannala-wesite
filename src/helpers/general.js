export const scrollToTop = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

export const isNewLead = (status) => ["new", "new-quiz", "new-level-test"].includes(status);

export const detectLang = () => "ua";
// ["ua", "ru"].includes(window.navigator.language.toLowerCase())
//     ? window.navigator.language
//     : "ua";
