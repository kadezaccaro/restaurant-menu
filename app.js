const menuDataArr = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Turpis egestas pretium aenean pharetra magna. Duis ut diam quam nulla.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Odio morbi quis commodo odio aenean. Diam vulputate ut pharetra sit amet aliquam id diam.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Dapibus ultrices in iaculis nunc sed. Lectus proin nibh nisl condimentum id.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Cursus turpis massa tincidunt dui ut ornare lectus. Viverra adipiscing at in tellus integer.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Pretium viverra suspendisse potenti nullam. Scelerisque varius morbi enim nunc faucibus.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Orci eu lobortis elementum nibh tellus. Nunc scelerisque viverra mauris in aliquam sem fringilla ut.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Proin nibh nisl condimentum id. Justo donec enim diam vulputate ut pharetra sit.`,
  },
  {
    id: 9,
    title: "strawberry milkshake",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Euismod elementum nisi quis eleifend. Purus in mollis nunc sed id semper.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `In nibh mauris cursus mattis molestie. In nisl nisi scelerisque eu ultrices vitae auctor. Vulputate eu scelerisque felis imperdiet proin.`,
  },
];

const menu = document.querySelector(".menu");
const btnContainer = document.querySelector(".btn-container");

// Load items
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menuDataArr);
  displayMenuButtons();
});

const displayMenuItems = (menuData) => {
  let displayMenu = menuData.map((menuItem) => {
    return `<article class="menu-item">
        <picture>
          <img
            src=${menuItem.img}
            alt=${menuItem.title}
          />
        </picture>
        <div class="item-info">
          <header class="item-header">
            <h2 class="title">${menuItem.title}</h2>
            <h2 class="price">${menuItem.price}</h2>
          </header>
          <hr class="spacer" />
          <p>
          ${menuItem.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  menu.innerHTML = displayMenu;
};

const displayMenuButtons = () => {
  // Go through menu data and pull out unique categories dynamically.
  const mealCategories = menuDataArr.reduce(
    (values, menuItem) => {
      if (!values.includes(menuItem.category)) {
        values.push(menuItem.category);
      }
      return values;
    },
    // Initialize array with "all" category.
    ["all"]
  );

  // Create buttons dynamically from menu data.
  const categoryBtnsHTML = mealCategories
    .map((mealCategory) => {
      return `<button class="filter-btn" data-id=${mealCategory}>${mealCategory}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtnsHTML;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // Filter menu items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const clickedCategory = event.currentTarget.dataset.id;
      // Only return menu items that match clicked category.
      const filteredMenuItems = menuDataArr.filter((menuItem) => {
        if (menuItem.category === clickedCategory) {
          return menuItem;
        }
      });
      // Account for "all" category and display everything. Otherwise, display filtered items.
      if (clickedCategory === "all") {
        displayMenuItems(menuDataArr);
      } else {
        displayMenuItems(filteredMenuItems);
      }
    });
  });
};
