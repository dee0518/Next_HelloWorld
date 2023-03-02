export const formatDate = (stringDate: string) => {
  const curDate = new Date(stringDate);

  const year = curDate.getFullYear();
  const month = curDate.getMonth();
  const date = curDate.getDate();

  return `${year}.${month}.${date}`;
};
