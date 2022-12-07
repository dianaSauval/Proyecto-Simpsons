export const formatDate = (date: Date) => {
  const now = new Date();
  const elapsedMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

  return elapsedMinutes;
};