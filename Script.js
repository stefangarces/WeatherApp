const searchButton = document.getElementsByClassName("searchButton");

function search() {
    let searchBox = document.getElementsByClassName("searchBox");
    let searchStr = searchBox.value;

    alert(searchStr);
    return;
}

searchButton.AddEventListener("click", search);