import React, { useState } from 'react';
import './index.css';

const QUESTIONS = [
  { question: "أيُّ هذهِ الحُرُوفِ هُوَ 'ألف'؟", options: ["ب", "ت", "أ", "ث"], correctAnswer: "أ" },
  { question: "الحرف الذي يُشبه صوت 'ب' في الإسبانية هو ______.", options: ["ت", "ب", "ث", "ن"], correctAnswer: "ب" },
  { question: "أيُّ حَرفٍ يُمثِّل صوت 'ت' الناعم؟", options: ["د", "ط", "ت", "ث"], correctAnswer: "ت" },
  { question: "الحرف الذي يُشبه 'ث' في كلمة 'think' بالإنجليزية هو ______.", options: ["س", "ش", "ص", "ث"], correctAnswer: "ث" },
  { question: "أيُّ هذهِ الحُرُوفِ يُشبه صوت 'ج' في الإنجليزية؟", options: ["ح", "خ", "ج", "ع"], correctAnswer: "ج" },
  { question: "الحرف ذو الصوت الحلقي القوي هو ______.", options: ["ه", "ح", "خ", "غ"], correctAnswer: "ح" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'خ' في الإسبانية؟", options: ["ج", "ح", "خ", "ع"], correctAnswer: "خ" },
  { question: "الحرف الذي يُشبه صوت 'د' الناعم هو ______.", options: ["ذ", "ض", "د", "ظ"], correctAnswer: "د" },
  { question: "أيُّ حَرفٍ يُشبه 'ذ' في كلمة 'this' بالإنجليزية؟", options: ["د", "ز", "ذ", "ظ"], correctAnswer: "ذ" },
  { question: "الحرف الذي يُشبه صوت 'ر' المُهتز هو ______.", options: ["ل", "ن", "ر", "ز"], correctAnswer: "ر" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ز' في الإنجليزية؟", options: ["س", "ش", "ز", "ص"], correctAnswer: "ز" },
  { question: "الحرف الذي يُشبه صوت 'س' الناعم هو ______.", options: ["ص", "س", "ش", "ظ"], correctAnswer: "س" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ش' في الإنجليزية؟", options: ["س", "ش", "ص", "ث"], correctAnswer: "ش" },
  { question: "الحرف ذو الصوت السِّين المُفَخَّم هو ______.", options: ["س", "ش", "ص", "ز"], correctAnswer: "ص" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ض' المُفَخَّم؟", options: ["د", "ذ", "ض", "ظ"], correctAnswer: "ض" },
  { question: "الحرف ذو الصوت 'ط' المُفَخَّم هو ______.", options: ["ت", "ث", "ط", "ظ"], correctAnswer: "ط" },
  { question: "أيُّ حَرفٍ يُشبه 'ظ' المُفَخَّم؟", options: ["ذ", "ض", "ط", "ظ"], correctAnswer: "ظ" },
  { question: "الحرف الحلقي الذي لا يوجد له مثيل في الإسبانية هو ______.", options: ["ح", "خ", "ع", "غ"], correctAnswer: "ع" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'غ' الفرنسي؟", options: ["ع", "ق", "غ", "خ"], correctAnswer: "غ" },
  { question: "الحرف الذي يُشبه صوت 'ف' هو ______.", options: ["ب", "ف", "م", "ن"], correctAnswer: "ف" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ق' العميق؟", options: ["ك", "ق", "غ", "خ"], correctAnswer: "ق" },
  { question: "الحرف الذي يُشبه صوت 'ك' هو ______.", options: ["ق", "ك", "خ", "غ"], correctAnswer: "ك" },
  { question: "الحرف الذي يُشبه صوت 'ل' هو ______.", options: ["ر", "م", "ل", "ن"], correctAnswer: "ل" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'م'؟", options: ["ب", "ف", "م", "و"], correctAnswer: "م" },
  { question: "الحرف الذي يُشبه صوت 'ن' هو ______.", options: ["ل", "م", "ن", "ه"], correctAnswer: "ن" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ه' الناعم؟", options: ["ح", "خ", "ه", "ع"], correctAnswer: "ه" },
  { question: "الحرف الذي يُشبه صوت 'و' أو 'u' الطويلة هو ______.", options: ["ي", "و", "ا", "ه"], correctAnswer: "و" },
  { question: "أيُّ حَرفٍ يُشبه صوت 'ي' أو 'i' الطويلة؟", options: ["ا", "و", "ي", "ه"], correctAnswer: "ي" },
  { question: "الهمزة (ء) تُمثِّل صوت ______.", options: ["اتصال", "وقفة حلقية", "صمت", "همس"], correctAnswer: "وقفة حلقية" }
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
              <button className="main-btn" onClick={() => startQuiz('random')}>اِمْتِحَانٌ عَشْوَائِيٌّ (١٠ أَسْئِلَةٍ)</button>
              <button className="main-btn alt" onClick={() => startQuiz('first10')}>اِمْتِحَانُ أَوَّلِ ١٠ حُرُوفٍ</button>
              <button className="main-btn alt" onClick={() => startQuiz('second10')}>اِمْتِحَانُ ثَانِي ١٠ حُرُوفٍ</button>
              <button className="main-btn alt" onClick={() => startQuiz('last9')}>اِمْتِحَانُ آخِرِ ٩ حُرُوفٍ</button>
            </div>
          </>
        )}
        {step === 'quiz' && (
          <div>
            <div className="q-counter">اَلسُّؤَالُ {current + 1} مِنْ {questions.length}</div>
            <div className="q-text" dir="ltr">{questions[current].question}</div>
            <div className="options-2x2">
              {questions[current].options.map((option, i) => {
                let btnClass = 'option-btn';
                if (selected === option) {
                  if (checked) btnClass += option === questions[current].correctAnswer ? ' correct' : ' wrong';
                  else btnClass += ' selected';
                } else if (checked && showCorrect && option === questions[current].correctAnswer) {
                  btnClass += ' correct';
                }
                return (
                  <button key={i} className={btnClass} onClick={() => handleSelect(option)} disabled={checked}>{option}</button>
                );
              })}
            </div>
            {checked && (
              selected === questions[current].correctAnswer ? (
                <div className="feedback correct">إِجَابَةٌ صَحِيحَةٌ! أَحْسَنْتَ!</div>
              ) : (
                <div className="feedback wrong">
                  إِجَابَةٌ خَاطِئَةٌ.
                  {!showCorrect ? (
                    <button className="show-btn" onClick={handleShowCorrect}>عَرْضُ الإِجَابَةِ اَلصَّحِيحَةِ</button>
                  ) : (
                    <span className="show-answer">الإِجَابَةُ اَلصَّحِيحَةُ هِيَ: <span className="right">{questions[current].correctAnswer}</span></span>
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
        )}
        {step === 'result' && (
          <>
            <div className="result-title">اَلنَّتِيجَةُ اَلنِّهَائِيَّةُ</div>
            <div className="result-score">لَقَدْ حَصَلْتَ عَلَى <span className="right">{score}</span> مِنْ <span className="right">{questions.length}</span> إِجَابَاتٍ صَحِيحَةٍ!</div>
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
