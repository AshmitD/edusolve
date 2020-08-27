import FirebaseKeys from './Config'
import * as firebase from 'firebase'

import 'firebase/firestore';
import { Alert } from 'react-native'

class Fire {
    constructor() {
        
    }
    get firestore() {
        return firebase.firestore()
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }

    get timestamp() {
        return Date.now()
    }
    createStore = async ({ name, descrip, coupons, linkToWebsite, address, products }) => {
        console.log("this is everything", name, descrip, coupons, linkToWebsite, address, products)
        return new Promise((res, rej) => {

            this.firestore.collection("stores").add({
                name: name,
               "description": descrip,
              coupons,
              linkToWebsite,
              "location": address,
              products,
              email: 'abhinavkeswani4@gmail.com',
              searchThrough: products + ', ' + name + ', ' + address + ', ' + descrip
            })
        })
    }
    getStore = async () => {

        return new Promise((res, rej) => {
            firebase.firestore().collection("stores").where("email", "==",'abhinavkeswani4@gmail.com')
                .get()
                .then(function (querySnapshot) {
                    //TODO MAKE THIS HANDLE THE CASE WHEN THERE ARE NO DOCUMENTS. IF YOU ARE ERRORING USING THIS METHOD, THAT MIGHT BE THE CAUSE.
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        
                        res({ id: doc.id, user: doc.data() });
                    
                    });
                })
                .catch(function (error) {
                    rej("Error getting documents: ", error);
                });
        })
    }

    allStores = async () => {
        const snapshot = await firebase.firestore().collection('stores').get()
        return snapshot.docs.map(doc => doc.data());
    }
}


Fire.shared = new Fire()
export default Fire
