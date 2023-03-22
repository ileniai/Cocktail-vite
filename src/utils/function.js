export const filteredList = (list, key, value) =>
  list.filter((item) => item[key] === value);

  export const textDescription = (str) =>
  str.split(" ").splice(0, 15).join(" ") + "..."