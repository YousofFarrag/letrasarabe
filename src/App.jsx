import React, { useState, useEffect } from "react";
import "./index.css";

const QUESTIONS = [
  { question: "¿Cuál de estas letras tiene el sonido 'alif'?", options: ["ب", "ت", "أ", "ث"], correctAnswer: "أ" },
  { question: "La letra que suena como 'jim' es ______.", options: ["ح", "خ", "ج", "د"], correctAnswer: "ج" },
  { question: "¿Qué letra árabe representa el sonido 'dal'?", options: ["ذ", "ر", "د", "ز"], correctAnswer: "د" },
  { question: "¿Cuál de estas letras tiene el sonido 'alif'?", options: ["ب", "ت", "أ", "ث"], correctAnswer: "أ" },
  { question: "La letra que suena como la 'b' en español es ______.", options: ["ت", "ب", "ث", "ن"], correctAnswer: "ب" },
  { question: "¿Qué letra representa el sonido 't' suave, como en 'tela'?", options: ["د", "ط", "ت", "ث"], correctAnswer: "ت" },
  { question: "La letra árabe que se pronuncia como la 'th' en inglés (como en 'think') es ______.", options: ["س", "ش", "ص", "ث"], correctAnswer: "ث" },
  { question: "¿Cuál de estas letras tiene el sonido 'j' (como en 'joy')?", options: ["ح", "خ", "ج", "ع"], correctAnswer: "ج" },
  { question: "La letra con un sonido 'h' gutural (como un suspiro fuerte desde la garganta) es ______.", options: ["ه", "ح", "خ", "غ"], correctAnswer: "ح" },
  { question: "¿Qué letra suena como la 'j' fuerte en español o la 'ch' en 'loch' escocés?", options: ["ج", "ح", "خ", "ع"], correctAnswer: "خ" },
  { question: "El sonido 'd' suave (como en 'dedo') corresponde a la letra ______.", options: ["ذ", "ض", "د", "ظ"], correctAnswer: "د" },
  { question: "¿Cuál de estas letras se pronuncia como la 'th' en inglés (como en 'this')?", options: ["د", "ز", "ذ", "ظ"], correctAnswer: "ذ" },
  { question: "La letra árabe que tiene un sonido 'r' vibrante (como la 'r' en 'perro') es ______.", options: ["ل", "ن", "ر", "ز"], correctAnswer: "ر" },
  { question: "¿Qué letra tiene el sonido 'z' (como en 'zebra')?", options: ["س", "ش", "ز", "ص"], correctAnswer: "ز" },
  { question: "El sonido 's' suave (como en 'sol') es representado por ______.", options: ["ص", "س", "ش", "ظ"], correctAnswer: "س" },
  { question: "¿Cuál de estas letras se pronuncia como 'sh' (como en 'show')?", options: ["س", "ش", "ص", "ث"], correctAnswer: "ش" },
  { question: "La letra con un sonido 's' enfático o 'grueso' es ______.", options: ["س", "ش", "ص", "ز"], correctAnswer: "ص" },
  { question: "¿Qué letra árabe tiene un sonido 'd' enfático y profundo?", options: ["د", "ذ", "ض", "ظ"], correctAnswer: "ض" },
  { question: "El sonido 't' enfático y 'grueso' es de la letra ______.", options: ["ت", "ث", "ط", "ظ"], correctAnswer: "ط" },
  { question: "¿Cuál letra se pronuncia como una 'th' enfática (como en 'this', pero con la lengua más atrás)?", options: ["ذ", "ض", "ط", "ظ"], correctAnswer: "ظ" },
  { question: "La letra gutural que no tiene equivalente directo en español, producida en la parte posterior de la garganta, es ______.", options: ["ح", "خ", "ع", "غ"], correctAnswer: "ع" },
  { question: "¿Qué letra árabe tiene un sonido gutural similar a la 'r' francesa?", options: ["ع", "ق", "غ", "خ"], correctAnswer: "غ" },
  { question: "El sonido 'f' (como en 'foco') corresponde a la letra ______.", options: ["ب", "ف", "م", "ن"], correctAnswer: "ف" },
  { question: "¿Cuál es la letra con un sonido 'q' gutural, más profundo que una 'k' normal?", options: ["ك", "ق", "غ", "خ"], correctAnswer: "ق" },
  { question: "La letra que suena como una 'k' normal (como en 'casa') es ______.", options: ["ق", "ك", "خ", "غ"], correctAnswer: "ك" },
  { question: "El sonido 'l' (como en 'lápiz') es de la letra ______.", options: ["ر", "م", "ل", "ن"], correctAnswer: "ل" },
  { question: "¿Qué letra representa el sonido 'm' (como en 'mano')?", options: ["ب", "ف", "م", "و"], correctAnswer: "م" },
  { question: "La letra árabe que suena como 'n' (como en 'nariz') es ______.", options: ["ل", "م", "ن", "ه"], correctAnswer: "ن" },
  { question: "¿Cuál de estas letras tiene un sonido 'h' suave (como en 'hola')?", options: ["ح", "خ", "ه", "ع"], correctAnswer: "ه" },
  { question: "La letra que suena como 'w' (como en 'water') o una 'u' larga es ______.", options: ["ي", "و", "ا", "ه"], correctAnswer: "و" },
  { question: "¿Qué letra representa el sonido 'y' (como en 'yate') o una 'i' larga?", options: ["ا", "و", "ي", "ه"], correctAnswer: "ي" },
  { question: "La 'hamza' (ء) representa un sonido de ______.", options: ["unión", "pausa glotal", "silencio", "aspiración"], correctAnswer: "pausa glotal" }
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getRandomQuestions(array, n) {
  return shuffleArray(array).slice(0, n);
}

function App() {
  const [step, setStep] = useState("start");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (questions.length > 0 && questions[currentQuestion]) {
      setShuffledOptions(shuffleArray(questions[currentQuestion].options));
      setShowFeedback(false);
      setSelectedOption(null);
    }
  }, [questions, currentQuestion]);

const startQuiz = (type) => {
  let selectedQuestions = [];
  if (type === "random") {
    selectedQuestions = getRandomQuestions(QUESTIONS, 10); // Obtener 10 preguntas aleatorias
  } else if (type === "group1") {
    selectedQuestions = shuffleArray(QUESTIONS.slice(0, 10));
  } else if (type === "group2") {
    selectedQuestions = shuffleArray(QUESTIONS.slice(10, 20));
  } else if (type === "group3") {
    selectedQuestions = shuffleArray(QUESTIONS.slice(20));
  }
  // Shuffle options for each question
  selectedQuestions = selectedQuestions.map(q => ({
    ...q,
    options: shuffleArray(q.options)
  }));
  setQuestions(selectedQuestions);
  setCurrentQuestion(0);
  setScore(0);
  setUserAnswers([]);
  setStep("quiz");
  setSelectedOption(null);
  setShowFeedback(false);
};

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    setShowCorrect(false);
    if (correct) setScore((prev) => prev + 1);
      // Store user's answer
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = option;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
    setShowFeedback(false);
    setSelectedOption(null);
    setShowCorrect(false);
  };

  const handleRestart = () => {
    setStep("start");
    setQuestions([]);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="app-frame" dir="ltr" style={{ position: "relative", minHeight: "90vh", display: "flex", flexDirection: "column" }}>
      {step === "start" && (
        <>
          <div className="main-title">letrasarabe2025</div>
          <div className="desc">Pon a prueba tus conocimientos de las letras árabes</div>
          <div className="start-btns">
            <button className="main-btn" onClick={() => startQuiz("random")}>Examen aleatorio</button>
            <button className="main-btn alt" onClick={() => startQuiz("group1")}>Preguntas 1-10</button>
            <button className="main-btn alt" onClick={() => startQuiz("group2")}>Preguntas 11-20</button>
            <button className="main-btn alt" onClick={() => startQuiz("group3")}>Preguntas 21-32</button>
          </div>
        </>
      )}

      {step === "quiz" && questions.length > 0 && (
        <>
          <div className="q-counter">
            {`Pregunta ${currentQuestion + 1} de ${questions.length}`}
          </div>
          <div className="q-text">{questions[currentQuestion].question}</div>
          <div className="options-2x2">
            {shuffledOptions.map((option, idx) => {
              let btnClass = "option-btn";
              if (selectedOption) {
                if (option === questions[currentQuestion].correctAnswer) {
                  if (isCorrect || showCorrect) {
                    btnClass += " correct";
                  }
                } else if (option === selectedOption) {
                  btnClass += " wrong";
                }
              }
              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => !showFeedback && handleAnswer(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {showFeedback && (
            <div className={`feedback${isCorrect ? " correct" : " wrong"}`}>
              {isCorrect ? (
                <>
                  <div className="correct-ans">¡Respuesta correcta! ¡Excelente!</div>
                  {currentQuestion < questions.length - 1 ? (
                    <button className="next-q-btn" onClick={handleNext}>
                      Siguiente pregunta
                    </button>
                  ) : (
                    <button className="show-ans-btn" onClick={() => setStep("result")}>
                      Ver resultado
                    </button>
                  )}
                </>
              ) : (
                <>
                  {!showCorrect ? (
                    <>
                      <div className="wrong-answer">Respuesta incorrecta.</div>
                      <div className="wrong-btns" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7em", marginTop: "1em" }}>
                        <button
                          className="repeat-btn"
                          onClick={() => {
                            setShowFeedback(false);
                            setSelectedOption(null);
                            setShowCorrect(false);
                          }}
                          style={{ width: "220px" }}
                        >
                          Reintentar
                        </button>
                        <button
                          className="show-ans-btn"
                          onClick={() => setShowCorrect(true)}
                          style={{ width: "220px" }}
                        >
                          Mostrar respuesta correcta
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="correct-answer-label">La respuesta correcta es:</div>
                      <div className="correct-answer-value">{questions[currentQuestion].correctAnswer}</div>
                      {currentQuestion < questions.length - 1 ? (
                        <button className="next-q-btn" onClick={handleNext}>
                          Siguiente pregunta
                        </button>
                      ) : (
                        <button className="show-ans-btn" onClick={() => setStep("result")}>
                          Ver resultado
                        </button>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          )}
        </>
      )}

      {step === "result" && (
  (() => {
    const answeredCount = userAnswers.filter(a => a !== undefined).length;
    return (
      <>
        <div className="result-title">Resultado final</div>
        <div className="result-score">
      Has obtenido <span className="right">{score}</span> de <span>{answeredCount}</span> respuestas correctas.
        </div>
        <div className="results-list">
          <h3>Revisión de preguntas</h3>
          {questions.map((q, i) => {
            const userAnswer = userAnswers[i];
            const isAnswered = userAnswer !== null && userAnswer !== undefined;;

        if (!isAnswered) return null;

            const wasCorrect = userAnswer === q.correctAnswer;
            const questionParts = q.question.split('______');

            return (
              <div key={i} className="result-question-item">
                <div>
                  <span className="question-number">{i + 1}.</span>
                  {questionParts[0]}
                  {questionParts[1]}
                </div>
                <div className="correct-answer-display">
                  <span className="correct-answer-text">{q.correctAnswer}</span>
                  {!wasCorrect && <span className="wrong-answer-text"> ({userAnswer})</span>}
                </div> 
              </div>
            );
          })}
        </div>
      </>
    );
  })()
)}

      {/* Main bottom buttons always at the bottom */}
      <div
        className="bottom-btns"
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "row",
          gap: "1em",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {step === "quiz" && (
          <button
            className="main-btn home"
            style={{ background: "#ef4444", flex: 1, maxWidth: 220 }}
            onClick={() => setShowConfirmExit(true)}
          >
            Detener examen
          </button>
        )}
        {step !== "start" && (
          <button
            className="main-btn home"
            style={{ flex: 1, maxWidth: 220 }}
            onClick={handleRestart}
          >
            Página principal
          </button>
        )}
      </div>

      {showConfirmExit && (
        <div className="modal-overlay">
          <div className="modal-box" dir="ltr">
            <div style={{ marginBottom: "1em" }}>¿Realmente quieres detener el examen y ver el resultado?</div>
            <div style={{ display: "flex", gap: "1em", justifyContent: "center" }}>
              <button className="main-btn home" style={{ flex: 1, maxWidth: 100 }} onClick={() => {
                setShowConfirmExit(false);
                setStep("result");
              }}>Sí</button>
              <button className="main-btn home" style={{ background: "#64748b", flex: 1, maxWidth: 100 }} onClick={() => setShowConfirmExit(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;