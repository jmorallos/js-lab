const date = new Date();
console.log(date.toISOString());
console.log(date.toLocaleDateString());
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};
console.log(date.toLocaleDateString("fil-PH", options))