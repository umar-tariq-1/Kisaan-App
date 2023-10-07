export const arrAVG = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = sum / numbers.length;

  return average;
};
