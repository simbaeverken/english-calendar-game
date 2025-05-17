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

Made by a 6th grade student from Timiryazev school.`,
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

Сайт создал ученик 6 класса Тимирязевской школы.`,
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

Бұл сайтты Тимирязев мектебінің 6-сынып оқушысы жасады.`,
  }
};

let currentLanguage = "en";

document.getElementById("languageSwitcher").addEventListener("change", (e) => {
  currentLanguage = e.target.value;
  updateLanguage();
});

function updateLanguage() {
  document.getElementById("title").innerText = translations[currentLanguage].title;
  document.getElementById("infoContent").innerText = translations[currentLanguage].info;
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(el => el.style.display = "none");
  document.getElementById(sectionId).style.display = "block";
}

updateLanguage();
showSection("info");
