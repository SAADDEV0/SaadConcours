export function isUrgentNews(item) {
  if (item.cloture || !item.date_limite) return false;
  const days = Math.round(
    (new Date(item.date_limite + "T00:00:00") - new Date(new Date().toDateString())) / 86400000
  );
  return days >= 0 && days <= 7;
}
