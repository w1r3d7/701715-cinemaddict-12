export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const addZero = (number) => {
  return String(number).padStart(2, 0);
};

export const humanizeDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}/${addZero(month)}/${addZero(day)} ${addZero(hours)}:${addZero(minutes)}`;
};

export const setFirstLetterToUpperCase = (string) => {
  const result = String(string).toLowerCase();

  return `${result[0].toUpperCase()}${result.slice(1)}`;
};