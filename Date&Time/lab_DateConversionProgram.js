const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(objDate) {
    return `Formatted Date (MM/DD/YYYY): ${objDate.toLocaleDateString("en-US")}`;
}

function formatDateLong(objDate) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    return `Formatted Date (Month Day, Year): ${objDate.toLocaleDateString("en-US", options)}`;
}