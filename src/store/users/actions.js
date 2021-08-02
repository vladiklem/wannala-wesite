import { USERS } from "./constants";

export const initUsers = () => ({
    type: USERS.INIT.IDLE,
});

export const initUsersSuccess = (users) => ({
    type: USERS.INIT.SUCCESS,
    payload: {
        users,
    },
});

export const initUsersFailure = (error) => ({
    type: USERS.INIT.FAILURE,
    payload: {
        error,
    },
});

export const addUser = (user) => ({
    type: USERS.ADD.IDLE,
    payload: {
        user,
    },
});

export const addUserSuccess = (user) => ({
    type: USERS.ADD.SUCCESS,
    payload: {
        user,
    },
});

export const addUserFailure = (error) => ({
    type: USERS.ADD.FAILURE,
    payload: {
        error,
    },
});

export const deleteUser = (id) => ({
    type: USERS.DELETE.IDLE,
    payload: {
        id,
    },
});

export const deleteUserSuccess = (id) => ({
    type: USERS.DELETE.SUCCESS,
    payload: {
        id,
    },
});

export const deleteUserFailure = (error) => ({
    type: USERS.DELETE.FAILURE,
    payload: {
        error,
    },
});

export const editUser = (user) => ({
    type: USERS.EDIT.IDLE,
    payload: {
        user,
    },
});

export const editUserSuccess = (user) => ({
    type: USERS.EDIT.SUCCESS,
    payload: {
        user,
    },
});

export const editUserFailure = (error) => ({
    type: USERS.EDIT.FAILURE,
    payload: {
        error,
    },
});

export const addPayment = (payment) => ({
    type: USERS.ADD_PAYMENT.IDLE,
    payload: {
        payment,
    },
});

export const addPaymentSuccess = (user) => ({
    type: USERS.ADD_PAYMENT.SUCCESS,
    payload: {
        user,
    },
});

export const sendHomework = (hw) => ({
    type: USERS.SEND_HOMEWORK.IDLE,
    payload: {
        hw,
    },
});
