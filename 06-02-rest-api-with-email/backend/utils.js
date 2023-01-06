export function getToday() {
  const createdAt = new Date();
  const year = createdAt.getFullYear();
  const month = createdAt.getMonth() + 1;
  const date = createdAt.getDate();
  return `${year}-${month}-${date}`
}