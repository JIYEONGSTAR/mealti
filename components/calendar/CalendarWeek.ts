import { addDays, subDays } from "date-fns";

export const CalendarWeek = ({ date }: { date: Date }) => {
  const offset = 1000 * 60 * 60 * 9; //한국 시간으로 바꾸기 위해
  const currentDay = new Date(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() +
      offset
  );
  const weekOfDay = currentDay.getDay();
  let weekList = [];
  for (let i = 0; i < weekOfDay; i++) {
    weekList.push({
      date: subDays(currentDay, weekOfDay - i),
      isShow: true,
    });
  }
  for (let i = 0; i < 7 - weekOfDay; i++) {
    weekList.push({
      date: addDays(currentDay, i),
      isShow: true,
    });
  }

  return { weekList };
};
