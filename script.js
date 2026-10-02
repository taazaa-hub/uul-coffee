const MENU = {
  coffee: [["Эспрессо","5,500₮"],["Американо","6,500₮"],["Капучино","8,500₮"],["Латте","9,000₮"],["Флэт уайт","9,500₮"]],
  tea:    [["Сүүтэй цай","4,500₮"],["Ногоон цай","5,000₮"],["Чацарганатай цай","6,000₮"]],
  bake:   [["Круассан","6,000₮"],["Банана талх","5,500₮"],["Чизкейк","11,000₮"]]
};

const list = document.getElementById("list");
const menuImg = document.getElementById("menu-img");
const tabs = document.querySelectorAll(".tabs button");

function show(key) {
  list.innerHTML = "";
  MENU[key].forEach(([name, price]) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${name}</span><b>${price}</b>`;
    list.appendChild(li);
  });
  menuImg.classList.remove("missing");
  menuImg.src = `images/${key}.jpg`;
  tabs.forEach(b => b.setAttribute("aria-selected", b.dataset.t === key));
}

tabs.forEach(b => b.addEventListener("click", () => show(b.dataset.t)));
show("coffee");

// zurag oldohgui bol hooson bagana (gold) haragdana
document.querySelectorAll("img").forEach(img =>
  img.addEventListener("error", () => img.classList.add("missing"))
);