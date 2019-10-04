var titleBox = document.getElementById("titleBox"),
    commentBox = document.getElementById("commentBox"),
    actionBox = document.getElementById("actionBox"),
    closeBox = document.getElementById("closeBox"),
    detailBox = document.getElementById("detailBox"),
    isHidden=true,
    isEliminated = false;
titleBox.addEventListener("click", function (e) {
    e.preventDefault();
    if (isHidden) {
        commentBox.className = "commentBox box-visibility animated fadeInUp";
        actionBox.className = "actionBox box-visibility animated fadeInUp";
        isHidden = false;
    } else {
        commentBox.className = "commentBox box-hidden";
        actionBox.className = "actionBox box-hidden";
        isHidden = true;
    }
});
closeBox.addEventListener("click", function (e) {
    e.preventDefault();
    if (isEliminated) {
        detailBox.className = "detailBox box-visibility animated fadeInX";
        isEliminated = true;
    } else {
        detailBox.className = "detailBox box-hidden";
        isEliminated = false;
    }
});