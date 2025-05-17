const translations = {
  en: {
    title: "English Calendar Game",
    info: `Each month and weekday in English has roots in Latin, mythology, and history.<br>
<br>January: Named after Janus, the Roman god of doors and beginnings.<br>
February: From Februa, a Roman festival of purification.<br>
March: Named after Mars, the Roman god of war.<br>
April: Possibly from Latin 'aperire' (to open), referring to spring.<br>
May: Named after Maia, a Roman goddess of growth.<br>
June: From Juno, Roman goddess of marriage.<br>
July: Named after Julius Caesar.<br>
August: Named after Emperor Augustus.<br>
September: From Latin 'septem' (seven).<br>
October: From Latin 'octo' (eight).<br>
November: From Latin 'novem' (nine).<br>
December: From Latin 'decem' (ten).<br>
<br>Days of the week:<br>
Monday: Moon's day.<br>
Tuesday: Tiw's day (Norse god of war).<br>
Wednesday: Woden's day (Odin).<br>
Thursday: Thor's day.<br>
Friday: Freya's day.<br>
Saturday: Saturn's day.<br>
Sunday: Sun's day.<br>
<br>This website was created by a 6th grade student — Symbaev Erken.<br><br>
🤖 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">Ask the AI bot about the calendar</a>`
  },
  ru: {
    title: "Игра: Английский календарь",
    info: `Каждый месяц и день недели в английском языке имеют исторические и мифологические корни.<br>
<br>Январь: назван в честь Януса — бога начала.<br>
Февраль: от праздника очищения Фебруа.<br>
Март: в честь Марса, бога войны.<br>
Апрель: возможно, от латинского 'aperire' — открывать.<br>
Май: в честь богини Майи.<br>
Июнь: в честь Юноны.<br>
Июль: в честь Юлия Цезаря.<br>
Август: в честь императора Августа.<br>
Сентябрь: от лат. 'семь'.<br>
Октябрь: от лат. 'восемь'.<br>
Ноябрь: от лат. 'девять'.<br>
Декабрь: от лат. 'десять'.<br>
<br>Дни недели:<br>
Понедельник: день Луны.<br>
Вторник: день Тюра.<br>
Среда: день Одина.<br>
Четверг: день Тора.<br>
Пятница: день Фрейи.<br>
Суббота: день Сатурна.<br>
Воскресенье: день Солнца.<br>
<br>Этот сайт создал ученик 6 класса — Симбаев Еркен.<br><br>
🤖 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">Спроси у ИИ-бота про календарь</a>`
  },
  kz: {
    title: "Ағылшын күнтізбесі ойыны",
    info: `Ағылшын тіліндегі айлар мен аптаның күндерінің шығу тегі бар.<br>
<br>Қаңтар: Янус құдайының құрметіне аталған.<br>
Ақпан: Римдік тазарту рәсімі Фебруа.<br>
Наурыз: Соғыс құдайы Марстың атымен.<br>
Сәуір: 'Аперире' — ашылу (көктем).<br>
Мамыр: Өсім құдайы Майяның атымен.<br>
Маусым: Юнона құрметіне.<br>
Шілде: Юлий Цезарьға арналған.<br>
Тамыз: Император Августың атымен.<br>
Қыркүйек: 'жеті' деген мағына.<br>
Қазан: 'сегіз'.<br>
Қараша: 'тоғыз'.<br>
Желтоқсан: 'он'.<br>
<br>Апта күндері:<br>
Дүйсенбі: Ай күні.<br>
Сейсенбі: Тив құдайының күні.<br>
Сәрсенбі: Один күні.<br>
Бейсенбі: Тор күні.<br>
Жұма: Фрейя күні.<br>
Сенбі: Сатурн күні.<br>
Жексенбі: Күн күні.<br>
<br>Бұл сайтты 6-сынып оқушысы — Симбаев Еркен жасады.<br><br>
🤖 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">AI боттан күнтізбе жайлы сұра</a>`
  }
};
let currentLanguage = "en";
let questionIndex = 0;
let attempts = 3;
let timer;

const questions = [
  {
    q: { en: "Who is January named after?", ru: "В честь кого назван January?", kz: "January кімнің құрметіне аталған?" },
    answers: ["Janus", "Mars", "Saturn"], correct: 0
  },
  {
    q: { en: "What does 'March' refer to?", ru: "'March' что означает?", kz: "'March' нені білдіреді?" },
    answers: ["War god", "Love goddess", "Sun festival"], correct: 0
  },
  {
    q: { en: "Which god is Thursday named after?", ru: "В честь какого бога назван Thursday?", kz: "Thursday қай құдайдың атымен аталған?" },
    answers: ["Thor", "Odin", "Loki"], correct: 0
  },
  {
    q: { en: "What is the origin of May?", ru: "Происхождение May?", kz: "May сөзі қайдан шыққан?" },
    answers: ["Maia", "Mars", "Juno"], correct: 0
  },
  {
    q: { en: "What planet is Saturday named after?", ru: "Saturday назван в честь какой планеты?", kz: "Saturday қай планетаның атымен?" },
    answers: ["Saturn", "Jupiter", "Venus"], correct: 0
  },
  {
    q: { en: "What does April mean?", ru: "Что означает April?", kz: "April нені білдіреді?" },
    answers: ["To open", "To grow", "To shine"], correct: 0
  },
  {
    q: { en: "Who is July named after?", ru: "July назван в честь кого?", kz: "July кімнің атымен аталған?" },
    answers: ["Julius Caesar", "Juno", "Augustus"], correct: 0
  },
  {
    q: { en: "What does September mean?", ru: "Что означает September?", kz: "September нені білдіреді?" },
    answers: ["Seven", "Nine", "Ten"], correct: 0
  },
  {
    q: { en: "Which day is named after the Moon?", ru: "Какой день назван в честь Луны?", kz: "Қай күн Айға арналған?" },
    answers: ["Monday", "Tuesday", "Friday"], correct: 0
  },
  {
    q: { en: "Which god is Wednesday named after?", ru: "В честь какого бога назван Wednesday?", kz: "Wednesday қай құдайдың атымен аталған?" },
    answers: ["Odin", "Thor", "Freyja"], correct: 0
  }
];

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  currentLanguage = e.target.value;
  updateLanguage();
});

function updateLanguage() {
  document.getElementById("title").innerText = translations[currentLanguage].title;
  document.getElementById("infoContent").innerHTML = translations[currentLanguage].info;
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(el => el.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

function startGame() {
  questionIndex = 0;
  attempts = 3;
  loadQuestion();
}

function loadQuestion() {
  clearTimeout(timer);
  const q = questions[questionIndex];
  document.getElementById("question").innerText = q.q[currentLanguage];
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.innerText = a;
    btn.onclick = () => checkAnswer(i);
    btn.onmousedown = () => document.getElementById("clickSound").play();
    answersDiv.appendChild(btn);
  });
  document.getElementById("attempts").innerText = `Attempts: ${attempts}`;
  let timeLeft = 30;
  document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time: ${timeLeft}s`;
    if (timeLeft === 0) {
      clearInterval(timer);
      wrong();
    }
  }, 1000);
}

function checkAnswer(index) {
  const q = questions[questionIndex];
  if (index === q.correct) {
    document.getElementById("correctSound").play();
    questionIndex++;
    if (questionIndex < questions.length) {
      loadQuestion();
    } else {
      alert("You completed all levels!");
    }
  } else {
    wrong();
  }
}

function wrong() {
  document.getElementById("wrongSound").play();
  attempts--;
  if (attempts <= 0) {
    alert("Game Over!");
  } else {
    loadQuestion();
  }
}

document.getElementById("reviewForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = e.target.querySelector("textarea").value;
  const div = document.createElement("div");
  div.innerText = text;
  document.getElementById("reviewsList").appendChild(div);
  e.target.reset();
});

