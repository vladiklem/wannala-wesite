export const FIREBASE_DATA_USERS = "users";

export const FIREBASE_DATA_EVENTS = "events";

export const FIREBASE_DATA_GROUPS = "groups";

export const FIREBASE_DATA_LEADS = "leads";

export const FIREBASE_DATA_PROBLEMS = "problems";

export const FIREBASE_DATA_HOMEWORK = "homework";

export const FIREBASE_DATA_APP = {
    SLUG: "app",
    TEST_TIME: "testTime",
};

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: "wannablab-website-8e808.firebaseapp.com",
    projectId: "wannablab-website-8e808",
    storageBucket: "wannablab-website-8e808.appspot.com",
    messagingSenderId: "436058263708",
    measurementId: "G-E0NVY9XEEZ",
};
