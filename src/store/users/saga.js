import { takeLatest, call, put, select } from "redux-saga/effects";

import { firebaseService } from "services/firebaseService";
import { FIREBASE_DATA_USERS, FIREBASE_DATA_HOMEWORK } from "constants/firebase";

import { USERS } from "./constants";
import {
    initUsersSuccess,
    initUsersFailure,
    addUserSuccess,
    addUserFailure,
    deleteUserFailure,
    deleteUserSuccess,
    editUserSuccess,
    editUserFailure,
    addPaymentSuccess,
} from "./actions";

function* initUsersSaga() {
    try {
        const dataSnapshot = yield call(firebaseService.get, FIREBASE_DATA_USERS);
        const users = [];

        dataSnapshot.forEach((item) => {
            users.push({ id: item.id, ...item.data() });
        });

        yield put(initUsersSuccess(users));
    } catch (error) {
        yield put(initUsersFailure(error.message));
    }
}

function* addUserSaga({ payload }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_USERS, payload.user);
        yield put(addUserSuccess(payload.user));
    } catch (error) {
        yield put(addUserFailure(error.message));
    }
}

function* deleteUserSaga({ payload }) {
    try {
        yield call(firebaseService.delete, FIREBASE_DATA_USERS, payload.id);
        yield put(deleteUserSuccess(payload.id));
    } catch (error) {
        yield put(deleteUserFailure(error.message));
    }
}

function* editUserSaga({ payload: { user } }) {
    try {
        yield call(firebaseService.update, FIREBASE_DATA_USERS, user.id, user, { merge: true });
        yield put(editUserSuccess(user));
    } catch (error) {
        yield put(editUserFailure(error.message));
    }
}

function* addPaymentSaga({ payload: { payment } }) {
    try {
        const users = yield select((state) => state.users.data);
        const userById = users.find(({ id }) => id === payment.userId);
        const updatedUser = {
            ...userById,
            payments: userById.payments ? [...userById.payments, payment] : [payment],
        };
        yield call(firebaseService.update, FIREBASE_DATA_USERS, payment.userId, updatedUser, {
            merge: true,
        });
        yield put(addPaymentSuccess(updatedUser));
    } catch (error) {}
}

function* sendHomework({ payload: { hw } }) {
    try {
        yield call(firebaseService.add, FIREBASE_DATA_HOMEWORK, hw);
    } catch (error) {
        console.log(error);
    }
}

export const usersSaga = [
    takeLatest(USERS.INIT.IDLE, initUsersSaga),
    takeLatest(USERS.ADD.IDLE, addUserSaga),
    takeLatest(USERS.DELETE.IDLE, deleteUserSaga),
    takeLatest(USERS.EDIT.IDLE, editUserSaga),
    takeLatest(USERS.ADD_PAYMENT.IDLE, addPaymentSaga),
    takeLatest(USERS.SEND_HOMEWORK.IDLE, sendHomework),
];
