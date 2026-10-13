// Seul fichier à modifier. Firebase Console > Paramètres du projet > Tes applis > Web.
// Ces valeurs ne sont pas secrètes : la sécurité vient des règles de la base.
const FIREBASE_CONFIG = {
  apiKey: "TA_CLE",
  authDomain: "ton-projet.firebaseapp.com",
  databaseURL: "https://ton-projet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ton-projet",
  appId: "TON_APP_ID"
};

// Serveurs de relais audio. Le TURN est conseillé pour les joueurs en 4G / box stricte.
// Gratuit : https://www.metered.ca/tools/openrelay/  (décommente et remplis)
const ICE = { iceServers: [
  { urls: "stun:stun.l.google.com:19302" }
  // , { urls: "turn:TON_TURN:443", username: "xxx", credential: "xxx" }
]};
