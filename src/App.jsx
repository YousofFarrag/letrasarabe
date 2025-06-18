import React, { useState } from 'react';
import './index.css';

const QUESTIONS = [
  { question: "¿Cuál de estas letras tiene el sonido 'alif'?", options: ["ب", "ت", "أ", "ث"], correctAnswer: "أ" },
  { question: "La letra que suena como la 'b' en español es ______.", options: ["ت", "ب", "ث", "ن"], correctAnswer: "ب" },
  { question: "¿Qué letra representa el sonido 't' suave, como en 'tela'?", options: ["د", "ط", "ت", "ث"], correctAnswer: "ت" },
  { question: "La letra árabe que se pronuncia como la 'th' sorda en inglés (como en 'think') es ______.", options: ["س", "ش", "ص", "ث"], correctAnswer: "ث" },
  { question: "¿Cuál de estas letras tiene el sonido 'j' (como en 'joy')?", options: ["ح", "خ", "ج", "ع"], correctAnswer: "ج" },
  { question: "La letra con un sonido 'h' gutural fuerte (como un suspiro desde la garganta) es ______.", options: ["ه", "ح", "خ", "غ"], correctAnswer: "ح" },
  { question: "¿Qué letra suena como la 'j' fuerte española o la 'ch' en 'loch' escocés?", options: ["ج", "ح", "خ", "ع"], correctAnswer: "خ" },
  { question: "El sonido 'd' suave (como en 'dedo') corresponde a la letra ______.", options: ["ذ", "ض", "د", "ظ"], correctAnswer: "د" },
  { question: "La letra árabe que se pronuncia como la 'th' sonora en inglés (como en 'this') es ______.", options: ["د", "ز", "ذ", "ظ"], correctAnswer: "ذ" },
  { question: "La letra árabe que tiene un sonido 'r' vibrante (como la 'r' en 'perro') es ______.", options: ["ل", "ن", "ر", "ز"], correctAnswer: "ر" },
  { question: "¿Qué letra tiene el sonido 'z' en inglés (como en 'zebra')?", options: ["س", "ش", "ز", "ص"], correctAnswer: "ز" },
  { question: "El sonido 's' suave (como en 'sol') es representado por ______.", options: ["ص", "س", "ش", "ظ"], correctAnswer: "س" },
  { question: "¿Cuál de estas letras se pronuncia como 'sh', X in Galego (como en 'show')?", options: ["س", "ش", "ص", "ث"], correctAnswer: "ش" },
  { question: "La letra con un sonido 's' enfático o 'grueso' es ______.", options: ["س", "ش", "ص", "ز"], correctAnswer: "ص" },
  { question: "¿Qué letra árabe tiene un sonido 'd' enfático y profundo?", options: ["د", "ذ", "ض", "ظ"], correctAnswer: "ض" },
  { question: "El sonido 't' enfático y 'grueso' es de la letra ______.", options: ["ت", "ث", "ط", "ظ"], correctAnswer: "ط" },
  { question: "¿Cuál letra se pronuncia como una 'th' enfática (similar a la 'th' en 'this', pero con la lengua más atrás)?", options: ["ذ", "ض", "ط", "ظ"], correctAnswer: "ظ" },
  { question: "La letra gutural que no tiene equivalente directo en español, producida en la parte posterior de la garganta, es ______.", options: ["ح", "خ", "ع", "غ"], correctAnswer: "ع" },
  { question: "¿Qué letra árabe tiene un sonido gutural similar a la 'r' francesa?", options: ["ع", "ق", "غ", "خ"], correctAnswer: "غ" },
  { question: "El sonido 'f' (como en 'foco') corresponde a la letra ______.", options: ["ب", "ف", "م", "ن"], correctAnswer: "ف" },
  { question: "¿Cuál es la letra con un sonido 'q' gutural, más profundo que una 'k' normal?", options: ["ك", "ق", "غ", "خ"], correctAnswer: "ق" },
  { question: "La letra que suena como una 'k' normal (como en 'casa') es ______.", options: ["ق", "ك", "خ", "غ"], correctAnswer: "ك" },
  { question: "El sonido 'l' (como en 'lápiz') es de la letra ______.", options: ["ر", "م", "ل", "ن"], correctAnswer: "ل" },
  { question: "¿Qué letra representa el sonido 'm' (como en 'mano')?", options: ["ب", "ف", "م", "و"], correctAnswer: "م" },
  { question: "La letra árabe que suena como 'n' (como en 'nariz') es ______.", options: ["ل", "م", "ن", "ه"], correctAnswer: "ن" },
  { question: "¿Cuál de estas letras tiene un sonido 'h' suave y aspirado (como en 'hola')?", options: ["ح", "خ", "ه", "ع"], correctAnswer: "ه" },
  { question: "La letra que suena como 'w' (como en 'water') o una 'u' larga es ______.", options: ["ي", "و", "ا", "ه"], correctAnswer: "و" },
  { question: "¿Qué letra representa el sonido 'y' (como en 'yate') o una 'i' larga?", options: ["ا", "و", "ي", "ه"], correctAnswer: "ي" },
  { question: "La 'hamza' (ء) representa un sonido de ______.", options: ["unión", "pausa glotal", "silencio", "aspiración"], correctAnswer: "pausa glotal" }
];

function getRandomQuestions(arr, n) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

function App() {
  const [step, setStep] = useState('start');
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  // Start quiz handlers
  const startQuiz = (type) => {
    if (type === 'random') setQuestions(getRandomQuestions(QUESTIONS, 10));
    else if (type === 'first10') setQuestions(QUESTIONS.slice(0, 10));
    else if (type === 'second10') setQuestions(QUESTIONS.slice(10, 20));
    else if (type === 'last9') setQuestions(QUESTIONS.slice(20, 29));
    setCurrent(0);
    setScore(0);
    setStep('quiz');
    setSelected(null);
    setChecked(false);
    setShowCorrect(false);
  };

  // Quiz logic
  const handleSelect = (option) => {
    if (!checked) setSelected(option);
  };
  const handleCheck = () => {
    if (selected) {
      setChecked(true);
      if (selected === questions[current].correctAnswer) setScore(s => s + 1);
    }
  };
  const handleNext = () => {
    if (current === questions.length - 1) setStep('result');
    else {
      setCurrent(c => c + 1);
      setSelected(null);
      setChecked(false);
      setShowCorrect(false);
    }
  };
  const handleShowCorrect = () => setShowCorrect(true);
  const handleRestart = () => startQuiz('random');
  const handleHome = () => setStep('start');

  // UI
  return (
    <div className="main-bg">
      <div className="center-card">
        <h1 className="main-title">اَلْحُرُوفُ اَلْعَرَبِيَّةُ</h1>
        {step === 'start' && (
          <>
            <p className="desc">اِخْتَبِرْ مَعْرِفَتَكَ بِالْحُرُوفِ اَلْعَرَبِيَّةِ</p>
            <div className="start-btns">
              <button className="main-btn" onClick={() => startQuiz('random')}>اِمْتِحَانٌ </button>
              <button className="main-btn alt" onClick={() => startQuiz('first10')}>اِمْتِحَانُ أَوَّلِ ١٠ حُرُوفٍ</button>
              <button className="main-btn alt" onClick={() => startQuiz('second10')}>اِمْتِحَانُ ثَانِي ١٠ حُرُوفٍ</button>
              <button className="main-btn alt" onClick={() => startQuiz('last9')}>اِمْتِحَانُ آخِرِ ٩ حُرُوفٍ</button>
            </div>
          </>
        )}
        {step === 'quiz' && (
          <div>
            <div className="q-counter" style={{marginBottom: '1.2em', marginTop: '0.5em'}}>
              اَلسُّؤَالُ {current + 1} مِنْ {questions.length}
            </div>
            <div className="question-box">
              <div className="q-text" dir="ltr" style={{marginBottom: '1.2em', marginTop: '0.5em'}}>
                {questions[current].question}
              </div>
              <div className="options-row">
                {questions[current].options.map((option, idx) => (
                  <button
                    key={idx}
                    className={`option-btn${selected === option ? ' selected' : ''}`}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {checked && (
                selected === questions[current].correctAnswer ? (
                  <div className="feedback correct" style={{marginTop: '1.2em', marginBottom: '1.2em'}}>إِجَابَةٌ صَحِيحَةٌ! أَحْسَنْتَ!</div>
                ) : (
                  <div className="feedback wrong" style={{marginTop: '1.2em', marginBottom: '1.2em'}}>
                    إِجَابَةٌ خَاطِئَةٌ.
                    {!showCorrect ? (
                      <button className="show-btn" style={{display: 'block', width: '90%', maxWidth: '350px', margin: '0.5em auto'}} onClick={handleShowCorrect}>عَرْضُ الإِجَابَةِ اَلصَّحِيحَةِ</button>
                    ) : (
                      <>
                        <p className="correct-answer-label">الإِجَابَةُ اَلصَّحِيحَةُ هِيَ:</p>
                        <span className="correct-answer-value">{questions[current].correctAnswer}</span>
                      </>
                    )}
                  </div>
                )
              )}
              <div className="quiz-actions">
                {!checked && <button className="main-btn" onClick={handleCheck} disabled={!selected}>تَحَقَّقْ مِنَ الإِجَابَةِ</button>}
                {checked && <button className="main-btn" onClick={handleNext}>{current === questions.length - 1 ? "عَرْضُ اَلنَّتِيجَةِ" : "اَلسُّؤَالُ اَلتَّالِي"}</button>}
                <button className="main-btn alt home" onClick={handleHome}>اَلصَّفْحَةُ اَلرَّئِيسِيَّةُ</button>
              </div>
            </div>
          </div>
        )}
        {step === 'result' && (
          <>
            <div className="result-title" style={{marginBottom: '1.2em', marginTop: '0.5em'}}>اَلنَّتِيجَةُ اَلنِّهَائِيَّةُ</div>
            <div className="result-score" style={{marginBottom: '1.2em', marginTop: '0.5em'}}>لَقَدْ حَصَلْتَ عَلَى <span className="right">{score}</span> مِنْ <span className="right">{questions.length}</span> إِجَابَاتٍ صَحِيحَةٍ!</div>
            <div className="quiz-actions">
              <button className="main-btn" onClick={handleRestart}>اِبْدَأِ الاِمْتِحَانَ مَرَّةً أُخْرَى</button>
              <button className="main-btn alt home" onClick={handleHome}>اَلصَّفْحَةُ اَلرَّئِيسِيَّةُ</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
