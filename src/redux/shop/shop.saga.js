import { takeLatest, call, put } from "redux-saga/effects"

// take() 
//  - wait to a specific action to get the payload from the action and gives us back the actual payload value if we had one
//  - from the second call anything after take doesn t run
// takeEvery() -
//  - every time we run the action is looping for every call because they are in separate functions ( takeEvery listen to all actions )
// takeLatest() -
//  - it will cancel the previous action and only fire the last one

import ShopActionTypes from "./shop.types"

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}