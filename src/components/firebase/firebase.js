// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, getDocs, collection, addDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBoz45LuoovvmNhn72CKeWaP-Voo--VOo",
  authDomain: "e-commerce-react-3d93a.firebaseapp.com",
  projectId: "e-commerce-react-3d93a",
  storageBucket: "e-commerce-react-3d93a.appspot.com",
  messagingSenderId: "788815379540",
  appId: "1:788815379540:web:4cb4be327adb87819041c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Obtener un producto

// export async function getSingleProduct(id) {
//     const documentRef = doc(db, 'products', id);

//     try{
//         const snapshot = await getDoc (documentRef);
//         if (snapshot.exists()){
//             return snapshot.data();
//         } else {
//             console.log("El documento no existe");
            
//         }
        
//     } catch(error){
//         console.log("Error:", error);
//     }   
// }

// Obtener toda una coleccion

export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection (db, 'products'));
        const productsList = querySnapshot.docs.map(doc => {

            return {
                id: doc.id,
                ...doc.data()
            }
        })
        return productsList;
    }
            
        
        
     catch(error){
        console.log("Error:", error);
    }   
}

// Enviar una orden de pedido

export async function sendOrder (order) {
    const ordersCollection = collection (db, 'orders');

    try{
        const docRef = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada: ' + docRef.id);
        return docRef.id
    } catch (error) {
        console.log('error al agregar el documento: ' + error);
        

    }
}