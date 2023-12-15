// Importa las funciones necesarias de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Añade los SDKs para los productos de Firebase que deseas utilizar
// Por ejemplo, si también necesitas Firestore, puedes importarlo así:
// import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase (debes cambiar estos valores con tus propias credenciales)
const firebaseConfig = {
    apiKey: "AIzaSyAOXNtM4_80dbsPH3zYfALo6O7gNwKoZ-I",
    authDomain: "xportabla.firebaseapp.com",
    projectId: "xportabla",
    storageBucket: "xportabla.appspot.com",
    messagingSenderId: "684712307153",
    appId: "1:684712307153:web:ca928d20a048419b7098f0",
    measurementId: "G-WFZN3SRVM8"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Analytics si lo necesitas
const analytics = getAnalytics(app);

// Si también necesitas Firestore, puedes inicializarlo así:
// const db = getFirestore(app);
