
// Firebase config vai aqui
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function responder(escolha) {
  db.collection("respostas_fagundes").add({
    escolha: escolha,
    timestamp: new Date()
  }).then(() => {
    if (escolha === 'coxinha') window.location.href = 'https://antonymendes.github.io/fagundes';
    if (escolha === 'culto') window.location.href = 'https://antonymendes.github.io/fagundes-culto';
    if (escolha === 'cinema') window.location.href = 'https://antonymendes.github.io/fagundes-cinema';
    if (escolha === 'jantar') window.location.href = 'https://antonymendes.github.io/fagundes-jantar';
  });
}
