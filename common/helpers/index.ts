import { utcToZonedTime } from "date-fns-tz";
import { format, parseISO } from "date-fns";

export const convertToOrdinal = (number: number) => {
  if (typeof number !== "number") {
    return "Invalid number";
  }

  let suffix = "";
  if (number % 100 >= 11 && number % 100 <= 13) {
    suffix = "th";
  } else {
    switch (number % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
        break;
    }
  }

  return `${number}${suffix}`;
};

export const formatDate = (date: string, type = "MMMM dd, yyyy") => {
  if (!date) {
    return "";
  }

  const formattedDate = format(
    utcToZonedTime(parseISO(date), "Asia/Jakarta"),
    type,
  );

  return formattedDate;
};

// export const parseQueryParams = (searchParams) => {
//   const clonedParams = { ...searchParams };
//   Object.keys(clonedParams).forEach((key) => {
//     if (clonedParams[key] === "" || clonedParams[key] === null) {
//       delete clonedParams[key];
//     }
//   });
//   return clonedParams;
// };
