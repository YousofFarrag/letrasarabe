import React, { useState } from 'react';
import './index.css';

const QUESTIONS = [
  // -------------------- فَعَلَ (hacer) --------------------
  {
    question: "أَحْمَدُ ______ الْخَيْرَ. (فَعَلَ - هو - hacer)",
    options: ["تَفْعَلُ", "أَفْعَلُ", "نَفْعَلُ", "يَفْعَلُ"],
    correctAnswer: "يَفْعَلُ",
    trad: "Ahmed hace el bien."
  },
  {
    question: "أَنَا ______ وَاجِبَاتِي. (فَعَلَ - hacer)",
    options: ["يَفْعَلُ", "تَفْعَلُ", "نَفْعَلُ", "أَفْعَلُ"],
    correctAnswer: "أَفْعَلُ",
    trad: "Yo hago mis deberes."
  },
  {
    question: "هُمْ ______ الكَثِيرَ. (فَعَلَ - هم - hacer)",
    options: ["تَفْعَلُونَ", "يَفْعَلُ", "نَفْعَلُ", "يَفْعَلُونَ"],
    correctAnswer: "يَفْعَلُونَ",
    trad: "Ellos hacen mucho."
  },

  // -------------------- كَتَبَ (escribir) --------------------
  {
    question: "أَحْمَدُ ______ الدَّرْسَ. (كَتَبَ - هو - escribir)",
    options: ["تَكْتُبُ", "أَكْتُبُ", "نَكْتُبُ", "يَكْتُبُ"],
    correctAnswer: "يَكْتُبُ",
    trad: "Ahmed escribe la lección."
  },
  {
    question: "أَنْتَ ______ الرِّسَالَةَ. (كَتَبَ - escribir)",
    options: ["يَكْتُبُ", "تَكْتُبِينَ", "أَكْتُبُ", "تَكْتُبُ"],
    correctAnswer: "تَكْتُبُ",
    trad: "Tú escribes el mensaje."
  },
  {
    question: "الْبَنَاتُ ______ الْقَصَّةَ. (كَتَبَ - هن - escribir)",
    options: ["يَكْتُبْنَ", "تَكْتُبْنَ", "يَكْتُبُونَ", "تَكْتُبُ"],
    correctAnswer: "يَكْتُبْنَ",
    trad: "Las niñas escriben la historia."
  },

  // -------------------- قَرَأَ (leer) --------------------
  {
    question: "أَنْتَ ______ الكِتَابَ. (قَرَأَ - leer)",
    options: ["يَقْرَأُ", "تَقْرَئِينَ", "أَقْرَأُ", "تَقْرَأُ"],
    correctAnswer: "تَقْرَأُ",
    trad: "Tú lees el libro."
  },
  {
    question: "فَاطِمَةُ ______ الْقُرْآنَ. (قَرَأَ - هي - leer)",
    options: ["يَقْرَأُ", "أَقْرَأُ", "نَقْرَأُ", "تَقْرَأُ"],
    correctAnswer: "تَقْرَأُ",
    trad: "Fátima lee el Corán."
  },
  {
    question: "هُمْ ______ الْجَرِيدَةَ. (قَرَأَ - هم - leer)",
    options: ["يَقْرَؤُونَ", "تَقْرَأُ", "يَقْرَأُ", "نَقْرَأُ"],
    correctAnswer: "يَقْرَؤُونَ",
    trad: "Ellos leen el periódico."
  },

  // -------------------- ذَهَبَ (ir) --------------------
  {
    question: "فَاطِمَةُ ______ إِلَى السُّوقِ. (ذَهَبَ - هي - ir)",
    options: ["يَذْهَبُ", "أَذْهَبُ", "تَذْهَبُ", "نَذْهَبُ"],
    correctAnswer: "تَذْهَبُ",
    trad: "Fátima va al mercado."
  },
  {
    question: "أَنَا ______ إِلَى الْجَامِعَةِ. (ذَهَبَ - ir)",
    options: ["يَذْهَبُ", "تَذْهَبُ", "نَذْهَبُ", "أَذْهَبُ"],
    correctAnswer: "أَذْهَبُ",
    trad: "Yo voy a la universidad."
  },
  {
    question: "نَحْنُ ______ إِلَى الْمَسْجِدِ. (ذَهَبَ - ir)",
    options: ["يَذْهَبُ", "تَذْهَبُ", "أَذْهَبُ", "نَذْهَبُ"],
    correctAnswer: "نَذْهَبُ",
    trad: "Nosotros vamos a la mezquita."
  },

  // -------------------- أَكَلَ (comer) --------------------
  {
    question: "أَنَا ______ التُّفَّاحَ. (أَكَلَ - comer)",
    options: ["يَأْكُلُ", "تَأْكُلُ", "نَأْكُلُ", "آكُلُ"],
    correctAnswer: "آكُلُ",
    trad: "Yo como la manzana."
  },
  {
    question: "هُوَ ______ الْفَاكِهَةَ. (أَكَلَ - هو - comer)",
    options: ["تَأْكُلُ", "نَأْكُلُ", "آكُلُ", "يَأْكُلُ"],
    correctAnswer: "يَأْكُلُ",
    trad: "Él come la fruta."
  },
  {
    question: "أَنْتُمْ ______ الْعَشَاءَ. (أَكَلَ - comer)",
    options: ["يَأْكُلُونَ", "تَأْكُلْنَ", "أَكُلُ", "تَأْكُلُونَ"],
    correctAnswer: "تَأْكُلُونَ",
    trad: "Vosotros coméis la cena."
  },

  // -------------------- شَرِبَ (beber) --------------------
  {
    question: "نَحْنُ ______ الْمَاءَ. (شَرِبَ - beber)",
    options: ["يَشْرَبُ", "تَشْرَبُ", "أَشْرَبُ", "نَشْرَبُ"],
    correctAnswer: "نَشْرَبُ",
    trad: "Nosotros bebemos el agua."
  },
  {
    question: "هِيَ ______ الْعَصِيرَ. (شَرِبَ - هي - beber)",
    options: ["يَشْرَبُ", "أَشْرَبُ", "نَشْرَبُ", "تَشْرَبُ"],
    correctAnswer: "تَشْرَبُ",
    trad: "Ella bebe el zumo."
  },
  {
    question: "أَنَا ______ الْحَلِيبَ. (شَرِبَ - beber)",
    options: ["يَشْرَبُ", "تَشْرَبُ", "نَشْرَبُ", "أَشْرَبُ"],
    correctAnswer: "أَشْرَبُ",
    trad: "Yo bebo la leche."
  },

  // -------------------- نَامَ (dormir) --------------------
  {
    question: "الطِّفْلُ ______ مُبَكِّرًا. (نَامَ - هو - dormir)",
    options: ["تَنَامُ", "أَنَامُ", "نَنَامُ", "يَنَامُ"],
    correctAnswer: "يَنَامُ",
    trad: "El niño duerme temprano."
  },
  {
    question: "أَنَا ______ كُلَّ لَيْلَةٍ. (نَامَ - dormir)",
    options: ["يَنَامُ", "تَنَامُ", "نَنَامُ", "أَنَامُ"],
    correctAnswer: "أَنَامُ",
    trad: "Yo duermo cada noche."
  },
  {
    question: "هُمْ ______ فِي الْفُنْدُقِ. (نَامَ - هم - dormir)",
    options: ["يَنَامُونَ", "تَنَامُ", "يَنَامُ", "نَنَامُ"],
    correctAnswer: "يَنَامُونَ",
    trad: "Ellos duermen en el hotel."
  },

  // -------------------- قَامَ (levantarse) --------------------
  {
    question: "الرَّجُلُ ______ لِلصَّلَاةِ. (قَامَ - هو - levantarse)",
    options: ["تَقُومُ", "أَقُومُ", "نَقُومُ", "يَقُومُ"],
    correctAnswer: "يَقُومُ",
    trad: "El hombre se levanta para la oración."
  },
  {
    question: "أَنْتِ ______ مِنْ مَقْعَدِكِ. (قَامَ - levantarse)",
    options: ["يَقُومِينَ", "أَقُومُ", "نَقُومُ", "تَقُومِينَ"],
    correctAnswer: "تَقُومِينَ",
    trad: "Tú te levantas de tu asiento."
  },
  {
    question: "الطُّلَّابُ ______ فِي الصَّفِّ. (قَامَ - هم - levantarse)",
    options: ["يَقُومُ", "تَقُومُونَ", "نَقُومُ", "يَقُومُونَ"],
    correctAnswer: "يَقُومُونَ",
    trad: "Los estudiantes se levantan en la clase."
  },

  // -------------------- جَلَسَ (sentarse) --------------------
  {
    question: "الطَّالِبُ ______ عَلَى الكُرْسِيِّ. (جَلَسَ - هو - sentarse)",
    options: ["تَجْلِسُ", "أَجْلِسُ", "نَجْلِسُ", "يَجْلِسُ"],
    correctAnswer: "يَجْلِسُ",
    trad: "El estudiante se sienta en la silla."
  },
  {
    question: "أَنَا ______ فِي الْحَدِيقَةِ. (جَلَسَ - sentarse)",
    options: ["يَجْلِسُ", "تَجْلِسُ", "نَجْلِسُ", "أَجْلِسُ"],
    correctAnswer: "أَجْلِسُ",
    trad: "Yo me siento en el jardín."
  },
  {
    question: "نَحْنُ ______ مَعًا. (جَلَسَ - sentarse)",
    options: ["يَجْلِسُ", "تَجْلِسُ", "أَجْلِسُ", "نَجْلِسُ"],
    correctAnswer: "نَجْلِسُ",
    trad: "Nosotros nos sentamos juntos."
  },

  // -------------------- عَرَفَ (conocer) --------------------
  {
    question: "هِيَ ______ الْإِجَابَةَ. (عَرَفَ - هي - conocer)",
    options: ["يَعْرِفُ", "أَعْرِفُ", "نَعْرِفُ", "تَعْرِفُ"],
    correctAnswer: "تَعْرِفُ",
    trad: "Ella conoce la respuesta."
  },
  {
    question: "أَنْتَ ______ الْكَثِيرَ. (عَرَفَ - conocer)",
    options: ["يَعْرِفُ", "تَعْرِفِينَ", "أَعْرِفُ", "تَعْرِفُ"],
    correctAnswer: "تَعْرِفُ",
    trad: "Tú conoces mucho."
  },
  {
    question: "هُمْ ______ الْحَقِيقَةَ. (عَرَفَ - هم - conocer)",
    options: ["يَعْرِفُونَ", "تَعْرِفُونَ", "يَعْرِفُ", "نَعْرِفُ"],
    correctAnswer: "يَعْرِفُونَ",
    trad: "Ellos conocen la verdad."
  },

  // -------------------- فَهِمَ (entender) --------------------
  {
    question: "الطِّفْلَةُ ______ الدَّرْسَ. (فَهِمَ - هي - entender)",
    options: ["يَفْهَمُ", "أَفْهَمُ", "نَفْهَمُ", "تَفْهَمُ"],
    correctAnswer: "تَفْهَمُ",
    trad: "La niña entiende la lección."
  },
  {
    question: "أَنَا ______ السُّؤَالَ. (فَهِمَ - entender)",
    options: ["يَفْهَمُ", "تَفْهَمُ", "نَفْهَمُ", "أَفْهَمُ"],
    correctAnswer: "أَفْهَمُ",
    trad: "Yo entiendo la pregunta."
  },
  {
    question: "أَنْتُمْ ______ جَيِّدًا. (فَهِمَ - entender)",
    options: ["يَفْهَمُونَ", "تَفْهَمْنَ", "أَفْهَمُ", "تَفْهَمُونَ"],
    correctAnswer: "تَفْهَمُونَ",
    trad: "Vosotros entendéis bien."
  },

  // -------------------- تَكَلَّمَ (hablar) --------------------
  {
    question: "الْمُعَلِّمُ ______ الْلُغَةَ الْعَرَبِيَّةَ. (تَكَلَّمَ - هو - hablar)",
    options: ["تَتَكَلَّمُ", "أَتَكَلَّمُ", "نَتَكَلَّمُ", "يَتَكَلَّمُ"],
    correctAnswer: "يَتَكَلَّمُ",
    trad: "El maestro habla la lengua árabe."
  },
  {
    question: "أَنْتِ ______ بِوُضُوحٍ. (تَكَلَّمَ - hablar)",
    options: ["يَتَكَلَّمِينَ", "أَتَكَلَّمُ", "نَتَكَلَّمُ", "تَتَكَلَّمِينَ"],
    correctAnswer: "تَتَكَلَّمِينَ",
    trad: "Tú hablas claramente."
  },
  {
    question: "نَحْنُ ______ مَعَ الْأَصْدِقَاءِ. (تَكَلَّمَ - hablar)",
    options: ["يَتَكَلَّمُ", "تَتَكَلَّمُ", "أَتَكَلَّمُ", "نَتَكَلَّمُ"],
    correctAnswer: "نَتَكَلَّمُ",
    trad: "Nosotros hablamos con los amigos."
  },

  // -------------------- سَمِعَ (escuchar) --------------------
  {
    question: "الْبِنْتُ ______ الْقِصَّةَ. (سَمِعَ - هي - escuchar)",
    options: ["يَسْمَعُ", "أَسْمَعُ", "نَسْمَعُ", "تَسْمَعُ"],
    correctAnswer: "تَسْمَعُ",
    trad: "La niña escucha la historia."
  },
  {
    question: "أَنَا ______ الْأَخْبَارَ. (سَمِعَ - escuchar)",
    options: ["يَسْمَعُ", "تَسْمَعُ", "نَسْمَعُ", "أَسْمَعُ"],
    correctAnswer: "أَسْمَعُ",
    trad: "Yo escucho las noticias."
  },
  {
    question: "هُمْ ______ الْمُوسِيقَى. (سَمِعَ - هم - escuchar)",
    options: ["يَسْمَعُونَ", "تَسْمَعُونَ", "يَسْمَعُ", "نَسْمَعُ"],
    correctAnswer: "يَسْمَعُونَ",
    trad: "Ellos escuchan la música."
  },

  // -------------------- رَأَى (ver) --------------------
  {
    question: "الرَّجُلُ ______ الْجَبَلَ. (رَأَى - هو - ver)",
    options: ["تَرَى", "أَرَى", "نَرَى", "يَرَى"],
    correctAnswer: "يَرَى",
    trad: "El hombre ve la montaña."
  },
  {
    question: "أَنَا ______ صَدِيقِي. (رَأَى - ver)",
    options: ["يَرَى", "تَرَى", "نَرَى", "أَرَى"],
    correctAnswer: "أَرَى",
    trad: "Yo veo a mi amigo."
  },
  {
    question: "أَنْتُمْ ______ الْمُعَلِّمَ. (رَأَى - ver)",
    options: ["يَرَوْنَ", "تَرَيْنَ", "أَرَى", "تَرَوْنَ"],
    correctAnswer: "تَرَوْنَ",
    trad: "Vosotros veis al maestro."
  },

  // -------------------- عَمِلَ (trabajar) --------------------
  {
    question: "أَبِي ______ فِي الشَّرِكَةِ. (عَمِلَ - هو - trabajar)",
    options: ["تَعْمَلُ", "أَعْمَلُ", "نَعْمَلُ", "يَعْمَلُ"],
    correctAnswer: "يَعْمَلُ",
    trad: "Mi padre trabaja en la empresa."
  },
  {
    question: "أَنَا ______ بِجِدٍّ. (عَمِلَ - trabajar)",
    options: ["يَعْمَلُ", "تَعْمَلُ", "نَعْمَلُ", "أَعْمَلُ"],
    correctAnswer: "أَعْمَلُ",
    trad: "Yo trabajo con diligencia."
  },
  {
    question: "الطَّبِيبَاتُ ______ فِي الْمُسْتَشْفَى. (عَمِلَ - هن - trabajar)",
    options: ["تَعْمَلْنَ", "يَعْمَلْنَ", "تَعْمَلُ", "يَعْمَلُ"],
    correctAnswer: "تَعْمَلْنَ",
    trad: "Las doctoras trabajan en el hospital."
  },

  // -------------------- لَعِبَ (jugar) --------------------
  {
    question: "الطَّالِبَانِ ______ الْكُرَةَ. (لَعِبَ - هما - jugar)",
    options: ["يَلْعَبَانِ", "تَلْعَبَانِ", "يَلْعَبُونَ", "نَلْعَبُ"],
    correctAnswer: "يَلْعَبَانِ",
    trad: "Los dos estudiantes juegan la pelota."
  },
  {
    question: "أَنَا ______ مَعَ أَخِي. (لَعِبَ - jugar)",
    options: ["يَلْعَبُ", "تَلْعَبُ", "نَلْعَبُ", "أَلْعَبُ"],
    correctAnswer: "أَلْعَبُ",
    trad: "Yo juego con mi hermano."
  },
  {
    question: "الْأَطْفَالُ ______ فِي الْحَدِيقَةِ. (لَعِبَ - هم - jugar)",
    options: ["يَلْعَبُ", "تَلْعَبُ", "نَلْعَبُ", "يَلْعَبُونَ"],
    correctAnswer: "يَلْعَبُونَ",
    trad: "Los niños juegan en el jardín."
  },

  // -------------------- قَالَ (decir) --------------------
  {
    question: "المُدِيرُ ______ كَلَامًا مُهِمًّا. (قَالَ - هو - decir)",
    options: ["تَقُولُ", "أَقُولُ", "نَقُولُ", "يَقُولُ"],
    correctAnswer: "يَقُولُ",
    trad: "El director dice palabras importantes."
  },
  {
    question: "هُمْ ______ الْحَقِيقَةَ. (قَالَ - هم - decir)",
    options: ["يَقُولُونَ", "تَقُولُونَ", "يَقُولُ", "نَقُولُ"],
    correctAnswer: "يَقُولُونَ",
    trad: "Ellos dicen la verdad."
  },
  {
    question: "أَنْتِ ______ شَيْئًا جَمِيلًا. (قَالَ - decir)",
    options: ["يَقُولِينَ", "أَقُولُ", "نَقُولُ", "تَقُولِينَ"],
    correctAnswer: "تَقُولِينَ",
    trad: "Tú dices algo bonito."
  },

  // -------------------- رَكِبَ (montar/subir) --------------------
  {
    question: "أَنَا ______ الْحَافِلَةَ. (رَكِبَ - montar)",
    options: ["يَرْكَبُ", "تَرْكَبُ", "نَرْكَبُ", "أَرْكَبُ"],
    correctAnswer: "أَرْكَبُ",
    trad: "Yo monto el autobús."
  },
  {
    question: "السَّائِحُ ______ الْجَمَلَ. (رَكِبَ - هو - montar)",
    options: ["تَرْكَبُ", "أَرْكَبُ", "نَرْكَبُ", "يَرْكَبُ"],
    correctAnswer: "يَرْكَبُ",
    trad: "El turista monta el camello."
  },
  {
    question: "هُمْ ______ السَّفِينَةَ. (رَكِبَ - هم - montar)",
    options: ["يَرْكَبُونَ", "تَرْكَبُ", "يَرْكَبُ", "نَرْكَبُ"],
    correctAnswer: "يَرْكَبُونَ",
    trad: "Ellos montan el barco."
  },

  // -------------------- نَزَلَ (descender/bajar) --------------------
  {
    question: "الْمَطَرُ ______ مِنَ السَّمَاءِ. (نَزَلَ - هو - descender)",
    options: ["تَنْزِلُ", "أَنْزِلُ", "نَنْزِلُ", "يَنْزِلُ"],
    correctAnswer: "يَنْزِلُ",
    trad: "La lluvia desciende del cielo."
  },
  {
    question: "أَنَا ______ الدَّرَجَ. (نَزَلَ - bajar)",
    options: ["يَنْزِلُ", "تَنْزِلُ", "نَنْزِلُ", "أَنْزِلُ"],
    correctAnswer: "أَنْزِلُ",
    trad: "Yo bajo las escaleras."
  },
  {
    question: "هِيَ ______ مِنَ السَّيَّارَةِ. (نَزَلَ - هي - descender)",
    options: ["يَنْزِلُ", "أَنْزِلُ", "نَنْزِلُ", "تَنْزِلُ"],
    correctAnswer: "تَنْزِلُ",
    trad: "Ella baja del coche."
  },

  // -------------------- صَعِدَ (ascender/subir) --------------------
  {
    question: "الرَّجُلُ ______ الْجَبَلَ. (صَعِدَ - هو - ascender)",
    options: ["تَصْعَدُ", "أَصْعَدُ", "نَصْعَدُ", "يَصْعَدُ"],
    correctAnswer: "يَصْعَدُ",
    trad: "El hombre asciende la montaña."
  },
  {
    question: "أَنْتَ ______ السَّلَالِمَ. (صَعِدَ - subir)",
    options: ["يَصْعَدُ", "تَصْعَدِينَ", "أَصْعَدُ", "تَصْعَدُ"],
    correctAnswer: "تَصْعَدُ",
    trad: "Tú subes las escaleras."
  },
  {
    question: "الْقِطَّةُ ______ الشَّجَرَةَ. (صَعِدَ - هي - ascender)",
    options: ["يَصْعَدُ", "أَصْعَدُ", "نَصْعَدُ", "تَصْعَدُ"],
    correctAnswer: "تَصْعَدُ",
    trad: "La gata sube al árbol."
  },

  // -------------------- بَدَأَ (empezar) --------------------
  {
    question: "الْيَوْمُ الدِّرَاسِيُّ ______ الْآنَ. (بَدَأَ - هو - empezar)",
    options: ["تَبْدَأُ", "أَبْدَأُ", "نَبْدَأُ", "يَبْدَأُ"],
    correctAnswer: "يَبْدَأُ",
    trad: "El día escolar empieza ahora."
  },
  {
    question: "نَحْنُ ______ الْعَمَلَ. (بَدَأَ - empezar)",
    options: ["يَبْدَأُ", "تَبْدَأُ", "أَبْدَأُ", "نَبْدَأُ"],
    correctAnswer: "نَبْدَأُ",
    trad: "Nosotros empezamos el trabajo."
  },
  {
    question: "هِيَ ______ فِي الْقِرَاءَةِ. (بَدَأَ - هي - empezar)",
    options: ["يَبْدَأُ", "أَبْدَأُ", "نَبْدَأُ", "تَبْدَأُ"],
    correctAnswer: "تَبْدَأُ",
    trad: "Ella empieza a leer."
  },

  // -------------------- خَرَجَ (salir) --------------------
  {
    question: "الْوَلَدُ ______ مِنَ الْبَيْتِ. (خَرَجَ - هو - salir)",
    options: ["تَخْرُجُ", "أَخْرُجُ", "نَخْرُجُ", "يَخْرُجُ"],
    correctAnswer: "يَخْرُجُ",
    trad: "El niño sale de la casa."
  },
  {
    question: "أَنْتِ ______ لِلْعَمَلِ. (خَرَجَ - salir)",
    options: ["يَخْرُجِينَ", "أَخْرُجُ", "نَخْرُجُ", "تَخْرُجِينَ"],
    correctAnswer: "تَخْرُجِينَ",
    trad: "Tú sales para el trabajo."
  },
  {
    question: "الطُّلَّابُ ______ مِنَ الْمَدْرَسَةِ. (خَرَجَ - هم - salir)",
    options: ["يَخْرُجُونَ", "تَخْرُجُونَ", "يَخْرُجُ", "نَخْرُجُ"],
    correctAnswer: "يَخْرُجُونَ",
    trad: "Los estudiantes salen de la escuela."
  },

  // -------------------- دَخَلَ (entrar) --------------------
  {
    question: "المُعَلِّمُ ______ الصَّفَّ. (دَخَلَ - هو - entrar)",
    options: ["تَدْخُلُ", "أَدْخُلُ", "نَدْخُلُ", "يَدْخُلُ"],
    correctAnswer: "يَدْخُلُ",
    trad: "El maestro entra en la clase."
  },
  {
    question: "أَنَا ______ الْمَسْجِدَ. (دَخَلَ - entrar)",
    options: ["يَدْخُلُ", "تَدْخُلُ", "نَدْخُلُ", "أَدْخُلُ"],
    correctAnswer: "أَدْخُلُ",
    trad: "Yo entro en la mezquita."
  },
  {
    question: "أَنْتُمْ ______ الْبَيْتَ. (دَخَلَ - entrar)",
    options: ["يَدْخُلُونَ", "تَدْخُلْنَ", "أَدْخُلُ", "تَدْخُلُونَ"],
    correctAnswer: "تَدْخُلُونَ",
    trad: "Vosotros entráis en la casa."
  },

  // -------------------- نَظَرَ (mirar) --------------------
  {
    question: "البِنْتُ ______ إِلَى النَّافِذَةِ. (نَظَرَ - هي - mirar)",
    options: ["يَنْظُرُ", "أَنْظُرُ", "نَنْظُرُ", "تَنْظُرُ"],
    correctAnswer: "تَنْظُرُ",
    trad: "La niña mira por la ventana."
  },
  {
    question: "أَنَا ______ إِلَى السَّمَاءِ. (نَظَرَ - mirar)",
    options: ["يَنْظُرُ", "تَنْظُرُ", "نَنْظُرُ", "أَنْظُرُ"],
    correctAnswer: "أَنْظُرُ",
    trad: "Yo miro al cielo."
  },
  {
    question: "هُمَا ______ إِلَى الْخَرِيطَةِ. (نَظَرَ - هما - mirar)",
    options: ["يَنْظُرَانِ", "تَنْظُرَانِ", "يَنْظُرُونَ", "نَنْظُرُ"],
    correctAnswer: "يَنْظُرَانِ",
    trad: "Ellos dos miran el mapa."
  },

  // -------------------- حَفِظَ (memorizar/proteger) --------------------
  {
    question: "الْإِمَامُ ______ الْقُرْآنَ. (حَفِظَ - هو - memorizar)",
    options: ["تَحْفَظُ", "أَحْفَظُ", "نَحْفَظُ", "يَحْفَظُ"],
    correctAnswer: "يَحْفَظُ",
    trad: "El imán memoriza el Corán."
  },
  {
    question: "أَنْتُمْ ______ أَوْطَانَكُمْ. (حَفِظَ - proteger)",
    options: ["يَحْفَظُونَ", "تَحْفَظْنَ", "أَحْفَظُ", "تَحْفَظُونَ"],
    correctAnswer: "تَحْفَظُونَ",
    trad: "Vosotros protegéis vuestras patrias."
  },
  {
    question: "هِيَ ______ الْحَدِيثَ النَّبَوِيَّ. (حَفِظَ - هي - memorizar)",
    options: ["يَحْفَظُ", "أَحْفَظُ", "نَحْفَظُ", "تَحْفَظُ"],
    correctAnswer: "تَحْفَظُ",
    trad: "Ella memoriza el hadiz profético."
  },

  // -------------------- نَسِيَ (olvidar) --------------------
  {
    question: "أَنَا ______ الْمِفْتَاحَ. (نَسِيَ - olvidar)",
    options: ["يَنْسَى", "تَنْسَى", "نَنْسَى", "أَنْسَى"],
    correctAnswer: "أَنْسَى",
    trad: "Yo olvido la llave."
  },
  {
    question: "هُوَ ______ الْوَعْدَ. (نَسِيَ - هو - olvidar)",
    options: ["تَنْسَى", "أَنْسَى", "نَنْسَى", "يَنْسَى"],
    correctAnswer: "يَنْسَى",
    trad: "Él olvida la promesa."
  },
  {
    question: "أَنْتَ ______ أَيَّامَ الطُّفُولَةِ. (نَسِيَ - olvidar)",
    options: ["يَنْسَى", "تَنْسَيْنَ", "أَنْسَى", "تَنْسَى"],
    correctAnswer: "تَنْسَى",
    trad: "Tú olvidas los días de la infancia."
  },

  // -------------------- جَرَى (correr) --------------------
  {
    question: "الْوَلَدُ ______ بِسُرْعَةٍ. (جَرَى - هو - correr)",
    options: ["تَجْرِي", "أَجْرِي", "نَجْرِي", "يَجْرِي"],
    correctAnswer: "يَجْرِي",
    trad: "El niño corre rápidamente."
  },
  {
    question: "أَنَا ______ كُلَّ صَبَاحٍ. (جَرَى - correr)",
    options: ["يَجْرِي", "تَجْرِي", "نَجْرِي", "أَجْرِي"],
    correctAnswer: "أَجْرِي",
    trad: "Yo corro cada mañana."
  },
  {
    question: "الْخَيْلُ ______ فِي الْمَيْدَانِ. (جَرَى - هم - correr)",
    options: ["يَجْرُونَ", "تَجْرُونَ", "يَجْرِي", "نَجْرِي"],
    correctAnswer: "يَجْرُونَ",
    trad: "Los caballos corren en el campo."
  },

  // -------------------- مَشَى (caminar) --------------------
  {
    question: "الرَّجُلُ ______ عَلَى الرَّصِيفِ. (مَشَى - هو - caminar)",
    options: ["تَمْشِي", "أَمْشِي", "نَمْشِي", "يَمْشِي"],
    correctAnswer: "يَمْشِي",
    trad: "El hombre camina por la acera."
  },
  {
    question: "هِيَ ______ بِبُطْءٍ. (مَشَى - هي - caminar)",
    options: ["يَمْشِي", "أَمْشِي", "نَمْشِي", "تَمْشِي"],
    correctAnswer: "تَمْشِي",
    trad: "Ella camina lentamente."
  },
  {
    question: "نَحْنُ ______ إِلَى الْمَدْرَسَةِ. (مَشَى - caminar)",
    options: ["يَمْشِي", "تَمْشِي", "أَمْشِي", "نَمْشِي"],
    correctAnswer: "نَمْشِي",
    trad: "Nosotros caminamos a la escuela."
  },

  // -------------------- طَبَخَ (cocinar) --------------------
  {
    question: "أُمِّي ______ الطَّعَامَ اللَّذِيذَ. (طَبَخَ - هي - cocinar)",
    options: ["يَطْبُخُ", "أَطْبُخُ", "نَطْبُخُ", "تَطْبُخُ"],
    correctAnswer: "تَطْبُخُ",
    trad: "Mi madre cocina la comida deliciosa."
  },
  {
    question: "أَنَا ______ الْأَرُزَّ. (طَبَخَ - cocinar)",
    options: ["يَطْبُخُ", "تَطْبُخُ", "نَطْبُخُ", "أَطْبُخُ"],
    correctAnswer: "أَطْبُخُ",
    trad: "Yo cocino el arroz."
  },
  {
    question: "هُمْ ______ فِي الْمَطْبَخِ. (طَبَخَ - هم - cocinar)",
    options: ["يَطْبُخُونَ", "تَطْبُخُونَ", "يَطْبُخُ", "نَطْبُخُ"],
    correctAnswer: "يَطْبُخُونَ",
    trad: "Ellos cocinan en la cocina."
  },

  // -------------------- غَسَلَ (lavar) --------------------
  {
    question: "أَنْتَ ______ يَدَيْكَ. (غَسَلَ - lavar)",
    options: ["يَغْسِلُ", "تَغْسِلِينَ", "أَغْسِلُ", "تَغْسِلُ"],
    correctAnswer: "تَغْسِلُ",
    trad: "Tú lavas tus manos."
  },
  {
    question: "هِيَ ______ الْمَلَابِسَ. (غَسَلَ - هي - lavar)",
    options: ["يَغْسِلُ", "أَغْسِلُ", "نَغْسِلُ", "تَغْسِلُ"],
    correctAnswer: "تَغْسِلُ",
    trad: "Ella lava la ropa."
  },
  {
    question: "أَنَا ______ الْأَطْبَاقَ. (غَسَلَ - lavar)",
    options: ["يَغْسِلُ", "تَغْسِلُ", "نَغْسِلُ", "أَغْسِلُ"],
    correctAnswer: "أَغْسِلُ",
    trad: "Yo lavo los platos."
  },

  // -------------------- بَاعَ (vender) --------------------
  {
    question: "التَّاجِرُ ______ الْبِضَاعَةَ. (بَاعَ - هو - vender)",
    options: ["تَبِيعُ", "أَبِيعُ", "نَبِيعُ", "يَبِيعُ"],
    correctAnswer: "يَبِيعُ",
    trad: "El comerciante vende la mercancía."
  },
  {
    question: "أَنَا ______ سَيَّارَتِي. (بَاعَ - vender)",
    options: ["يَبِيعُ", "تَبِيعُ", "نَبِيعُ", "أَبِيعُ"],
    correctAnswer: "أَبِيعُ",
    trad: "Yo vendo mi coche."
  },
  {
    question: "هِيَ ______ الْوُرُودَ. (بَاعَ - هي - vender)",
    options: ["يَبِيعُ", "أَبِيعُ", "نَبِيعُ", "تَبِيعُ"],
    correctAnswer: "تَبِيعُ",
    trad: "Ella vende las flores."
  },

  // -------------------- اِشْتَرَى (comprar) --------------------
  {
    question: "أَنَا ______ كِتَابًا جَدِيدًا. (اِشْتَرَى - comprar)",
    options: ["يَشْتَرِي", "تَشْتَرِي", "نَشْتَرِي", "أَشْتَرِي"],
    correctAnswer: "أَشْتَرِي",
    trad: "Yo compro un libro nuevo."
  },
  {
    question: "الْأَبُ ______ أَلْعَابًا لِأَطْفَالِهِ. (اِشْتَرَى - هو - comprar)",
    options: ["تَشْتَرِي", "أَشْتَرِي", "نَشْتَرِي", "يَشْتَرِي"],
    correctAnswer: "يَشْتَرِي",
    trad: "El padre compra juguetes para sus hijos."
  },
  {
    question: "أَنْتُمْ ______ الْهَدَايَا. (اِشْتَرَى - comprar)",
    options: ["يَشْتَرُونَ", "تَشْتَرِينَ", "أَشْتَرِي", "تَشْتَرُونَ"],
    correctAnswer: "تَشْتَرُونَ",
    trad: "Vosotros compráis los regalos."
  },

  // -------------------- سَكَنَ (residir/habitar) --------------------
  {
    question: "صَدِيقِي ______ فِي دُبَي. (سَكَنَ - هو - residir)",
    options: ["تَسْكُنُ", "أَسْكُنُ", "نَسْكُنُ", "يَسْكُنُ"],
    correctAnswer: "يَسْكُنُ",
    trad: "Mi amigo reside en Dubái."
  },
  {
    question: "أَنَا ______ فِي بَيْتٍ جَدِيدٍ. (سَكَنَ - residir)",
    options: ["يَسْكُنُ", "تَسْكُنُ", "نَسْكُنُ", "أَسْكُنُ"],
    correctAnswer: "أَسْكُنُ",
    trad: "Yo resido en una casa nueva."
  },
  {
    question: "هُمْ ______ فِي الْمَدِينَةِ. (سَكَنَ - هم - residir)",
    options: ["يَسْكُنُونَ", "تَسْكُنُونَ", "يَسْكُنُ", "نَسْكُنُ"],
    correctAnswer: "يَسْكُنُونَ",
    trad: "Ellos residen en la ciudad."
  },

  // -------------------- عَاشَ (vivir) --------------------
  {
    question: "الْإِنْسَانُ ______ حَيَاةً وَاحِدَةً. (عَاشَ - هو - vivir)",
    options: ["تَعِيشُ", "أَعِيشُ", "نَعِيشُ", "يَعِيشُ"],
    correctAnswer: "يَعِيشُ",
    trad: "El ser humano vive una sola vida."
  },
  {
    question: "أَنَا ______ فِي سَلَامٍ. (عَاشَ - vivir)",
    options: ["يَعِيشُ", "تَعِيشُ", "نَعِيشُ", "أَعِيشُ"],
    correctAnswer: "أَعِيشُ",
    trad: "Yo vivo en paz."
  },
  {
    question: "نَحْنُ ______ فِي هَذِهِ الْبَلْدَةِ. (عَاشَ - vivir)",
    options: ["يَعِيشُ", "تَعِيشُ", "أَعِيشُ", "نَعِيشُ"],
    correctAnswer: "نَعِيشُ",
    trad: "Nosotros vivimos en este pueblo."
  },

  // -------------------- كَانَ (ser/estar) --------------------
  {
    question: "هُوَ ______ طَالِبًا. (كَانَ - هو - ser/estar)",
    options: ["تَكُونُ", "أَكُونُ", "نَكُونُ", "يَكُونُ"],
    correctAnswer: "يَكُونُ",
    trad: "Él es un estudiante."
  },
  {
    question: "هِيَ ______ مُعَلِّمَةً. (كَانَ - هي - ser/estar)",
    options: ["يَكُونُ", "أَكُونُ", "نَكُونُ", "تَكُونُ"],
    correctAnswer: "تَكُونُ",
    trad: "Ella es una maestra."
  },
  {
    question: "أَنَا ______ سَعِيدًا. (كَانَ - ser/estar)",
    options: ["يَكُونُ", "تَكُونُ", "نَكُونُ", "أَكُونُ"],
    correctAnswer: "أَكُونُ",
    trad: "Yo soy feliz."
  },

  // -------------------- أَخَذَ (tomar) --------------------
  {
    question: "أَنَا ______ الْقَلَمَ مِنْ الطَّاوِلَةِ. (أَخَذَ - tomar)",
    options: ["يَأْخُذُ", "تَأْخُذُ", "نَأْخُذُ", "آخُذُ"],
    correctAnswer: "آخُذُ",
    trad: "Yo tomo el bolígrafo de la mesa."
  },
  {
    question: "الْوَلَدُ ______ كِتَابًا مِنَ الرَّفِّ. (أَخَذَ - هو - tomar)",
    options: ["تَأْخُذُ", "أَخُذُ", "نَأْخُذُ", "يَأْخُذُ"],
    correctAnswer: "يَأْخُذُ",
    trad: "El niño toma un libro del estante."
  },
  {
    question: "هُمْ ______ قَرَارًا مُهِمًّا. (أَخَذَ - هم - tomar)",
    options: ["يَأْخُذُونَ", "تَأْخُذُونَ", "يَأْخُذُ", "نَأْخُذُ"],
    correctAnswer: "يَأْخُذُونَ",
    trad: "Ellos toman una decisión importante."
  },

  // -------------------- أَعْطَى (dar) --------------------
  {
    question: "الْمُعَلِّمُ ______ الطُّلَّابَ الدُّرُوسَ. (أَعْطَى - هو - dar)",
    options: ["تُعْطِي", "أُعْطِي", "نُعْطِي", "يُعْطِي"],
    correctAnswer: "يُعْطِي",
    trad: "El maestro da las lecciones a los estudiantes."
  },
  {
    question: "أَنَا ______ الصَّدَقَةَ لِلْفُقَرَاءِ. (أَعْطَى - dar)",
    options: ["يُعْطِي", "تُعْطِي", "نُعْطِي", "أُعْطِي"],
    correctAnswer: "أُعْطِي",
    trad: "Yo doy caridad a los pobres."
  },
  {
    question: "هِيَ ______ الْهَدِيَّةَ لِصَدِيقَتِهَا. (أَعْطَى - هي - dar)",
    options: ["يُعْطِي", "أُعْطِي", "نُعْطِي", "تُعْطِي"],
    correctAnswer: "تُعْطِي",
    trad: "Ella da el regalo a su amiga."
  },

  // -------------------- طَلَبَ (pedir/solicitar) --------------------
  {
    question: "أَنْتَ ______ الْمُسَاعَدَةَ. (طَلَبَ - pedir)",
    options: ["يَطْلُبُ", "تَطْلُبِينَ", "أَطْلُبُ", "تَطْلُبُ"],
    correctAnswer: "تَطْلُبُ",
    trad: "Tú pides ayuda."
  },
  {
    question: "الطَّالِبُ ______ الْكِتَابَ مِنَ الْمَكْتَبَةِ. (طَلَبَ - هو - pedir)",
    options: ["تَطْلُبُ", "أَطْلُبُ", "نَطْلُبُ", "يَطْلُبُ"],
    correctAnswer: "يَطْلُبُ",
    trad: "El estudiante pide el libro de la biblioteca."
  },
  {
    question: "هُمْ ______ حُقُوقَهُمْ. (طَلَبَ - هم - solicitar)",
    options: ["يَطْلُبُونَ", "تَطْلُبُونَ", "يَطْلُبُ", "نَطْلُبُ"],
    correctAnswer: "يَطْلُبُونَ",
    trad: "Ellos solicitan sus derechos."
  },

  // -------------------- عَمَدَ (intentar/proponer) --------------------
  {
    question: "هُوَ ______ إِلَى الْفَوْزِ. (عَمَدَ - هو - intentar)",
    options: ["تَعْمُدُ", "أَعْمُدُ", "نَعْمُدُ", "يَعْمُدُ"],
    correctAnswer: "يَعْمُدُ",
    trad: "Él intenta ganar."
  },
  {
    question: "أَنَا ______ الصَّوَابَ. (عَمَدَ - intentar)",
    options: ["يَعْمُدُ", "تَعْمُدُ", "نَعْمُدُ", "أَعْمُدُ"],
    correctAnswer: "أَعْمُدُ",
    trad: "Yo intento lo correcto."
  },
  {
    question: "نَحْنُ ______ الْخَيْرَ. (عَمَدَ - intentar)",
    options: ["يَعْمُدُ", "تَعْمُدُ", "أَعْمُدُ", "نَعْمُدُ"],
    correctAnswer: "نَعْمُدُ",
    trad: "Nosotros intentamos el bien."
  },

  // -------------------- قَعَدَ (sentarse - alternativa a جَلَسَ) --------------------
  {
    question: "الْجَدُّ ______ عَلَى الْأَرْضِ. (قَعَدَ - هو - sentarse)",
    options: ["تَقْعُدُ", "أَقْعُدُ", "نَقْعُدُ", "يَقْعُدُ"],
    correctAnswer: "يَقْعُدُ",
    trad: "El abuelo se sienta en el suelo."
  },
  {
    question: "أَنْتِ ______ بِجَانِبِي. (قَعَدَ - sentarse)",
    options: ["يَقْعُدِينَ", "أَقْعُدُ", "نَقْعُدُ", "تَقْعُدِينَ"],
    correctAnswer: "تَقْعُدِينَ",
    trad: "Tú te sientas a mi lado."
  },
  {
    question: "هُمْ ______ لِلِاسْتِرَاحَةِ. (قَعَدَ - هم - sentarse)",
    options: ["يَقْعُدُونَ", "تَقْعُدُونَ", "يَقْعُدُ", "نَقْعُدُ"],
    correctAnswer: "يَقْعُدُونَ",
    trad: "Ellos se sientan para descansar."
  },

  // -------------------- بَكَى (llorar) --------------------
  {
    question: "الطِّفْلَةُ ______ بِصَوْتٍ عَالٍ. (بَكَى - هي - llorar)",
    options: ["يَبْكِي", "أَبْكِي", "نَبْكِي", "تَبْكِي"],
    correctAnswer: "تَبْكِي",
    trad: "La niña llora en voz alta."
  },
  {
    question: "أَنَا ______ عِنْدَمَا أَحْزَنُ. (بَكَى - llorar)",
    options: ["يَبْكِي", "تَبْكِي", "نَبْكِي", "أَبْكِي"],
    correctAnswer: "أَبْكِي",
    trad: "Yo lloro cuando me pongo triste."
  },
  {
    question: "هُمْ ______ بِسَبَبِ الْخَبَرِ. (بَكَى - هم - llorar)",
    options: ["يَبْكُونَ", "تَبْكُونَ", "يَبْكِي", "نَبْكِي"],
    correctAnswer: "يَبْكُونَ",
    trad: "Ellos lloran a causa de la noticia."
  },

  // -------------------- أَحَبَّ (amar) --------------------
  {
    question: "الْمُسْلِمُ ______ رَبَّهُ. (أَحَبَّ - هو - amar)",
    options: ["تُحِبُّ", "أُحِبُّ", "نُحِبُّ", "يُحِبُّ"],
    correctAnswer: "يُحِبُّ",
    trad: "El musulmán ama a su Señor."
  },
  {
    question: "أَنَا ______ وَالِدَيَّ. (أَحَبَّ - amar)",
    options: ["يُحِبُّ", "تُحِبُّ", "نُحِبُّ", "أُحِبُّ"],
    correctAnswer: "أُحِبُّ",
    trad: "Yo amo a mis padres."
  },
  {
    question: "هِيَ ______ الْقِرَاءَةَ. (أَحَبَّ - هي - amar)",
    options: ["يُحِبُّ", "أُحِبُّ", "نُحِبُّ", "تُحِبُّ"],
    correctAnswer: "تُحِبُّ",
    trad: "Ella ama la lectura."
  },

  // -------------------- كَرِهَ (odiar) --------------------
  {
    question: "الْإِنْسَانُ ______ الظُّلْمَ. (كَرِهَ - هو - odiar)",
    options: ["تَكْرَهُ", "أَكْرَهُ", "نَكْرَهُ", "يَكْرَهُ"],
    correctAnswer: "يَكْرَهُ",
    trad: "El ser humano odia la injusticia."
  },
  {
    question: "أَنَا ______ الْكَذِبَ. (كَرِهَ - odiar)",
    options: ["يَكْرَهُ", "تَكْرَهُ", "نَكْرَهُ", "أَكْرَهُ"],
    correctAnswer: "أَكْرَهُ",
    trad: "Yo odio la mentira."
  },
  {
    question: "هُمْ ______ الضَّوْضَاءَ. (كَرِهَ - هم - odiar)",
    options: ["يَكْرَهُونَ", "تَكْرَهُونَ", "يَكْرَهُ", "نَكْرَهُ"],
    correctAnswer: "يَكْرَهُونَ",
    trad: "Ellos odian el ruido."
  },

  // -------------------- اِسْتَيْقَظَ (despertarse) --------------------
  {
    question: "الْمُسْلِمُ ______ مُبَكِّرًا لِصَلَاةِ الْفَجْرِ. (اِسْتَيْقَظَ - هو - despertarse)",
    options: ["تَسْتَيْقِظُ", "أَسْتَيْقِظُ", "نَسْتَيْقِظُ", "يَسْتَيْقِظُ"],
    correctAnswer: "يَسْتَيْقِظُ",
    trad: "El musulmán se despierta temprano para la oración del Fajr."
  },
  {
    question: "أَنَا ______ فِي السَّادِسَةِ صَبَاحًا. (اِسْتَيْقَظَ - despertarse)",
    options: ["يَسْتَيْقِظُ", "تَسْتَيْقِظُ", "نَسْتَيْقِظُ", "أَسْتَيْقِظُ"],
    correctAnswer: "أَسْتَيْقِظُ",
    trad: "Yo me despierto a las seis de la mañana."
  },
  {
    question: "هِيَ ______ بِسُرْعَةٍ. (اِسْتَيْقَظَ - هي - despertarse)",
    options: ["يَسْتَيْقِظُ", "أَسْتَيْقِظُ", "نَسْتَيْقِظُ", "تَسْتَيْقِظُ"],
    correctAnswer: "تَسْتَيْقِظُ",
    trad: "Ella se despierta rápidamente."
  },

  // -------------------- وَصَلَ (llegar) --------------------
  {
    question: "الْقِطَارُ ______ إِلَى الْمَحَطَّةِ. (وَصَلَ - هو - llegar)",
    options: ["تَصِلُ", "أَصِلُ", "نَصِلُ", "يَصِلُ"],
    correctAnswer: "يَصِلُ",
    trad: "El tren llega a la estación."
  },
  {
    question: "أَنَا ______ الْبَيْتَ الْآنَ. (وَصَلَ - llegar)",
    options: ["يَصِلُ", "تَصِلُ", "نَصِلُ", "أَصِلُ"],
    correctAnswer: "أَصِلُ",
    trad: "Yo llego a casa ahora."
  },
  {
    question: "هُمْ ______ مُتَأَخِّرِينَ. (وَصَلَ - هم - llegar)",
    options: ["يَصِلُونَ", "تَصِلُونَ", "يَصِلُ", "نَصِلُ"],
    correctAnswer: "يَصِلُونَ",
    trad: "Ellos llegan tarde."
  },

  // -------------------- بَحَثَ (buscar) --------------------
  {
    question: "الطَّالِبُ ______ عَنِ الْكِتَابِ. (بَحَثَ - هو - buscar)",
    options: ["تَبْحَثُ", "أَبْحَثُ", "نَبْحَثُ", "يَبْحَثُ"],
    correctAnswer: "يَبْحَثُ",
    trad: "El estudiante busca el libro."
  },
  {
    question: "أَنَا ______ عَنْ عَمَلٍ جَدِيدٍ. (بَحَثَ - buscar)",
    options: ["يَبْحَثُ", "تَبْحَثُ", "نَبْحَثُ", "أَبْحَثُ"],
    correctAnswer: "أَبْحَثُ",
    trad: "Yo busco un nuevo trabajo."
  },
  {
    question: "هِيَ ______ عَنْ إِجَابَةٍ. (بَحَثَ - هي - buscar)",
    options: ["يَبْحَثُ", "أَبْحَثُ", "نَبْحَثُ", "تَبْحَثُ"],
    correctAnswer: "تَبْحَثُ",
    trad: "Ella busca una respuesta."
  },

  // -------------------- حَمَلَ (llevar/cargar) --------------------
  {
    question: "الرَّجُلُ ______ الْحَقِيبَةَ الثَّقِيلَةَ. (حَمَلَ - هو - llevar)",
    options: ["تَحْمِلُ", "أَحْمِلُ", "نَحْمِلُ", "يَحْمِلُ"],
    correctAnswer: "يَحْمِلُ",
    trad: "El hombre lleva la maleta pesada."
  },
  {
    question: "أَنَا ______ الْأَزْهَارَ. (حَمَلَ - llevar)",
    options: ["يَحْمِلُ", "تَحْمِلُ", "نَحْمِلُ", "أَحْمِلُ"],
    correctAnswer: "أَحْمِلُ",
    trad: "Yo llevo las flores."
  },
  {
    question: "هِيَ ______ طِفْلَهَا. (حَمَلَ - هي - llevar)",
    options: ["يَحْمِلُ", "أَحْمِلُ", "نَحْمِلُ", "تَحْمِلُ"],
    correctAnswer: "تَحْمِلُ",
    trad: "Ella lleva a su hijo."
  },

  // -------------------- صَلَّى (orar/rezar) --------------------
  {
    question: "الْمُسْلِمُ ______ فِي الْمَسْجِدِ. (صَلَّى - هو - orar)",
    options: ["تُصَلِّي", "أُصَلِّي", "نُصَلِّي", "يُصَلِّي"],
    correctAnswer: "يُصَلِّي",
    trad: "El musulmán reza en la mezquita."
  },
  {
    question: "أَنَا ______ خَمْسَ مَرَّاتٍ فِي الْيَوْمِ. (صَلَّى - orar)",
    options: ["يُصَلِّي", "تُصَلِّي", "نُصَلِّي", "أُصَلِّي"],
    correctAnswer: "أُصَلِّي",
    trad: "Yo rezo cinco veces al día."
  },
  {
    question: "هُمْ ______ الْجُمُعَةَ. (صَلَّى - هم - orar)",
    options: ["يُصَلُّونَ", "تُصَلُّونَ", "يُصَلِّي", "نُصَلِّي"],
    correctAnswer: "يُصَلُّونَ",
    trad: "Ellos rezan el Yumu'a (viernes)."
  },

  // -------------------- عَبَدَ (adorar) --------------------
  {
    question: "نَحْنُ ______ اللَّهَ وَحْدَهُ. (عَبَدَ - adorar)",
    options: ["يَعْبُدُ", "تَعْبُدُ", "أَعْبُدُ", "نَعْبُدُ"],
    correctAnswer: "نَعْبُدُ",
    trad: "Nosotros adoramos solo a Allah."
  },
  {
    question: "الْمُؤْمِنُ ______ رَبَّهُ بِإِخْلَاصٍ. (عَبَدَ - هو - adorar)",
    options: ["تَعْبُدُ", "أَعْبُدُ", "نَعْبُدُ", "يَعْبُدُ"],
    correctAnswer: "يَعْبُدُ",
    trad: "El creyente adora a su Señor con sinceridad."
  },
  {
    question: "هُمْ ______ اللَّهَ فِي كُلِّ الْأَحْوَالِ. (عَبَدَ - هم - adorar)",
    options: ["يَعْبُدُونَ", "تَعْبُدُونَ", "يَعْبُدُ", "نَعْبُدُ"],
    correctAnswer: "يَعْبُدُونَ",
    trad: "Ellos adoran a Allah en todas las circunstancias."
  },

  // -------------------- رَكَعَ (inclinar la cabeza en oración) --------------------
  {
    question: "الْمُصَلِّي ______ فِي صَلَاتِهِ. (رَكَعَ - هو - inclinar en oración)",
    options: ["تَرْكَعُ", "أَرْكَعُ", "نَرْكَعُ", "يَرْكَعُ"],
    correctAnswer: "يَرْكَعُ",
    trad: "El orante se inclina en su oración."
  },
  {
    question: "نَحْنُ ______ لِلَّهِ الْعَظِيمِ. (رَكَعَ - inclinar en oración)",
    options: ["يَرْكَعُ", "تَرْكَعُ", "أَرْكَعُ", "نَرْكَعُ"],
    correctAnswer: "نَرْكَعُ",
    trad: "Nosotros nos inclinamos ante el Gran Allah."
  },
  {
    question: "هُمْ ______ بِخُشُوعٍ. (رَكَعَ - هم - inclinar en oración)",
    options: ["يَرْكَعُونَ", "تَرْكَعُونَ", "يَرْكَعُ", "نَرْكَعُ"],
    correctAnswer: "يَرْكَعُونَ",
    trad: "Ellos se inclinan con humildad."
  },

  // -------------------- سَجَدَ (postrarse en oración) --------------------
  {
    question: "أَنَا ______ لِلَّهِ فِي كُلِّ رَكْعَةٍ. (سَجَدَ - postrarse en oración)",
    options: ["يَسْجُدُ", "تَسْجُدُ", "نَسْجُدُ", "أَسْجُدُ"],
    correctAnswer: "أَسْجُدُ",
    trad: "Yo me postro ante Allah en cada rak'ah."
  },
  {
    question: "الْمُسْلِمُونَ ______ بَعْدَ الرُّكُوعِ. (سَجَدَ - هم - postrarse en oración)",
    options: ["يَسْجُدُونَ", "تَسْجُدُونَ", "يَسْجُدُ", "نَسْجُدُ"],
    correctAnswer: "يَسْجُدُونَ",
    trad: "Los musulmanes se postran después de la inclinación."
  },
  {
    question: "هِيَ ______ عَلَى جَبْهَتِهَا. (سَجَدَ - هي - postrarse en oración)",
    options: ["يَسْجُدُ", "أَسْجُدُ", "نَسْجُدُ", "تَسْجُدُ"],
    correctAnswer: "تَسْجُدُ",
    trad: "Ella se postra sobre su frente."
  },

  // -------------------- آمَنَ (creer) --------------------
  {
    question: "الْمُؤْمِنُ ______ بِاللَّهِ وَرُسُلِهِ. (آمَنَ - هو - creer)",
    options: ["تُؤْمِنُ", "أُؤْمِنُ", "نُؤْمِنُ", "يُؤْمِنُ"],
    correctAnswer: "يُؤْمِنُ",
    trad: "El creyente cree en Allah y Sus mensajeros."
  },
  {
    question: "أَنَا ______ بِقَدَرِ اللَّهِ. (آمَنَ - creer)",
    options: ["يُؤْمِنُ", "تُؤْمِنُ", "نُؤْمِنُ", "أُؤْمِنُ"],
    correctAnswer: "أُؤْمِنُ",
    trad: "Yo creo en el decreto de Allah."
  },
  {
    question: "هُمْ ______ بِالْيَوْمِ الْآخِرِ. (آمَنَ - هم - creer)",
    options: ["يُؤْمِنُونَ", "تُؤْمِنُونَ", "يُؤْمِنُ", "نُؤْمِنُ"],
    correctAnswer: "يُؤْمِنُونَ",
    trad: "Ellos creen en el Último Día."
  },

  // -------------------- أَسْلَمَ (someterse a Dios/hacerse musulmán) --------------------
  {
    question: "هُوَ ______ لِأَمْرِ اللَّهِ. (أَسْلَمَ - هو - someterse)",
    options: ["تُسْلِمُ", "أُسْلِمُ", "نُسْلِمُ", "يُسْلِمُ"],
    correctAnswer: "يُسْلِمُ",
    trad: "Él se somete a la orden de Allah."
  },
  {
    question: "أَنَا ______ وَجْهِيَ لِلَّهِ. (أَسْلَمَ - someterse)",
    options: ["يُسْلِمُ", "تُسْلِمُ", "نُسْلِمُ", "أُسْلِمُ"],
    correctAnswer: "أُسْلِمُ",
    trad: "Yo someto mi rostro a Allah."
  },
  {
    question: "هُمْ ______ لِلْحَقِّ. (أَسْلَمَ - هم - someterse)",
    options: ["يُسْلِمُونَ", "تُسْلِمُونَ", "يُسْلِمُ", "نُسْلِمُ"],
    correctAnswer: "يُسْلِمُونَ",
    trad: "Ellos se someten a la verdad."
  },

  // -------------------- تَوَكَّلَ (confiar en Dios) --------------------
  {
    question: "الْمُسْلِمُ ______ عَلَى اللَّهِ. (تَوَكَّلَ - هو - confiar en Dios)",
    options: ["تَتَوَكَّلُ", "أَتَوَكَّلُ", "نَتَوَكَّلُ", "يَتَوَكَّلُ"],
    correctAnswer: "يَتَوَكَّلُ",
    trad: "El musulmán confía en Allah."
  },
  {
    question: "أَنَا ______ عَلَى رَبِّي فِي كُلِّ أَمْرٍ. (تَوَكَّلَ - confiar en Dios)",
    options: ["يَتَوَكَّلُ", "تَتَوَكَّلُ", "نَتَوَكَّلُ", "أَتَوَكَّلُ"],
    correctAnswer: "أَتَوَكَّلُ",
    trad: "Yo confío en mi Señor en cada asunto."
  },
  {
    question: "هُمْ ______ عَلَى اللَّهِ بَعْدَ الْأَخْذِ بِالْأَسْبَابِ. (تَوَكَّلَ - هم - confiar en Dios)",
    options: ["يَتَوَكَّلُونَ", "تَتَوَكَّلُونَ", "يَتَوَكَّلُ", "نَتَوَكَّلُ"],
    correctAnswer: "يَتَوَكَّلُونَ",
    trad: "Ellos confían en Allah después de tomar las medidas necesarias."
  },

  // -------------------- تَابَ (arrepentirse) --------------------
  {
    question: "الْعَبْدُ ______ إِلَى رَبِّهِ. (تَابَ - هو - arrepentirse)",
    options: ["تَتُوبُ", "أَتُوبُ", "نَتُوبُ", "يَتُوبُ"],
    correctAnswer: "يَتُوبُ",
    trad: "El siervo se arrepiente ante su Señor."
  },
  {
    question: "أَنَا ______ إِلَى اللَّهِ مِنَ الذُّنُوبِ. (تَابَ - arrepentirse)",
    options: ["يَتُوبُ", "تَتُوبُ", "نَتُوبُ", "أَتُوبُ"],
    correctAnswer: "أَتُوبُ",
    trad: "Yo me arrepiento ante Allah de los pecados."
  },
  {
    question: "هِيَ ______ بَعْدَ الْخَطَأِ. (تَابَ - هي - arrepentirse)",
    options: ["يَتُوبُ", "أَتُوبُ", "نَتُوبُ", "تَتُوبُ"],
    correctAnswer: "تَتُوبُ",
    trad: "Ella se arrepiente después del error."
  },

  // -------------------- ذَكَرَ (recordar/mencionar a Dios) --------------------
  {
    question: "الْمُسْلِمُ ______ اللَّهَ كَثِيرًا. (ذَكَرَ - هو - recordar a Dios)",
    options: ["تَذْكُرُ", "أَذْكُرُ", "نَذْكُرُ", "يَذْكُرُ"],
    correctAnswer: "يَذْكُرُ",
    trad: "El musulmán recuerda mucho a Allah."
  },
  {
    question: "أَنَا ______ أَسْمَاءَ اللَّهِ الْحُسْنَى. (ذَكَرَ - recordar)",
    options: ["يَذْكُرُ", "تَذْكُرُ", "نَذْكُرُ", "أَذْكُرُ"],
    correctAnswer: "أَذْكُرُ",
    trad: "Yo recuerdo los Nombres más bellos de Allah."
  },
  {
    question: "هُمْ ______ فَضْلَ اللَّهِ عَلَيْهِمْ. (ذَكَرَ - هم - recordar)",
    options: ["يَذْكُرُونَ", "تَذْكُرُونَ", "يَذْكُرُ", "نَذْكُرُ"],
    correctAnswer: "يَذْكُرُونَ",
    trad: "Ellos recuerdan la gracia de Allah sobre ellos."
  },

  // -------------------- دَعَا (invocar/suplicar/llamar) --------------------
  {
    question: "الْعَبْدُ ______ رَبَّهُ بِالدُّعَاءِ. (دَعَا - هو - suplicar)",
    options: ["تَدْعُو", "أَدْعُو", "نَدْعُو", "يَدْعُو"],
    correctAnswer: "يَدْعُو",
    trad: "El siervo suplica a su Señor con súplica."
  },
  {
    question: "أَنَا ______ اللَّهَ لِيَغْفِرَ لِي. (دَعَا - suplicar)",
    options: ["يَدْعُو", "تَدْعُو", "نَدْعُو", "أَدْعُو"],
    correctAnswer: "أَدْعُو",
    trad: "Yo ruego a Allah que me perdone."
  },
  {
    question: "هُمْ ______ النَّاسَ إِلَى الْإِسْلَامِ. (دَعَا - هم - llamar/invitar)",
    options: ["يَدْعُونَ", "تَدْعُونَ", "يَدْعُو", "نَدْعُو"],
    correctAnswer: "يَدْعُونَ",
    trad: "Ellos invitan a la gente al Islam."
  },

  // -------------------- غَفَرَ (perdonar) --------------------
  {
    question: "اللَّهُ ______ الذُّنُوبَ لِمَنْ يَشَاءُ. (غَفَرَ - هو - perdonar)",
    options: ["تَغْفِرُ", "أَغْفِرُ", "نَغْفِرُ", "يَغْفِرُ"],
    correctAnswer: "يَغْفِرُ",
    trad: "Allah perdona los pecados a quien Él quiere."
  },
  {
    question: "أَنَا ______ لِأَخِي عَنْ خَطَئِهِ. (غَفَرَ - perdonar)",
    options: ["يَغْفِرُ", "تَغْفِرُ", "نَغْفِرُ", "أَغْفِرُ"],
    correctAnswer: "أَغْفِرُ",
    trad: "Yo perdono a mi hermano por su error."
  },
  {
    question: "هِيَ ______ لِلنَّاسِ أَخْطَاءَهُمْ. (غَفَرَ - هي - perdonar)",
    options: ["يَغْفِرُ", "أَغْفِرُ", "نَغْفِرُ", "تَغْفِرُ"],
    correctAnswer: "تَغْفِرُ",
    trad: "Ella perdona los errores de la gente."
  },

  // -------------------- سَبَّحَ (glorificar a Dios) --------------------
  {
    question: "الْمُسْلِمُ ______ رَبَّهُ بَعْدَ الصَّلَاةِ. (سَبَّحَ - هو - glorificar)",
    options: ["تُسَبِّحُ", "أُسَبِّحُ", "نُسَبِّحُ", "يُسَبِّحُ"],
    correctAnswer: "يُسَبِّحُ",
    trad: "El musulmán glorifica a su Señor después de la oración."
  },
  {
    question: "أَنَا ______ اللَّهَ بِحَمْدِهِ. (سَبَّحَ - glorificar)",
    options: ["يُسَبِّحُ", "تُسَبِّحُ", "نُسَبِّحُ", "أُسَبِّحُ"],
    correctAnswer: "أُسَبِّحُ",
    trad: "Yo glorifico a Allah con Su alabanza."
  },
  {
    question: "هُمْ ______ بِحَمْدِ رَبِّهِمْ. (سَبَّحَ - هم - glorificar)",
    options: ["يُسَبِّحُونَ", "تُسَبِّحُونَ", "يُسَبِّحُ", "نُسَبِّحُ"],
    correctAnswer: "يُسَبِّحُونَ",
    trad: "Ellos glorifican con la alabanza de su Señor."
  },

  // -------------------- اِسْتَغْفَرَ (pedir perdón a Dios) --------------------
  {
    question: "الْعَبْدُ ______ رَبَّهُ مِنْ ذَنْبِهِ. (اِسْتَغْفَرَ - هو - pedir perdón)",
    options: ["تَسْتَغْفِرُ", "أَسْتَغْفِرُ", "نَسْتَغْفِرُ", "يَسْتَغْفِرُ"],
    correctAnswer: "يَسْتَغْفِرُ",
    trad: "El siervo pide perdón a su Señor por su pecado."
  },
  {
    question: "أَنَا ______ اللَّهَ كُلَّ يَوْمٍ. (اِسْتَغْفَرَ - pedir perdón)",
    options: ["يَسْتَغْفِرُ", "تَسْتَغْفِرُ", "نَسْتَغْفِرُ", "أَسْتَغْفِرُ"],
    correctAnswer: "أَسْتَغْفِرُ",
    trad: "Yo pido perdón a Allah cada día."
  },
  {
    question: "هُمْ ______ بَعْدَ كُلِّ خَطَأٍ. (اِسْتَغْفَرَ - هم - pedir perdón)",
    options: ["يَسْتَغْفِرُونَ", "تَسْتَغْفِرُونَ", "يَسْتَغْفِرُ", "نَسْتَغْفِرُ"],
    correctAnswer: "يَسْتَغْفِرُونَ",
    trad: "Ellos piden perdón después de cada error."
  },

  // -------------------- صَامَ (ayunar) --------------------
  {
    question: "الْمُسْلِمُ ______ شَهْرَ رَمَضَانَ. (صَامَ - هو - ayunar)",
    options: ["تَصُومُ", "أَصُومُ", "نَصُومُ", "يَصُومُ"],
    correctAnswer: "يَصُومُ",
    trad: "El musulmán ayuna el mes de Ramadán."
  },
  {
    question: "أَنَا ______ يَوْمَ عَرَفَةَ. (صَامَ - ayunar)",
    options: ["يَصُومُ", "تَصُومُ", "نَصُومُ", "أَصُومُ"],
    correctAnswer: "أَصُومُ",
    trad: "Yo ayuno el día de Arafat."
  },
  {
    question: "هُمْ ______ لِلَّهِ تَعَالَى. (صَامَ - هم - ayunar)",
    options: ["يَصُومُونَ", "تَصُومُونَ", "يَصُومُ", "نَصُومُ"],
    correctAnswer: "يَصُومُونَ",
    trad: "Ellos ayunan por Allah Todopoderoso."
  },

  // -------------------- زَكَى (pagar el zakat) --------------------
  {
    question: "الْغَنِيُّ ______ مَالَهُ لِلْفُقَرَاءِ. (زَكَى - هو - pagar el zakat)",
    options: ["تُزَكِّي", "أُزَكِّي", "نُزَكِّي", "يُزَكِّي"],
    correctAnswer: "يُزَكِّي",
    trad: "El rico paga su zakat a los pobres."
  },
  {
    question: "أَنَا ______ عَنْ مَالِي. (زَكَى - pagar el zakat)",
    options: ["يُزَكِّي", "تُزَكِّي", "نُزَكِّي", "أُزَكِّي"],
    correctAnswer: "أُزَكِّي",
    trad: "Yo purifico mi riqueza."
  },
  {
    question: "هُمْ ______ أَنْفُسَهُمْ بِالتَّقْوَى. (زَكَى - هم - purificar)",
    options: ["يُزَكُّونَ", "تُزَكُّونَ", "يُزَكِّي", "نُزَكِّي"],
    correctAnswer: "يُزَكُّونَ",
    trad: "Ellos purifican sus almas con piedad."
  },

  // -------------------- طَافَ (circunvalar la Kaaba) --------------------
  {
    question: "الْحَاجُّ ______ بِالْكَعْبَةِ سَبْعًا. (طَافَ - هو - circunvalar)",
    options: ["تَطُوفُ", "أَطُوفُ", "نَطُوفُ", "يَطُوفُ"],
    correctAnswer: "يَطُوفُ",
    trad: "El peregrino circunvala la Kaaba siete veces."
  },
  {
    question: "أَنَا ______ حَوْلَ الْكَعْبَةِ. (طَافَ - circunvalar)",
    options: ["يَطُوفُ", "تَطُوفُ", "نَطُوفُ", "أَطُوفُ"],
    correctAnswer: "أَطُوفُ",
    trad: "Yo circunvalo la Kaaba."
  },
  {
    question: "هُمْ ______ بَيْنَ الصَّفَا وَالْمَرْوَةِ. (طَافَ - هم - recorrer)",
    options: ["يَطُوفُونَ", "تَطُوفُونَ", "يَطُوفُ", "نَطُوفُ"],
    correctAnswer: "يَطُوفُونَ",
    trad: "Ellos recorren entre Safa y Marwa."
  },

  // -------------------- حَجَّ (realizar el Hajj) --------------------
  {
    question: "الْمُسْلِمُ ______ بَيْتَ اللَّهِ الْحَرَامَ. (حَجَّ - هو - realizar el Hajj)",
    options: ["تَحُجُّ", "أَحُجُّ", "نَحُجُّ", "يَحُجُّ"],
    correctAnswer: "يَحُجُّ",
    trad: "El musulmán realiza la peregrinación a la Casa Sagrada de Allah."
  },
  {
    question: "أَنَا ______ الْبَيْتَ الْحَرَامَ هَذَا الْعَامَ. (حَجَّ - realizar el Hajj)",
    options: ["يَحُجُّ", "تَحُجُّ", "نَحُجُّ", "أَحُجُّ"],
    correctAnswer: "أَحُجُّ",
    trad: "Yo realizaré la peregrinación a la Casa Sagrada este año."
  },
  {
    question: "هُمْ ______ فِي مَوَاعِيدِ الْحَجِّ. (حَجَّ - هم - realizar el Hajj)",
    options: ["يَحُجُّونَ", "تَحُجُّونَ", "يَحُجُّ", "نَحُجُّ"],
    correctAnswer: "يَحُجُّونَ",
    trad: "Ellos realizan la peregrinación en las fechas del Hayy."
  },

  // -------------------- وَلِيَ (gobernar/encargarse) --------------------
  {
    question: "الْحَاكِمُ الْعَادِلُ ______ أَمْرَ النَّاسِ. (وَلِيَ - هو - gobernar)",
    options: ["تَلِي", "أَلِي", "نَلِي", "يَلِي"],
    correctAnswer: "يَلِي",
    trad: "El gobernante justo se encarga de los asuntos de la gente."
  },
  {
    question: "هِيَ ______ شُؤُونَ الْبَيْتِ. (وَلِيَ - هي - encargarse)",
    options: ["يَلِي", "أَلِي", "نَلِي", "تَلِي"],
    correctAnswer: "تَلِي",
    trad: "Ella se encarga de los asuntos de la casa."
  },
  {
    question: "هُمْ ______ مَصَالِحَ الْأُمَّةِ. (وَلِيَ - هم - encargarse)",
    options: ["يَلُونَ", "تَلِينَ", "يَلِي", "نَلِي"],
    correctAnswer: "يَلُونَ",
    trad: "Ellos se encargan de los intereses de la nación."
  },

  // -------------------- اِتَّقَى (temer a Dios/ser piadoso) --------------------
  {
    question: "الْمُؤْمِنُ ______ اللَّهَ فِي السِّرِّ وَالْعَلَنِ. (اِتَّقَى - هو - temer a Dios)",
    options: ["تَتَّقِي", "أَتَّقِي", "نَتَّقِي", "يَتَّقِي"],
    correctAnswer: "يَتَّقِي",
    trad: "El creyente teme a Allah en secreto y en público."
  },
  {
    question: "أَنَا ______ اللَّهَ حَيْثُمَا كُنْتُ. (اِتَّقَى - temer a Dios)",
    options: ["يَتَّقِي", "تَتَّقِي", "نَتَّقِي", "أَتَّقِي"],
    correctAnswer: "أَتَّقِي",
    trad: "Yo temo a Allah dondequiera que esté."
  },
  {
    question: "هُمْ ______ اللَّهَ حَقَّ تُقَاتِهِ. (اِتَّقَى - هم - temer a Dios)",
    options: ["يَتَّقُونَ", "تَتَّقُونَ", "يَتَّقِي", "نَتَّقِي"],
    correctAnswer: "يَتَّقُونَ",
    trad: "Ellos temen a Allah como debe ser temido."
  },

  // -------------------- اِسْتَعْمَلَ (usar) --------------------
  {
    question: "أَنْتَ ______ الْقَلَمَ لِكِتَابَةِ الْوَاجِبِ. (اِسْتَعْمَلَ - usar)",
    options: ["يَسْتَعْمِلُ", "تَسْتَعْمِلِينَ", "أَسْتَعْمِلُ", "تَسْتَعْمِلُ"],
    correctAnswer: "تَسْتَعْمِلُ",
    trad: "Tú usas el bolígrafo para escribir la tarea."
  },
  {
    question: "هُوَ ______ الْكُمَبْيُوتَرَ. (اِسْتَعْمَلَ - هو - usar)",
    options: ["تَسْتَعْمِلُ", "أَسْتَعْمِلُ", "نَسْتَعْمِلُ", "يَسْتَعْمِلُ"],
    correctAnswer: "يَسْتَعْمِلُ",
    trad: "Él usa el ordenador."
  },
  {
    question: "نَحْنُ ______ الْهَوَاتِفَ الذَّكِيَّةَ. (اِسْتَعْمَلَ - usar)",
    options: ["يَسْتَعْمِلُ", "تَسْتَعْمِلُ", "أَسْتَعْمِلُ", "نَسْتَعْمِلُ"],
    correctAnswer: "نَسْتَعْمِلُ",
    trad: "Nosotros usamos los teléfonos inteligentes."
  },

  // -------------------- اِسْتَطَاعَ (poder/ser capaz) --------------------
  {
    question: "أَنَا ______ إِكْمَالَ الْمُهِمَّةِ. (اِسْتَطَاعَ - poder)",
    options: ["يَسْتَطِيعُ", "تَسْتَطِيعُ", "نَسْتَطِيعُ", "أَسْتَطِيعُ"],
    correctAnswer: "أَسْتَطِيعُ",
    trad: "Yo puedo completar la tarea."
  },
  {
    question: "الْوَلَدُ ______ رَفْعَ الْحَجَرِ. (اِسْتَطَاعَ - هو - poder)",
    options: ["تَسْتَطِيعُ", "أَسْتَطِيعُ", "نَسْتَطِيعُ", "يَسْتَطِيعُ"],
    correctAnswer: "يَسْتَطِيعُ",
    trad: "El niño puede levantar la piedra."
  },
  {
    question: "هُمْ ______ الْوُصُولَ إِلَى الْقِمَّةِ. (اِسْتَطَاعَ - هم - poder)",
    options: ["يَسْتَطِيعُونَ", "تَسْتَطِيعُونَ", "يَسْتَطِيعُ", "نَسْتَطِيعُ"],
    correctAnswer: "يَسْتَطِيعُونَ",
    trad: "Ellos pueden llegar a la cima."
  },

  // -------------------- تَحَدَّثَ (hablar/conversar) --------------------
  {
    question: "هِيَ ______ بِصَوْتٍ هَادِئٍ. (تَحَدَّثَ - هي - hablar)",
    options: ["يَتَحَدَّثُ", "أَتَحَدَّثُ", "نَتَحَدَّثُ", "تَتَحَدَّثُ"],
    correctAnswer: "تَتَحَدَّثُ",
    trad: "Ella habla en voz baja."
  },
  {
    question: "أَنَا ______ مَعَ جَارِي. (تَحَدَّثَ - hablar)",
    options: ["يَتَحَدَّثُ", "تَتَحَدَّثُ", "نَتَحَدَّثُ", "أَتَحَدَّثُ"],
    correctAnswer: "أَتَحَدَّثُ",
    trad: "Yo hablo con mi vecino."
  },
  {
    question: "هُمْ ______ عَنِ الْأَخْبَارِ. (تَحَدَّثَ - هم - conversar)",
    options: ["يَتَحَدَّثُونَ", "تَتَحَدَّثُونَ", "يَتَحَدَّثُ", "نَتَحَدَّثُ"],
    correctAnswer: "يَتَحَدَّثُونَ",
    trad: "Ellos conversan sobre las noticias."
  },

  // -------------------- تَذَكَّرَ (recordar) --------------------
  {
    question: "الْوَلَدُ ______ دُرُوسَهُ. (تَذَكَّرَ - هو - recordar)",
    options: ["تَتَذَكَّرُ", "أَتَذَكَّرُ", "نَتَذَكَّرُ", "يَتَذَكَّرُ"],
    correctAnswer: "يَتَذَكَّرُ",
    trad: "El niño recuerda sus lecciones."
  },
  {
    question: "أَنَا ______ أَحْدَاثَ الْمَاضِي. (تَذَكَّرَ - recordar)",
    options: ["يَتَذَكَّرُ", "تَتَذَكَّرُ", "نَتَذَكَّرُ", "أَتَذَكَّرُ"],
    correctAnswer: "أَتَذَكَّرُ",
    trad: "Yo recuerdo los acontecimientos del pasado."
  },
  {
    question: "هُمْ ______ اللَّهَ كَثِيرًا. (تَذَكَّرَ - هم - recordar)",
    options: ["يَتَذَكَّرُونَ", "تَتَذَكَّرُونَ", "يَتَذَكَّرُ", "نَتَذَكَّرُ"],
    correctAnswer: "يَتَذَكَّرُونَ",
    trad: "Ellos recuerdan mucho a Allah."
  },

  // -------------------- تَعَاوَنَ (cooperar) --------------------
  {
    question: "الطُّلَّابُ ______ فِي الْمَشْرُوعِ. (تَعَاوَنَ - هم - cooperar)",
    options: ["تَتَعَاوَنُونَ", "يَتَعَاوَنُ", "نَتَعَاوَنُ", "يَتَعَاوَنُونَ"],
    correctAnswer: "يَتَعَاوَنُونَ",
    trad: "Los estudiantes cooperan en el proyecto."
  },
  {
    question: "نَحْنُ ______ عَلَى الْخَيْرِ. (تَعَاوَنَ - cooperar)",
    options: ["يَتَعَاوَنُ", "تَتَعَاوَنُ", "أَتَعَاوَنُ", "نَتَعَاوَنُ"],
    correctAnswer: "نَتَعَاوَنُ",
    trad: "Nosotros cooperamos en el bien."
  },
  {
    question: "أَنْتُمْ ______ لِإِكْمَالِ الْمُهِمَّةِ. (تَعَاوَنَ - cooperar)",
    options: ["يَتَعَاوَنُونَ", "تَتَعَاوَنْنَ", "أَتَعَاوَنُ", "تَتَعَاوَنُونَ"],
    correctAnswer: "تَتَعَاوَنُونَ",
    trad: "Vosotros cooperáis para completar la tarea."
  },

  // -------------------- تَعَلَّمَ (aprender) --------------------
  {
    question: "أَنَا ______ اللُّغَةَ الْإِنْجِلِيزِيَّةَ. (تَعَلَّمَ - aprender)",
    options: ["يَتَعَلَّمُ", "تَتَعَلَّمُ", "نَتَعَلَّمُ", "أَتَعَلَّمُ"],
    correctAnswer: "أَتَعَلَّمُ",
    trad: "Yo aprendo el idioma inglés."
  },
  {
    question: "هُوَ ______ بِسُرْعَةٍ. (تَعَلَّمَ - هو - aprender)",
    options: ["تَتَعَلَّمُ", "أَتَعَلَّمُ", "نَتَعَلَّمُ", "يَتَعَلَّمُ"],
    correctAnswer: "يَتَعَلَّمُ",
    trad: "Él aprende rápidamente."
  },
  {
    question: "الطَّالِبَاتُ ______ دُرُوسَهُنَّ. (تَعَلَّمَ - هن - aprender)",
    options: ["يَتَعَلَّمْنَ", "تَتَعَلَّمْنَ", "يَتَعَلَّمُونَ", "نَتَعَلَّمُ"],
    correctAnswer: "تَتَعَلَّمْنَ",
    trad: "Las estudiantes aprenden sus lecciones."
  },

  // -------------------- أَرْسَلَ (enviar) --------------------
  {
    question: "الرَّسُولُ ______ رِسَالَةً. (أَرْسَلَ - هو - enviar)",
    options: ["تُرْسِلُ", "أُرْسِلُ", "نُرْسِلُ", "يُرْسِلُ"],
    correctAnswer: "يُرْسِلُ",
    trad: "El mensajero envía un mensaje."
  },
  {
    question: "أَنَا ______ الْبَرِيدَ الْإِلِكْتُرُونِيَّ. (أَرْسَلَ - enviar)",
    options: ["يُرْسِلُ", "تُرْسِلُ", "نُرْسِلُ", "أُرْسِلُ"],
    correctAnswer: "أُرْسِلُ",
    trad: "Yo envío el correo electrónico."
  },
  {
    question: "هُمْ ______ هَدَايَا لِأَصْدِقَائِهِمْ. (أَرْسَلَ - هم - enviar)",
    options: ["يُرْسِلُونَ", "تُرْسِلُونَ", "يُرْسِلُ", "نُرْسِلُ"],
    correctAnswer: "يُرْسِلُونَ",
    trad: "Ellos envían regalos a sus amigos."
  },

  // -------------------- أَجَابَ (responder) --------------------
  {
    question: "الطَّالِبُ ______ عَلَى السُّؤَالِ. (أَجَابَ - هو - responder)",
    options: ["تُجِيبُ", "أُجِيبُ", "نُجِيبُ", "يُجِيبُ"],
    correctAnswer: "يُجِيبُ",
    trad: "El estudiante responde a la pregunta."
  },
  {
    question: "أَنَا ______ عَلَى الْهَاتِفِ. (أَجَابَ - responder)",
    options: ["يُجِيبُ", "تُجِيبُ", "نُجِيبُ", "أُجِيبُ"],
    correctAnswer: "أُجِيبُ",
    trad: "Yo respondo al teléfono."
  },
  {
    question: "هِيَ ______ بِسُرْعَةٍ. (أَجَابَ - هي - responder)",
    options: ["يُجِيبُ", "أُجِيبُ", "نُجِيبُ", "تُجِيبُ"],
    correctAnswer: "تُجِيبُ",
    trad: "Ella responde rápidamente."
  },

  // -------------------- أَكْمَلَ (completar) --------------------
  {
    question: "الْعَامِلُ ______ عَمَلَهُ. (أَكْمَلَ - هو - completar)",
    options: ["تُكْمِلُ", "أُكْمِلُ", "نُكْمِلُ", "يُكْمِلُ"],
    correctAnswer: "يُكْمِلُ",
    trad: "El trabajador completa su trabajo."
  },
  {
    question: "أَنَا ______ دِرَاسَتِي هَذَا الْعَامَ. (أَكْمَلَ - completar)",
    options: ["يُكْمِلُ", "تُكْمِلُ", "نُكْمِلُ", "أُكْمِلُ"],
    correctAnswer: "أُكْمِلُ",
    trad: "Yo completo mis estudios este año."
  },
  {
    question: "هُمْ ______ مَهَامَّهُمْ قَبْلَ الْمَوْعِدِ النِّهَائِيِّ. (أَكْمَلَ - هم - completar)",
    options: ["يُكْمِلُونَ", "تُكْمِلُونَ", "يُكْمِلُ", "نُكْمِلُ"],
    correctAnswer: "يُكْمِلُونَ",
    trad: "Ellos completan sus tareas antes de la fecha límite."
  },

  // -------------------- أَرَادَ (querer) --------------------
  {
    question: "هُوَ ______ أَنْ يَكُونَ طَبِيبًا. (أَرَادَ - هو - querer)",
    options: ["تُرِيدُ", "أُرِيدُ", "نُرِيدُ", "يُرِيدُ"],
    correctAnswer: "يُرِيدُ",
    trad: "Él quiere ser médico."
  },
  {
    question: "أَنَا ______ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ. (أَرَادَ - querer)",
    options: ["يُرِيدُ", "تُرِيدُ", "نُرِيدُ", "أُرِيدُ"],
    correctAnswer: "أُرِيدُ",
    trad: "Yo quiero aprender árabe."
  },
  {
    question: "هُمْ ______ الْعَدْلَ فِي كُلِّ شَيْءٍ. (أَرَادَ - هم - querer)",
    options: ["يُرِيدُونَ", "تُرِيدُونَ", "يُرِيدُ", "نُرِيدُ"],
    correctAnswer: "يُرِيدُونَ",
    trad: "Ellos quieren la justicia en todo."
  }
]
;

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

  // Example state setup (adjust if your state is different)
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Start quiz handlers
  const startQuiz = (type) => {
    let selectedQuestions = [];
    if (type === 'random') {
      selectedQuestions = getRandomQuestions(QUESTIONS, 10); // 10 random questions
    } else if (type === 'verbs1-10') { // Verbs 1-10 (30 questions)
      selectedQuestions = QUESTIONS.slice(0, 30);
    } else if (type === 'verbs11-20') { // Verbs 11-20 (30 questions)
      selectedQuestions = QUESTIONS.slice(30, 60);
    } else if (type === 'verbs21-30') { // Verbs 21-30 (30 questions)
      selectedQuestions = QUESTIONS.slice(60, 90);
    } else if (type === 'verbs31-40') { // Verbs 31-40 (30 questions)
      selectedQuestions = QUESTIONS.slice(90, 120);
    } else if (type === 'verbs41-50') { // Verbs 41-50 (30 questions)
      selectedQuestions = QUESTIONS.slice(120, 150);
    } else if (type === 'verbs51-60') { // Verbs 51-60 (30 questions)
      selectedQuestions = QUESTIONS.slice(150, 180);
    } else if (type === 'verbs61-70') { // Verbs 61-70 (30 questions)
      selectedQuestions = QUESTIONS.slice(180, 210);
    } else if (type === 'verbs71-76') { // Verbs 71-76 (18 questions, as 76 verbs * 3Q = 228 total Qs)
      selectedQuestions = QUESTIONS.slice(210, 228);
    }

    setQuestions(selectedQuestions);
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
        <h1 className="main-title">اَلْفِعْلُ الْمُضَارِعُ</h1>
        {step === 'start' && (
          <>
            <p className="desc" dir="rtl" style={{textAlign: 'center', fontSize: '1.7em', marginBottom: '1em'}}>
              اِخْتَبِرْ مَعْرِفَتَكَ بِتَصْرِيفِ اَلْفِعْلِ الْمُضَارِعِ</p>
            <div className="start-btns">
              <button className="main-btn" onClick={() => startQuiz('random')}>اِمْتِحَانٌ عَشْوَائِيٌّ</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs1-10')}>اَلْأَفْعَالُ ١-١٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs11-20')}>اَلْأَفْعَالُ ١١-٢٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs21-30')}>اَلْأَفْعَالُ ٢١-٣٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs31-40')}>اَلْأَفْعَالُ ٣١-٤٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs41-50')}>اَلْأَفْعَالُ ٤١-٥٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs51-60')}>اَلْأَفْعَالُ ٥١-٦٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs61-70')}>اَلْأَفْعَالُ ٦١-٧٠</button>
              <button className="main-btn alt" onClick={() => startQuiz('verbs71-76')}>اَلْأَفْعَالُ ٧١-٧٦</button>
            </div>
          </>
        )}
        {step === 'quiz' && (
          <div>
            <div className="q-counter" style={{marginBottom: '0.5em', marginTop: '0.5em', fontSize: '1.2em', fontWeight: 'bold'}}>
              اَلسُّؤَالُ {current + 1} مِنْ {questions.length}
            </div>
            <div className="question-box">
              <div
                dir="rtl"
                style={{
                  textAlign: 'center',  // Center align the text
                  fontFamily: 'Tahoma, Arial, "Noto Naskh Arabic", sans-serif', fontSize: '1.2em', marginBottom: '1em',
                  color: '#333', direction: 'rtl'
                }}
              >
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
                  <div className="feedback correct" style={{marginTop: '1.2em', marginBottom: '1.2em', direction: 'rtl'}}>
                    إِجَابَةٌ صَحِيحَةٌ! أَحْسَنْتَ!
                    <div style={{marginTop: '0.5em', fontSize: '0.9em', color: '#555', direction: 'ltr'}}>
                      {questions[current].trad}
                    </div>
                  </div>
                ) : (
                  <div className="feedback wrong" style={{marginTop: '1.2em', marginBottom: '1.2em', direction: 'rtl'}}>
                    إِجَابَةٌ خَاطِئَةٌ.
                    {!showCorrect ? (
                      <button className="show-btn" style={{display: 'block', width: '90%', maxWidth: '350px', margin: '0.5em auto'}} onClick={handleShowCorrect}>عَرْضُ الإِجَابَةِ اَلصَّحِيحَةِ</button>
                    ) : (
                      <>
                        <p className="correct-answer-label" dir="rtl">الإِجَابَةُ اَلصَّحِيحَةُ هِيَ:</p>
                        <span className="correct-answer-value">{questions[current].correctAnswer}</span>
                        <div style={{marginTop: '0.5em', fontSize: '0.9em', color: '#555', direction: 'ltr'}}>
                          {questions[current].trad}
                        </div>
                      </>
                    )}
                  </div>
                )
              )}
              {showFeedback && (
                <div>
                  {isCorrect ? (
                    <div>
                      <span>¡Correcto!</span>
                      <div>{questions[currentQuestion].trad}</div>
                    </div>
                  ) : (
                    <div>
                      <span>Incorrecto. La respuesta correcta es: {questions[currentQuestion].correctAnswer}</span>
                      <div>{questions[currentQuestion].trad}</div>
                    </div>
                  )}
                </div>
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
