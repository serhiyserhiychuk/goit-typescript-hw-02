/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let WorkDay =
  WeekDay.Monday |
  WeekDay.Tuesday |
  WeekDay.Wednesday |
  WeekDay.Thursday |
  WeekDay.Friday;

function isWeekend(weekDay: WeekDay): boolean {
  return weekDay === WorkDay;
}
