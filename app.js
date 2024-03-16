const wrapper = document.querySelector(".sliderwrapper");
const item = document.querySelectorAll(".menuitem");

item.forEach((items, index) => {
    items.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    })
})