// Select Element
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');

// =======Toggle btn============
navToggle.addEventListener('click', function(){
    linksContainer.classList.toggle('show-links');
    navToggle.classList.toggle('show-icon')
});


// ========= Date ===========
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

//  ======Top Link =======
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 500){
        topLink.classList.add('show-top');
    }else{
        topLink.classList.remove('show-top')
    }
});

//  Underline

// ========= Load Images ===========
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "others",
      price: 15.99,
      img: "/asset/imgs/images/vege-1.png",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "others",
      price: 13.99,
      img: "/asset/imgs/images/vege-2.png",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "vegetable",
      price: 6.99,
      img: "/asset/imgs/images/vege-3.png",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "vegetable",
      price: 20.99,
      img: "/asset/imgs/images/vege-4.png",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "vegetable",
      price: 22.99,
      img: "/asset/imgs/images/vege-5.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: " vegetable",
      price: 18.99,
      img: "/asset/imgs/images/vege-6.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "others",
      price: 8.99,
      img: "/asset/imgs/images/vege-7.png",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "vegetable",
      price: 12.99,
      img: "/asset/imgs/images/vege-8.png",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "vegetable",
      price: 16.99,
      img: "/asset/imgs/images/vege-9.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "vegetable",
      price: 22.99,
      img: "/asset/imgs/images/vege-10.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "buttermilk apple",
        category: "fruit",
        price: 15.99,
        img: "/asset/imgs/UTB8jE5auYnJXKJkSahGq6xhzFXaL-removebg-preview.png",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 12,
        title: "sweet banana",
        category: "fruit",
        price: 13.99,
        img: "/asset/imgs/banana.png" ,
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 13,
        title: "lavourish orange",
        category: "fruit",
        price: 6.99,
        img: "/asset/imgs/orange.png",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 14,
        title: "fresh tomoatos",
        category: "fruit",
        price: 20.99,
        img: "/asset/imgs/tomatos.png",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 15,
        title: "Levourish pear",
        category: "fruit",
        price: 22.99,
        img: "/asset/imgs/pear.png",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 16,
        title: "reddish strewberry",
        category: "fruit",
        price: 18.99,
        img: "/asset/imgs/strwberry.png",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
     
  ];
  
  const sectionCenter = document.querySelector(".flex-item");
  const filterBtn = document.querySelectorAll(".menu");

  window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
  });

//   Filter Items

    filterBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItems){
                if (menuItems.category === category){
                    return menuItems;
                };
            });;
            if(category === "all"){
                displayMenuItems(menu)
            }
            else{
                displayMenuItems(menuCategory)
            }
        })
    })

  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return ` <div class="flex-img">
        <div class="img">
            <img src="${item.img}" alt="" class="'photo'">
        </div>
        <div class="about-price">
            <p class="name">
                ${item.title}
            </p>
            <p class="price">$${item.price}</p>
        </div>
        <div class="flex-btn">
            <button class="bag-btn" type="button">add to bag</button>
            <button class="bag-btn" type="button"><i class="fas fa-shopping-bag"></i></button>
        </div>
    </div>`
      });
      displayMenu = displayMenu.join(" ")
      sectionCenter.innerHTML = displayMenu;
  }


