const getKoreanDayOfWeek = (date: Date) => {
  const daysInKorean = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = date.getDay();
  return daysInKorean[dayOfWeek];
};

export const formatYYYYMMDDWithKor = (date: string) => {
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export const formatYYYYMMDDWithDot = (date: string) => {
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDate();

  return `${year}.${month}.${day}`;
};

export const formatYYYYMMDDWithSlash = (date: string) => {
  const dates = new Date(date);
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const day = dates.getDate();

  return `${year}/${month}/${day}`;
};
