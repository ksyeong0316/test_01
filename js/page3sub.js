let missionData;

function getMissonData(){
  let getMissonDataString =   window.localStorage.getItem("missionData")
  let getMissonDataObj = JSON.parse(getMissonDataString)
  missionData = getMissonDataObj;
}

function setMissionData(){
    window.localStorage.setItem("missionData", JSON.stringify(missionData))
}

getMissonData()


function open () {
    document.querySelector(".modal_bg").classList.remove("hidden");
}
function close () {
    document.querySelector(".modal_bg").classList.add("hidden");
}

document.getElementById("c_btn").addEventListener("click", open);
document.querySelector(".close").addEventListener("click", close);
document.querySelector(".modal_bg").addEventListener("click", close);   