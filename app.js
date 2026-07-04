function addPlace() {
    const input = document.getElementById("placeInput");
    const place = input.value.trim();

    if (place === "") {
        alert("여행지를 입력하세요!");
        return;
    }

    const list = document.getElementById("placeList");

    const li = document.createElement("li");

    const text = document.createElement("span");
    text.textContent = "✈️ " + place;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(text);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
    input.focus();
}

// 엔터키로도 추가
document.getElementById("placeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addPlace();
    }
});
