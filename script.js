const firebaseConfig = {
  apiKey: "AIzaSyB3eTZTBPLSAxcGrqHMBnIHSf1YSGHwyPg",
  authDomain: "perfume-misterioso.firebaseapp.com",
  databaseURL: "https://perfume-misterioso-default-rtdb.firebaseio.com",
  projectId: "perfume-misterioso",
  storageBucket: "perfume-misterioso.appspot.com", // ✅ aqui está corrigido
  messagingSenderId: "618238888581",
  appId: "1:618238888581:web:8ba1a6f45b6b0cd59977ec"
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
