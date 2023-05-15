export const CalculateTimeGap = (year: number, month: number) => {
  const startDate = new Date(year, month - 1);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (currentDate.getMonth() === 0) {
      months += 12;
    }
    months += 12;
  }

  return { years, months, days };
};
