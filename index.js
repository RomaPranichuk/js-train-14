// Завдання 1
/**
 * Функція `getDateDetails` отримує об'єкт дати та повертає об'єкт з деякими деталями про дату.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт, який містить такі властивості:
 *  year - рік,
 *  month - місяць,
 *  day - день місяця.
 */
function getDateDetails(date) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
}

console.log("Завдання: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
//Виведе { year: 2023, month: 11, day: 25 }

// Завдання 2
/**
 * Функція `setDateDetails` приймає об'єкт Date і рядок ISO дати, і встановлює дату з ISO рядка в об'єкт Date.
 *
 * date - Об'єкт Date, в який потрібно встановити дату.
 * isoString - Рядок дати в форматі ISO.
 *
 * Повертає об'єкт Date з встановленою датою, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setDateDetails(date, isoString) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  const isoDate = new Date(isoString).getTime();

  if (isNaN(isoDate)) {
    return "Помилка: недійсний ISO рядок";
  }

  date.setTime(isoDate);

  return date;
}

console.log("Завдання: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
//Виведе 2023-12-25T00:00:00.000Z

// Завдання 3
/**
 * Функція `dateToUTC` приймає об'єкт Date та повертає рядок, що представляє дату в UTC форматі.
 *
 * date - Об'єкт Date.
 *
 * Повертає рядок з датою в UTC форматі, якщо вхідне значення є дійсним об'єктом Date. Якщо ні, виводить повідомлення про помилку.
 */
function dateToUTC(date) {
  if (typeof date.getTime === "function") {
    return date.toUTCString();
  } else {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
}

console.log("Завдання: 3 ==============================");
console.log(dateToUTC(new Date()));
//Виведе Tue, 27 Jun 2023 07:15:47 GMT

// Завдання 4
/**
 * Функція `setSpecificTime` приймає об'єкт Date та встановлює конкретний час.
 *
 * date - Об'єкт Date.
 * hours - Кількість годин.
 * minutes - Кількість хвилин.
 * seconds - Кількість секунд.
 * milliseconds - Кількість мілісекунд.
 *
 * Повертає об'єкт Date з встановленим часом, якщо вхідні дані вірні. Якщо ні, виводить повідомлення про помилку.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  if (typeof date.getTime === "function") {
    date.setHours(hours, minutes, seconds, milliseconds);

    return date;
  } else {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }
}

console.log("Завдання: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
//Виведе 2023-12-25T09:30:00.000Z

// Завдання 5

/**
 * Функція `nextNewYear` приймає об'єкт Date і повертає час до наступного Нового року.
 *
 *
 * Повертає об'єкт з інформацією про час до наступного Нового року:
 * {
 *   days: // Кількість днів до Нового року.
 *   hours: // Кількість годин до Нового року, не включаючи повні дні.
 *   minutes: // Кількість хвилин до Нового року, не включаючи повні години.
 *   seconds: // Кількість секунд до Нового року, не включаючи повні хвилини.
 *   milliseconds: // Кількість мілісекунд до Нового року, не включаючи повні секунди.
 * }
 */
function nextNewYear(date) {
  let now = date || new Date();

  let year = now.getFullYear();

  let nextYear = new Date(year + 1, 0, 1);

  let diff = nextYear - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  let minutes = Math.floor((diff / (1000 * 60)) % 60);

  let seconds = Math.floor((diff / 1000) % 60);

  let milliseconds = diff % 1000;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

console.log("Завдання:5  ==============================");

console.log(nextNewYear());
//Виведе

// Завдання 6
/**
 * Функція `isLeapYear` перевіряє, чи є рік високосним.
 *
 * year - Рік, який треба перевірити.
 *
 * Повертає об'єкт:
 * {
 *   year: // Рік, який був перевірений.
 *   isLeap: // Чи є рік високосним.
 * }
 */
function isLeapYear(year) {
  if (typeof year !== "number") {
    return "Введіть коректний рік";
  }

  let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return { year: year, isLeap: isLeap };
}
console.log("Завдання: 6 ==============================");

console.log(isLeapYear(2020));
//Виведе { year: 2020, isLeap: true }

// Завдання 7
/**
 * Функція `addDays` додає задану кількість днів до вказаної дати.
 *
 * date - Об'єкт Date.
 * days - Кількість днів, які треба додати.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   addedDays: // Кількість доданих днів.
 *   resultDate: // Результуюча дата в форматі 'гггг-мм-дд'.
 * }
 */
function addDays(date, days) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  if (typeof days !== "number") {
    return "Помилка: кількість днів має бути числом";
  }

  let inputDate = date.toISOString();

  date.setDate(date.getDate() + days);

  let resultDate = date.toISOString();

  return {
    inputDate: inputDate,
    addedDays: days,
    resultDate: resultDate,
  };
}

console.log("Завдання: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
//Виведе
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Завдання 8
/**
 * Функція `getDayOfWeek` повертає день тижня вказаної дати українською мовою.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   dayOfWeek: // День тижня українською мовою.
 * }
 */
let daysOfWeek = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п’ятниця",
  "субота",
];

function getDayOfWeek(date) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об'єктом Date";
  }

  let inputDate = date.toISOString();

  let dayIndex = date.getDay();

  let dayOfWeek = daysOfWeek[dayIndex];

  return {
    inputDate: inputDate,
    dayOfWeek: dayOfWeek,
  };
}

console.log("Завдання: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
//Виведе { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'неділя' }

// Завдання 9
/**
 * Функція `getDaysInMonth` повертає кількість днів у місяці вказаної дати.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   daysInMonth: // Кількість днів у місяці.
 * }
 */
function getDaysInMonth(date) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  let inputDate = date.toISOString();

  let month = date.getMonth();

  let year = date.getFullYear();

  let nextMonth = new Date(year, month + 1, 1);

  let lastDay = new Date(nextMonth - 1);

  let daysInMonth = lastDay.getDate();

  return { inputDate: inputDate, daysInMonth: daysInMonth };
}
console.log("Завдання: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
//Виведе { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }

// Завдання 10
/**
 * Функція `getFormattedTime` повертає час в форматі 'гг:хх:сс'.
 *
 * date - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   inputDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   formattedTime: // Час в форматі 'гг:хх:сс'.
 * }
 */
function getFormattedTime(date) {
  if (typeof date.getTime !== "function") {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  let inputDate = date.toISOString();

  let hours = date.getHours();

  let minutes = date.getMinutes();

  let seconds = date.getSeconds();

  let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return { inputDate: inputDate, formattedTime: formattedTime };
}
console.log("Завдання: 10 ==============================");

console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
//Виведе { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '12:30:00' }

// Завдання 11
/**
 * Функція `getAge` обчислює вік на підставі вказаної дати народження.
 *
 * birthDate - Об'єкт Date, представляє дату народження.
 *
 * Повертає об'єкт:
 * {
 *   birthDate: // Дата народження в форматі 'гггг-мм-дд'.
 *   age: // Обчислений вік.
 * }
 */
function getAge(birthDate) {
  if (typeof birthDate.getTime !== "function") {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  let currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  let monthDiff = currentDate.getMonth() - birthDate.getMonth();

  let dateDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
    age--;
  }

  let birthDateString = birthDate.toISOString();

  return { birthDate: birthDateString, age: age };
}
console.log("Завдання: 11 ==============================");

console.log(getAge(new Date("1990-05-15")));
//Виведе { birthDate: '1990-05-15T00:00:00.000Z', age: 33 }

// Завдання 12
/**
 * Функція `compareDates` порівнює дві дати і повертає результат порівняння.
 *
 * date1 - Об'єкт Date.
 * date2 - Об'єкт Date.
 *
 * Повертає об'єкт:
 * {
 *   date1: // Перша дата в форматі 'гггг-мм-дд'.
 *   date2: // Друга дата в форматі 'гггг-мм-дд'.
 *   comparison: // Результат порівняння: -1, якщо date1 < date2, 0, якщо date1 === date2, 1, якщо date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  let comparison = 0;

  if (date1 < date2) {
    comparison = -1;
  } else if (date1 > date2) {
    comparison = 1;
  }

  let date1ISO = date1.toISOString();

  let date2ISO = date2.toISOString();

  return { date1: date1ISO, date2: date2ISO, comparison: comparison };
}
console.log("Завдання: 12 ==============================");

console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
//Виведе
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Завдання 13
/**
 * Функція `getDaysDifference` обчислює різницю в днях між двома датами.
 *
 * startDate - Початкова дата.
 * endDate - Кінцева дата.
 *
 * Повертає об'єкт:
 * {
 *   startDate: // Початкова дата в форматі 'гггг-мм-дд'.
 *   endDate: // Кінцева дата в форматі 'гггг-мм-дд'.
 *   daysDifference: // Різниця в днях між двома датами.
 * }
 */
function getDaysDifference(startDate, endDate) {
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    return "Помилка: вхідне значення має бути об’єктом Date";
  }

  let start = startDate.getTime();

  let end = endDate.getTime();

  let diff = end - start;

  let days = diff / (1000 * 60 * 60 * 24);

  let startISO = startDate.toISOString();

  let endISO = endDate.toISOString();

  return { startDate: startISO, endDate: endISO, daysDifference: days };
}
console.log("Завдання: 13 ==============================");

console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
//Виведе
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
