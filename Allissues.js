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

const loadDetail = (id) => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.data));
};

const displayDetails = (detail) => {
  console.log(detail);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
  <div class="flex justify-between ">
                    <p class="font-bold text-[24px] text-[#1F2937]">${detail.title}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="btn w-[62px] h-[24px] bg-[#00A96E] text-[#FFFFFF] rounded-[100px]">${
                      detail.status
                    }</button>
                    <p class="font-normal text-[12px] text-[#64748B]">${
                      detail.author
                    }</p>
                    <p class="font-normal text-[12px] text-[#64748B]">${
                      detail.createdAt
                    }</p>

                </div>
                <div class="flex gap-2">
                   ${createElements(detail.labels)}

                </div>
                <p class="font-normal text-[16px]  text-[#64748B]">${detail.description}</p>
                <div class="w-[636px] h-[81] bg-[#F8FAFC] flex items-center p-4">
                    <div class="w-[297px]">
                        <p class="font-normal text-[16px]  text-[#64748B]">Assignee:</p>
                        <p class="font-semibold text-[16px] text-[#1F2937]">${detail.assignee}</p>
                    </div>
                    <div>
                        <p>Priority:</p>
                        <button class="rounded-[100px] w-[61px] h-[24px] bg-[#EF4444] text-[#FFFFFF]">${detail.status}</button>
                    </div>
                </div>
  `;
  document.getElementById("my_modal_5").showModal();
};
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
      console.log(openData.id);
      const openCard = document.createElement("div");
      if (openCard) {
        issuesContainer.classList.add("hidden");
        closedContainer.classList.add("hidden");
      }
      openCard.innerHTML = `
      <div onclick="loadDetail(${openData.id})" class="card border-t-green-400 border-t-3 bg-white  w-[350.5px] h-[280px] p-4 space-y-4">
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
      <div onclick="loadDetail(${closedData.id})" class="card  border-t-3 border-t-[#A855F7] w-[350.5px] h-[280px] p-4 space-y-4">
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
    <div onclick="loadDetail(${issue.id})" class="card   bg-white md:w-[350.5px] w-[]  h-[280px] p-4 space-y-4">
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

document.getElementById("allIssues").addEventListener("click", function () {
  loadAllIssues();
});
document.getElementById("allCloseds").addEventListener("click", function () {
  loadCloseds();
});
document.getElementById("allOpens").addEventListener("click", function () {
  loadOpens();
});

document.getElementById("btn-search").addEventListener("click", function () {
  const input = document.getElementById("input-search");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      const allWords = data.data;
      console.log(allWords);
      const filterWords = allWords.filter((issue) =>
        issue.priority.toLowerCase().includes(searchValue),
      );
      displayAllIssues(filterWords);
      displayOpens(filterWords);
      displayCloseds(filterWords);
    });
});

document.getElementById("my_modal_5").addEventListener("click", function () {});
