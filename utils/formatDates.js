import moment from "moment";
import "moment-timezone";

export function formatDate(date) {
  const dateObj = moment(date);
  const formattedDate = dateObj.format("ddd, MMMM DD YYYY");
  return formattedDate;
}
