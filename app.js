function showEnglish() {
    document.getElementById("engVer").style.display = "";
    document.getElementById("chiVer").style.display = "none";
    document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";

}

function showChinese() {
    document.getElementById("engVer").style.display = "none";
    document.getElementById("chiVer").style.display = "";
    document.getElementById("toptitle").innerHTML = "健步行徑";
}
