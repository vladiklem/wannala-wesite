const events = {
    CALL_LATER: {
        category: "Homepage",
        action: "Clicked Замовити дзвінок",
    },
    JOIN_LEVEL_TEST: {
        category: "Level Test",
        action: "Open Level Test page",
    },
    JOIN_QUIZ: {
        category: "Quiz",
        action: "Open Quiz page",
    },
    READ_MORE_ABOUT_COURSE: {
        category: "Homepage",
        action: "Clicked Більше про курс",
    },
    WANT_THIS_COURSE: {
        category: "Course",
        action: "Clicked Хочу курс",
    },
    READ_MORE_ABOUT_TEACHER: {
        category: "Homepage",
        action: "Clicked Більше про ментора",
    },
    TOP_NAVIGATION_MENU: {
        category: "Navigation Menu",
        action: "Clicked Top Navigation",
    },
    LEAD_FORM_SUBMIT: (category, action) => ({
        category: category || "Lead Form",
        action: action || "Lead Submitted",
    }),
    IT_COURSE_SIGNUP: {
        category: "IT landing",
        action: "IT Drawer opened",
    },
    IT_COURSE_OPENED: {
        category: "IT landing",
        action: "Landing Opened"
    },
};

export default events;
