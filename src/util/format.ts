export const FormatDate = (d: Date): string => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // prettier-ignore
  const dateFormat = `${month[d.getMonth()]} ${d.getDate().toString()}, ${d.getFullYear()}`;

  return dateFormat;
};
