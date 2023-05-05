import { addDays, subDays } from "date-fns";

export const calendarDate = ({
  date,
  INITDAY,
}: {
  date: Date;
  INITDAY: number;
}) => {
  const offset = 1000 * 60 * 60 * 9; //한국 시간으로 바꾸기 위해

  const currentDay = date.getDate();
  let currentMonth = 0;
  if (currentDay < INITDAY) {
    // 초기화  된 날짜보다 작으면 저번달과 합쳐짐
    currentMonth = date.getMonth();
  } else {
    currentMonth = date.getMonth() + 1;
  }
  const currentYear = date.getFullYear();
  let startOfMonth = new Date(
    new Date(currentYear, currentMonth - 1, INITDAY).getTime() + offset
  ); //초기화 된 월 시작 날
  const lastDayOfMonth = new Date(
    new Date(currentYear, currentMonth, 0).getTime() + offset
  ).getDate(); //다음달의 0번이 이번달의 마지막날
  const startDayOfTheWeek = startOfMonth.getDay();
  const datesOfMonth: { date: Date; isShow: boolean }[] = [];
  //시작일 전 날짜들
  for (let i = 0; i < startDayOfTheWeek; i++) {
    datesOfMonth.push({
      date: subDays(startOfMonth, startDayOfTheWeek - i),
      isShow: false,
    });
  }
  // 활성화된 날짜들
  for (let i = 0; i < lastDayOfMonth; i++) {
    datesOfMonth.push({ date: addDays(startOfMonth, i), isShow: true });
  }
  const lastDayOfWeek = addDays(startOfMonth, lastDayOfMonth).getDay();
  //마지막 날짜들
  if (lastDayOfWeek > 0) {
    for (let i = 0; i <= 6 - lastDayOfWeek; i++) {
      datesOfMonth.push({
        date: addDays(startOfMonth, lastDayOfMonth + i),
        isShow: false,
      });
    }
  }

  return {
    datesOfMonth,
  };
};
