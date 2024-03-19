const wrapper = document.querySelector(".sliderwrapper");
const item = document.querySelectorAll(".menuitem");



const product = [
    {
        id: 1,
        title: "Adidas",
        price: 110,
        color: [
            {
                code: "white",
                img: "./img/adidas.png"
            },
            {
                code: "grey",
                img: "./img/adidas2.png"
            },
        ],
    },
    {
        id: 2,
        title: "Nike",
        price: 90,
        color: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            },
        ],
    },
    {
        id: 3,
        title: "Puma",
        price: 130,
        color: [
            {
                code: "black",
                img: "./img/puma.png"
            },
            {
                code: "white",
                img: "./img/puma2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Campus",
        price: 20,
        color: [
            {
                code: "white",
                img: "./img/campus.png"
            },
            {
                code: "black",
                img: "./img/campus2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Sparx",
        price: 10,
        color: [
            {
                code: "black",
                img: "./img/sparx.png"
            },
            {
                code: "grey",
                img: "./img/sparx2.png"
            },
        ],
    },
];
const getproduct = product[0];
const changeproduct = document.querySelector(".product");
const changeproductcolor = document.querySelectorAll(".color");
const changeproductimg = document.querySelector(".productImg");
const changeproducttitle = document.querySelector(".productTitle");
const changeproductprice = document.querySelector(".productPrice");
item.forEach((items, index) => {
    items.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
       
       
        product.forEach((arr)=>{
            if(arr.title == items.innerHTML){
               
              changeproductimg.src =  `${arr.color[0].img}`;
                  changeproducttitle.innerHTML = `${arr.title}`;
                changeproductprice.innerHTML =  `$${arr.price}`
          

                changeproductcolor.forEach((items, index) => {
                    items.style.backgroundColor = `${arr.color[index].code}`
                    items.addEventListener("click", () => {
                        console.log(items)
                        changeproductimg.src = `${arr.color[index].img}`;
                    })
                });
            }
            
        })
        //console.log(items.innerHTML)
    })
})

changeproductcolor.forEach((items, index) => {
    items.addEventListener("click", () => {
        console.log(items)
        changeproductimg.src = `${getproduct.color[index].img}`;
    })
});

const size = document.querySelectorAll(".size");

size.forEach((items,index)=>{
    items.addEventListener("click",()=>{
        size.forEach((value)=>{
            value.style.backgroundColor = "white";
            value.style.color = "black";
        })
        items.style.backgroundColor = "black";
        items.style.color = "white";
    })
})
const productform = document.querySelector(".payment");
document.querySelector(".productbtn").addEventListener("click",()=>{
    productform.style.display= 'flex'
})

document.querySelector(".closebtn").addEventListener("click", () => {
    productform.style.display = 'none'
})