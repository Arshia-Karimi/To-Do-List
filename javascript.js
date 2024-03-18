let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  if (input.value) {
    let text = input.value;
    let task = create(text);
    task.innerHTML +=
      '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    ul.appendChild(task);
    input.value = "";
  } else {
    alert("پر کنید");
  }
});

function create(t) {
  let li = document.createElement("li");
  li.textContent = t;
  return li;
}

ul.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});
