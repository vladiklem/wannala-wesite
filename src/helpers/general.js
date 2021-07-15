export const scrollToTop = () =>
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });

export const isNewLead = (status) => ["new", "new-quiz", "new-level-test"].includes(status);

export const getBrowserId = () => {
    var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
        sUsrAg = navigator.userAgent,
        nIdx = aKeys.length - 1;

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return nIdx;
};

export const detectLang = () => "ua";
// ["ua", "ru"].includes(window.navigator.language.toLowerCase())
//     ? window.navigator.language
//     : "ua";
