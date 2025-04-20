// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB3eTZTBPLSAxcGrqHMBnIHSf1YSGHwyPg",
  authDomain: "perfume-misterioso.firebaseapp.com",
  databaseURL: "https://perfume-misterioso-default-rtdb.firebaseio.com",
  projectId: "perfume-misterioso",
  storageBucket: "perfume-misterioso.firebasestorage.app",
  messagingSenderId: "618238888581",
  appId: "1:618238888581:web:8ba1a6f45b6b0cd59977ec"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Usa o Realtime Database
const db = firebase.database();

// Função de resposta
function responder(escolha) {
  const respostaRef = db.ref("respostas_fagundes").push();
  respostaRef.set({
    escolha: escolha,
    timestamp: new Date().toISOString()
  }).then(() => {
    if (escolha === 'coxinha') window.location.href = 'https://antonymendes.github.io/fagundes';
    if (escolha === 'culto') window.location.href = 'https://antonymendes.github.io/fagundes-culto';
    if (escolha === 'cinema') window.location.href = 'https://antonymendes.github.io/fagundes-cinema';
    if (escolha === 'jantar') window.location.href = 'https://antonymendes.github.io/fagundes-jantar';
  });
}
