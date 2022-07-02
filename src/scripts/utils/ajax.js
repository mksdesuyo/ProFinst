const dates = document.querySelectorAll('.day-content');
const seeYear = document
  .querySelector('table')
  .querySelectorAll('.year-title')[2];

for (const date of dates) {
  date.addEventListener('click', (event) => {
    const day = event.target;

    const month =
      date.parentElement.parentElement.parentElement.parentElement.querySelector(
        '.month-title'
      );
    const year =
      date.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
        .querySelector('table')
        .querySelectorAll('.year-title')[2];

    console.log(day.innerText, month.innerText, seeYear.innerText);
  });
}