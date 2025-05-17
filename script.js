const translations = {
  en: {
    title: "English Calendar Game",
    info: `Each month and weekday in English has roots in Latin, mythology, and history.
- January: Named after Janus, the Roman god of doors and beginnings.
- February: From Februa, a Roman festival of purification.
- March: Named after Mars, the Roman god of war.
- April: Possibly from Latin 'aperire' (to open), referring to spring.
- May: Named after Maia, a Roman goddess of growth.
- June: From Juno, Roman goddess of marriage.
- July: Named after Julius Caesar.
- August: Named after Emperor Augustus.
- September: From Latin 'septem' (seven).
- October: From Latin 'octo' (eight).
- November: From Latin 'novem' (nine).
- December: From Latin 'decem' (ten).

Days of the week:
- Monday: Moon's day.
- Tuesday: Tiw's day (Norse god of war).
- Wednesday: Woden's day (Odin).
- Thursday: Thor's day.
- Friday: Freya's day.
- Saturday: Saturn's day.
- Sunday: Sun's day.

Made by a 6th grade student from Timiryazev school.
<br><br>
🔍 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">Ask the AI bot about the calendar</a>`
  },
  ru: {
    title: "Игра: Английский календарь",
    info: `Каждый месяц и день недели в английском языке имеют исторические и мифологические корни.
- Январь: назван в честь Януса — бога начала.
- Февраль: от праздника очищения Фебруа.
- Март: в честь Марса, бога войны.
- Апрель: возможно, от латинского 'aperire' — открывать.
- Май: в честь богини Майи.
- Июнь: в честь Юноны.
- Июль: в честь Юлия Цезаря.
- Август: в честь императора Августа.
- Сентябрь: от лат. 'семь'.
- Октябрь: от лат. 'восемь'.
- Ноябрь: от лат. 'девять'.
- Декабрь: от лат. 'десять'.

Дни недели:
- Понедельник: день Луны.
- Вторник: день Тюра.
- Среда: день Одина.
- Четверг: день Тора.
- Пятница: день Фрейи.
- Суббота: день Сатурна.
- Воскресенье: день Солнца.

Сайт создал ученик 6 класса Тимирязевской школы.
<br><br>
🤖 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">Спроси у ИИ-бота про календарь</a>`
  },
  kz: {
    title: "Ағылшын күнтізбесі ойыны",
    info: `Ағылшын тіліндегі айлар мен аптаның күндерінің шығу тегі бар.
- Қаңтар: Янус құдайының құрметіне аталған.
- Ақпан: Римдік тазарту рәсімі Фебруа.
- Наурыз: Соғыс құдайы Марстың атымен.
- Сәуір: 'Аперире' — ашылу (көктем).
- Мамыр: Өсім құдайы Майяның атымен.
- Маусым: Юнона құрметіне.
- Шілде: Юлий Цезарьға арналған.
- Тамыз: Император Августың атымен.
- Қыркүйек: 'жеті' деген мағына.
- Қазан: 'сегіз'.
- Қараша: 'тоғыз'.
- Желтоқсан: 'он'.

Апта күндері:
- Дүйсенбі: Ай күні.
- Сейсенбі: Тив құдайының күні.
- Сәрсенбі: Один күні.
- Бейсенбі: Тор күні.
- Жұма: Фрейя күні.
- Сенбі: Сатурн күні.
- Жексенбі: Күн күні.

Бұл сайтты Тимирязев мектебінің 6-сынып оқушысы жасады.
<br><br>
🧠 <a href="https://poe.com/BotKQ72NJ0B6N" target="_blank">AI-боттан күнтізбе туралы сұра</a>`
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

