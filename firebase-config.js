// Seul fichier à modifier. Firebase Console > Paramètres du projet > Tes applis > Web.
// Ces valeurs ne sont pas secrètes : la sécurité vient des règles de la base.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD7PVB0ALzoq-urM_5sSZiVdapTcpPMi-Q",
  authDomain: "radio-rp-c412d.firebaseapp.com",
  databaseURL: "https://radio-rp-c412d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "radio-rp-c412d",
  storageBucket: "radio-rp-c412d.firebasestorage.app",
  messagingSenderId: "166965592356",
  appId: "1:166965592356:web:acb11ae323c8eb4c0a33b1"
};

// Serveurs de relais audio. Le TURN est conseillé pour les joueurs en 4G / box stricte.
// Gratuit : https://www.metered.ca/tools/openrelay/  (décommente et remplis)
const ICE = { iceServers: [
  { urls: "stun:stun.l.google.com:19302" }
  // , { urls: "turn:TON_TURN:443", username: "xxx", credential: "xxx" }
]};
