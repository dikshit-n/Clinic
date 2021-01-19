export const calculateDate = (timestamp, days, month, year) => {
  let Days = days || 0;
  let Months = month || 0;
  let Years = year || 0;
  let date = new Date(timestamp);
  date.setDate(date.getDate() + parseInt(Days));
  date.setMonth(date.getMonth() + parseInt(Months));
  date.setFullYear(date.getFullYear() + parseInt(Years));
  return date.getTime();
};

export function currentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  return yyyy + "-" + mm + "-" + dd;
}

export const getDateCollapsed = (timestamp) => {
  let date = new Date(timestamp);
  return (
    date.getDate().toString() +
    "-" +
    (date.getMonth() + 1).toString() +
    "-" +
    date.getFullYear().toString()
  );
};

export const getTerminalsOfWeek = (timestamp) => {
  let curr = new Date(timestamp);
  let first = curr.getDate() - curr.getDay();
  let last = first + 6;

  let firstday = new Date(curr.setDate(first)).getTime();
  let lastday = new Date(curr.setDate(last)).getTime();
  if (firstday > lastday) {
    let temp = lastday;
    lastday = firstday;
    firstday = temp;
  }
  let wednesday = new Date(curr.setDate(first));
  wednesday.setDate(wednesday.getDate() + 3);
  wednesday = wednesday.getTime();
  return [firstday, wednesday, lastday];
};
