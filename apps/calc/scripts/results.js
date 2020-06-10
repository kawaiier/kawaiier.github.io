const resultsList = document.getElementById("results");
const usp = new URLSearchParams(window.location.search);

const totalWindows = localStorage.getItem("totalWindows");
const litWindows = usp.getAll("flat").length;
const unlitWindows = totalWindows - litWindows;
const unlitWindowsPercentage = Math.round(100 - litWindows / totalWindows * 100);

if (unlitWindowsPercentage == 100) {
    resultsList.append(`Ни одно окошко не горит :'(`);
} else if (unlitWindowsPercentage == 0) {
    resultsList.append(`Все окошки горят! :)`);
} else {
    resultsList.append(`Не горит ${unlitWindows} окошек, то есть ${unlitWindowsPercentage}%`);
};


// for (const [key, value] of usp){
//     resultsList.append(`${key} => ${value}`);
//     resultsList.append(document.createElement("br"));
// }