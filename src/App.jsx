import React, { useState } from 'react';
import './App.css';

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

const StartPage = ({ onStart, onFirst10, onSecond10, onLast9 }) => (
  <div className="quiz-container" dir="rtl" style={{alignItems: 'center', justifyContent: 'center'}}>
    <h1 className="quiz-title" style={{textAlign: 'center', width: '100%'}}>اَلْحُرُوفُ اَلْعَرَبِيَّةُ</h1>
    <p className="quiz-desc" style={{textAlign: 'center', width: '100%'}}>اِخْتَبِرْ مَعْرِفَتَكَ بِالْحُرُوفِ اَلْعَرَبِيَّةِ. اِخْتَرْ نَوْعَ الاِمْتِحَانِ:</p>
    <button className="action-btn" style={{display: 'block', margin: '0.5em auto'}} onClick={onStart}>اِمْتِحَانٌ عَشْوَائِيٌّ (١٠ أَسْئِلَةٍ)</button>
    <button className="action-btn" style={{background:'#6366f1',margin:'1em auto 0 auto', display: 'block'}} onClick={onFirst10}>اِمْتِحَانُ أَوَّلِ ١٠ حُرُوفٍ</button>
    <button className="action-btn" style={{background:'#6366f1',margin:'1em auto 0 auto', display: 'block'}} onClick={onSecond10}>اِمْتِحَانُ ثَانِي ١٠ حُرُوفٍ</button>
    <button className="action-btn" style={{background:'#6366f1',margin:'1em auto 0 auto', display: 'block'}} onClick={onLast9}>اِمْتِحَانُ آخِرِ ٩ حُرُوفٍ</button>
  </div>
);

const QuizPage = ({ questions, onRestart, onHome }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleSelect = (option) => {
    if (!checked) setSelected(option);
  };
  const handleCheck = () => {
    if (selected) {
      setChecked(true);
      if (selected === questions[current].correctAnswer) {
        setScore(s => s + 1);
        setShowCorrect(false);
      } else {
        setShowCorrect(false);
      }
    }
  };
  const handleNext = () => {
    setCurrent(c => c + 1);
    setSelected(null);
    setChecked(false);
    setShowCorrect(false);
  };
  const handleShowCorrect = () => {
    setShowCorrect(true);
  };
  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setShowResult(false);
    setShowCorrect(false);
  };

  if (showResult || current >= questions.length) {
    return (
      <div className="quiz-container" dir="rtl">
        <h2 className="results-title">اَلنَّتِيجَةُ اَلنِّهَائِيَّةُ</h2>
        <div className="results-score">
          لَقَدْ حَصَلْتَ عَلَى <span style={{ color: '#22c55e', fontWeight: 800 }}>{score}</span> مِنْ أَصْلِ <span style={{ color: '#2563eb', fontWeight: 800 }}>{questions.length}</span> إِجَابَاتٍ صَحِيحَةٍ!
        </div>
        <button className="restart-btn" onClick={onRestart}>اِبْدَأِ الاِمْتِحَانَ مَرَّةً أُخْرَى</button>
        <button className="home-btn-fixed" onClick={onHome}>اَلصَّفْحَةُ اَلرَّئِيسِيَّةُ</button>
      </div>
    );
  }

  const q = questions[current];
  return (
    <div className="quiz-container" dir="rtl" style={{alignItems: 'center', justifyContent: 'center'}}>
      <div className="question-counter" style={{textAlign: 'center', width: '100%'}}>اَلسُّؤَالُ {current + 1} مِنْ {questions.length}</div>
      <div className="question-box">
        <p className="question-text" dir="ltr" style={{fontWeight:'bold', textAlign:'center', width:'100%', margin:0}}>{q.question}</p>
      </div>
      <div className="options-grid">
        {q.options.map((option, idx) => {
          let btnClass = 'option-btn';
          if (selected === option) {
            if (checked) {
              btnClass += option === q.correctAnswer ? ' correct' : ' wrong';
            } else {
              btnClass += ' selected';
            }
          } else if (checked && showCorrect && option === q.correctAnswer) {
            btnClass += ' correct';
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              className={btnClass}
              disabled={checked}
              style={{margin: '0 auto', display: 'block'}}
            >
              {option}
            </button>
          );
        })}
      </div>
      {checked && (
        selected === q.correctAnswer ? (
          <div className="feedback-box correct">
            <span style={{display:'block', marginBottom:'1rem'}}>إِجَابَةٌ صَحِيحَةٌ! أَحْسَنْتَ!</span>
            <button className="action-btn" style={{marginTop:'0'}} onClick={handleNext}>{current === questions.length - 1 ? "عَرْضُ اَلنَّتِيجَةِ" : "اَلسُّؤَالُ اَلتَّالِي"}</button>
          </div>
        ) : (
          <div className="feedback-box wrong">
            <span style={{display:'block', marginBottom:'1rem'}}>إِجَابَةٌ خَاطِئَةٌ.</span>
            {!showCorrect ? (
              <>
                <button className="action-btn" style={{background:'#ef4444',margin:'0.5rem'}} onClick={handleShowCorrect}>عَرْضُ الإِجَابَةِ اَلصَّحِيحَةِ</button>
                <button className="action-btn" style={{margin:'0.5rem'}} onClick={() => {setChecked(false); setSelected(null);}}>حَاوِلْ مَرَّةً أُخْرَى</button>
              </>
            ) : (
              <>
                <span style={{display:'block',marginTop:'1rem', marginBottom:'1rem'}}>الإِجَابَةُ اَلصَّحِيحَةُ هِيَ: <span style={{ color: '#15803d', fontWeight:'bold' }}>{q.correctAnswer}</span></span>
                <button className="action-btn" style={{marginTop:'0'}} onClick={handleNext}>{current === questions.length - 1 ? "عَرْضُ اَلنَّتِيجَةِ" : "اَلسُّؤَالُ اَلتَّالِي"}</button>
              </>
            )}
          </div>
        )
      )}
      {!checked && (
        <button className="action-btn" onClick={handleCheck} disabled={!selected}>تَحَقَّقْ مِنَ الإِجَابَةِ</button>
      )}
      <button className="home-btn-inside" onClick={onHome}>اَلصَّفْحَةُ اَلرَّئِيسِيَّةُ</button>
    </div>
  );
};

const App = () => {
  const [started, setStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const startQuiz = () => {
    setQuizQuestions(getRandomQuestions(QUESTIONS, 10));
    setStarted(true);
  };
  const startFirst10 = () => {
    setQuizQuestions(QUESTIONS.slice(0, 10));
    setStarted(true);
  };
  const startSecond10 = () => {
    setQuizQuestions(QUESTIONS.slice(10, 20));
    setStarted(true);
  };
  const startLast9 = () => {
    setQuizQuestions(QUESTIONS.slice(20, 29));
    setStarted(true);
  };
  const restartQuiz = () => {
    setQuizQuestions(getRandomQuestions(QUESTIONS, 10));
    setStarted(true);
  };
  const goHome = () => {
    setStarted(false);
    setQuizQuestions([]);
  };

  return started ? (
    <QuizPage questions={quizQuestions} onRestart={restartQuiz} onHome={goHome} />
  ) : (
    <StartPage onStart={startQuiz} onFirst10={startFirst10} onSecond10={startSecond10} onLast9={startLast9} />
  );
};

export default App;
