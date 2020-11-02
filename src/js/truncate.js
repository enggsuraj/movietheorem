// TRUNCATE LOGIC
export function truncate(str) {
  const length = 100;
  const ending = "...";
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}
