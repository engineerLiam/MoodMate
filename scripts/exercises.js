const content = document.getElementById("exerciseContent");

function showExercise(type) {
  let html = "";

  switch (type) {
    case "breathing":
      html = `
        <h3>Дыхательное упражнение</h3>
        <p>1. Сядьте удобно. Закройте глаза.<br>
        2. Вдохните через нос на 4 счёта...<br>
        3. Задержите дыхание на 4 счёта...<br>
        4. Медленно выдохните через рот на 4 счёта...<br>
        5. Повторите 5 раз.</p>`;
      break;

    case "grounding":
      html = `
        <h3>Заземление (5-4-3-2-1)</h3>
        <p>
          Назовите:<br>
          • 5 предметов, которые вы видите<br>
          • 4 звука, которые вы слышите<br>
          • 3 вещи, которых вы можете коснуться<br>
          • 2 запаха, которые вы ощущаете<br>
          • 1 вкус, который вы чувствуете
        </p>`;
      break;

    case "stretching":
      html = `
        <h3>Растяжка тела</h3>
        <p>1. Медленно вытянитесь вверх руками.<br>
        2. Повернитесь вправо, затем влево.<br>
        3. Поверните шею влево и вправо.<br>
        4. Потянитесь к пальцам ног.<br>
        5. Дышите глубоко всё время.</p>`;
      break;
  }

  content.innerHTML = html;
}
