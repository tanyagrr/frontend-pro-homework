import { call, put, takeLatest } from 'redux-saga/effects';

async function fetchTodosAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 10);
}

function* fetchTodos(action) {
  try {
    const todos = yield call(fetchTodosAPI)
    yield put({ type: 'TODOS_FETCH_SUCCEEDED', payload: todos })
  } catch (e) {
    yield put({ type: 'TODOS_FETCH_FAILED', message: e.message })
  }
}

function* rootSaga() {
  yield takeLatest('TODOS_FETCH_REQUESTED', fetchTodos)
}

export default rootSaga;