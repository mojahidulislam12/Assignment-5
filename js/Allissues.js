const createElements = (arr) => {
  const htmlElements = arr.map(
    (el) => `<span class="btn bg-[#FEECEC] text-[#EF4444]">${el}</span>`,
  );
  return htmlElements.join(" ");
};
// Opens
const loadOpens = () => {
  const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayOpens(data.data);
      //console.log(data.data);
    });
};

// {id: 1, title: 'Fix navigation menu on mobile devices', description: "The navigation menu doesn't collapse properly on m…ile devices. Need to fix the responsive behavior.", status: 'open', labels: Array(2), …}
// assignee
// :
// "jane_smith"
// author
// :
// "john_doe"
// createdAt
// :
// "2024-01-15T10:30:00Z"
// description
// :
// "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id
// :
// 1
// labels
// :
// (2) ['bug', 'help wanted']
// priority
// :
// "high"
// status
// :
// "open"
// title
// :
// "Fix navigation menu on mobile devices"
// updatedAt
// :
// "2024-01-15T10:30:00Z"
// [[Prototype]]
// :
// Object

const openContainer = document.getElementById("open-container");
const displayOpens = (openDatas) => {
  openContainer.innerHTML = "";
  openDatas.forEach((openData) => {
    if (openData.status == "open") {
      console.log(openData);
      const openCard = document.createElement("div");
      if (openCard) {
        issuesContainer.classList.add("hidden");
      }
      openCard.innerHTML = `
      <div class="card bg-white border-2 w-[350.5px] h-[280px] p-4 space-y-4">
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

// Issues
const loadAllIssues = () => {
  const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayAllIssues(data.data);
    });
};
const issuesContainer = document.getElementById("issues-container");
const displayAllIssues = (issues) => {
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
    <div class="card bg-white border-2 w-[350.5px] h-[330px] p-4 space-y-4">
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
