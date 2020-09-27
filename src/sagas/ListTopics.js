import { put, call, takeEvery, select } from "redux-saga/effects";

import { setTopics, setTopicsError } from "../actions";
import { TOPICS } from "../constants";
import { fetchTopics } from "../api";

export function* handleTopicsLoad() {
  const idTopics = window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 1
  ];

  try {
    const data = yield call(fetchTopics, idTopics); // phải viết call(fetchTopics, idTopics) thay vì call(fetchTopics(idTopics))
    yield console.log(data);
  } catch (error) {
    // yield put(setTopicsError(error.toString()));
    console.log(error);
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(TOPICS.LOAD, handleTopicsLoad);
}
