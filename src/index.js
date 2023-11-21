import "./style.css";

(() => {
  const colorMap = {
    reaction: "rosered",
    memory: "mustard",
    verbal: "grass",
    visual: "cobalt",
  };

  fetch("./data.json")
    .then((response) => response.json())
    .then((results) => {
      if (results.length > 0) {
        results.forEach((result) => {
          const summaryEl = document.getElementById("summary");
          const category = result.category.toLowerCase();
          const bgClass = `bg-${colorMap[category]}-200`;
          const textClass = `text-${colorMap[category]}-600`;

          const resultEl = document.createElement("div");
          resultEl.className = `flex flex-row items-center justify-between rounded-xl p-4 font-semibold ${bgClass}`;
          resultEl.innerHTML = `<div class="flex items-center "><img src="${result.icon}" alt="" class="pr-4"><span class="${textClass}">${result.category}</span></div><div>${result.score} <span class="opacity-50">/ 100</span></div>`;

          summaryEl.appendChild(resultEl);
        });
      }
    });
})();
