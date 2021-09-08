import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBaqzo2e6Chl6URzJJDhbU78OIba5fhCfQ",
    authDomain: "ecommerceapp-c9736.firebaseapp.com",
    projectId: "ecommerceapp-c9736",
    storageBucket: "ecommerceapp-c9736.appspot.com",
    messagingSenderId: "1005553059099",
    appId: "1:1005553059099:web:62488d63dc8b17b5427fbe",
    measurementId: "G-3T5EYZ0L45"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;