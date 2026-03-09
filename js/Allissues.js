const spiner = document.getElementById("lodingSpiner");
const allIssuesBtn = document.getElementById("allIssues");
const allOpensBtn = document.getElementById("allOpens");
const allClosedBtn = document.getElementById("allCloseds");

const allIssuesContainer = document.getElementById("Issues-container");
const allOpensContainer = document.getElementById("Opens-container");
const allClosedContainer = document.getElementById("Closed-container");

const createElements = (arr) => {
  const htmlElements = arr.map(
    (el) => `<span class="btn bg-[#FEECEC] text-[#EF4444]">${el}</span>`,
  );
  return htmlElements.join(" ");
};

function showLoading() {
  spiner.classList.remove("hidden");
}
function hiddenLoding() {
  spiner.classList.add("hidden");
}
// Opens
const loadOpens = () => {
  showLoading();
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayOpens(data.data);
      //console.log(data.data);
    });
};
const openContainer = document.getElementById("open-container");
const displayOpens = (openDatas) => {
  hiddenLoding();
  openContainer.innerHTML = "";
  openDatas.forEach((openData) => {
    if (openData.status == "open") {
      //console.log(openData);
      const openCard = document.createElement("div");
      if (openCard) {
        issuesContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");
      }
      openCard.innerHTML = `
      <div class="card border-t-green-400 border-t-3 bg-white  w-[350.5px] h-[280px] p-4 space-y-4">
                <div class="flex justify-between ">
                    <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
                    <button class="btn w-[80px] h-[24px] rounded-[100px] bg-[#FEECEC] text-[#EF4444]">${openData.status}</button>
                </div>
                <div>
                    <h1 class="font-bold text-[14px] text-[#1F2937]">Fix navigation menu on mobile devices</h1>
                    <p class="font-normal text-[12px] text-[#64748B]">The navigation menu doesn't collapse properly on
                        mobile devices...</p>
                </div>
                <div>
                    ${createElements(openData.labels)}

                </div>
                <hr class="w-[260px] ml-[-17.5px] opacity-100">
                <div>
                    <p>#1 by john_doe</p>
                    <p>1/15/2024</p>
                </div>

            </div>
      `;

      openContainer.appendChild(openCard);
    }
  });
};

//Closed
const loadCloseds = () => {
  showLoading();
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCloseds(data.data);
      //console.log(data.data);
    });
};
const closedContainer = document.getElementById("closed-container");
const displayCloseds = (closedDatas) => {
  hiddenLoding();

  closedContainer.innerHTML = "";
  closedDatas.forEach((closedData) => {
    if (closedData.status == "closed") {
      console.log(closedData.length);
      //console.log(openData);
      const closedCard = document.createElement("div");
      if (closedData) {
        issuesContainer.classList.add("hidden");
      }
      closedCard.innerHTML = `
      <div class="card bg-white border-t-3 border-t-[#A855F7] w-[350.5px] h-[280px] p-4 space-y-4">
                <div class="flex justify-between ">
                    <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
                    <button class="btn w-[80px] h-[24px] rounded-[100px] bg-[#FEECEC] text-[#EF4444]">${closedData.status}</button>
                </div>
                <div>
                    <h1 class="font-bold text-[14px] text-[#1F2937]">Fix navigation menu on mobile devices</h1>
                    <p class="font-normal text-[12px] text-[#64748B]">The navigation menu doesn't collapse properly on
                        mobile devices...</p>
                </div>
                <div>
                    ${createElements(closedData.labels)}

                </div>
                <hr class="w-[260px] ml-[-17.5px] opacity-100">
                <div>
                    <p>#1 by john_doe</p>
                    <p>1/15/2024</p>
                </div>

            </div>
      `;

      closedContainer.appendChild(closedCard);
    }
  });
};
// Issues
const loadAllIssues = () => {
  showLoading();
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayAllIssues(data.data);
    });
};
const issuesContainer = document.getElementById("issues-container");
const displayAllIssues = (issues) => {
  hiddenLoding();
  const totalCount = document.getElementById("total-count");

  totalCount.innerHTML = `
  <div class="flex justify-between items-center">
                <div class="h-[98px] flex ">
                    <img class="w-[50px] h-[50px] ml-[24px] mt-[24px] mr-[8px] text-blue-400"
                        src="./assets/Aperture.png" alt="">
                    <div class="mt-[24px]">
                        <h1 id="total-issues">${issues.length} Issues</h1>
                        <p id="info">Track and manage your project issues</p>
                    </div>
                </div>
                <div class="flex ">
                    <p class="mr-[16px]"><span class="text-[#00A96E] "><i
                                class="fa-solid fa-circle w-3 h-3"></i></span>Open
                    </p>
                    <p class="mr-[38.5px]"><span class="text-[#A855F7]"><i class="fa-solid fa-circle"></i></span>Closed
                    </p>
                </div>
            </div>
  `;
  // const issuesContainer = document.getElementById("issues-container");

  issuesContainer.innerHTML = "";

  issues.forEach((issue) => {
    const issueCard = document.createElement("div");
    issueCard.innerHTML = `
    <div class="card bg-white w-[350.5px]  h-[330px] p-4 space-y-4">
                <div class="flex justify-between ">
                    <img class="w-6 h-6" src="./assets/Open-Status.png" alt="">
                    <button class="btn w-[80px] h-[24px] rounded-[100px] bg-[#FEECEC] text-[#EF4444]">${issue.priority}</button>
                </div>
                <div>
                    <h1 class="font-bold text-[14px] text-[#1F2937]">${issue.title}</h1>
                    <p class="line-clamp-3 font-normal text-[12px] text-[#64748B]">${issue.description}</p>
                </div>
                <div>
                   ${createElements(issue.labels)}

                </div>
                <hr class="w-[260px] ml-[-17.5px] opacity-100">
                <div>
                    <p>#1 by john_doe</p>
                    <p>1/15/2024</p>
                </div>

            </div>

    `;
    issuesContainer.append(issueCard);
  });
};
loadAllIssues();

document.getElementById("allOpens").addEventListener("click", function () {
  loadOpens();
});
document.getElementById("allCloseds").addEventListener("click", function () {
  loadCloseds();
});
document.getElementById("allIssues").addEventListener("click", function () {
  loadAllIssues();
});
