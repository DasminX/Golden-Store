# Golden-Store

<h1>It's in progress</h1>

This project is a website, where I'll simulate an online shop

In the project, at first I decided to make it like static, every single product was a seperate html file. After that, I improved it (I think so) to dynamic loads by using JavaScript - simply by injecting HTML code, according to dynamic data, to make it DRY. Later on, when it got so messy, I've decided to introduce MVC architecture (which made it so easy to read and I personally love it!). So it is for now...



Live demo present on the right ==>

## <h2>!!! ATM MOBILES ONLY !!!</h2>

---

MOBILES MAIN PAGE:

1. Navigation:
   On loading the page, navigation element is visible only for gold course element (gold course will be downloaded and updated from outer API every period of time (f.ex. 15min) - when 'Hamburger' is clicked, navigation fully opens, showing the navigation' options, and when clicked again, it hides - **_ HAMBURGER WAS SIMPLY PASTED FROM SOMEONE'S CODEPEN: 'https://codepen.io/Bilal1909/pen/KKdrmRP'. I changed that to be on click instead of on hovering _** - clicking each of first two nav options scrolls smoothly to each section below, clicking on 'abous us'* and 'terms and conditions' renders these pages.
   
2. Header:
- online-shop's title, covered with golden background, rotating calmly
- motto title with 'span' element covered with golden background
- pumping 'scroll down' pargraph

3. Shop:
   - built with grid layout
   - each section contains title and gold-items (bars, coins)
   - each item has image, price and anchor - by clicking the anchor, listener triggers function which checks id of a clicked item, searches data in array of objects with dynamic data, and then renders the page inserting HTML with mentioned data
4. Footer:
- has info about copy etc.

---

MOBILES PRODUCT PAGE:

1. Navigation - stays the same

2. Product presentation:
   - there's image, price, title
   - we can change an amount, how many items we'd like to buy
   - add to cart button - shows modal, which (shows us how many items we added and lets us going to shopping cart)*  

   Accord to data from products array, the content is dynamic. :)
   
---

MOBILES TERMS AND CONDITIONS PAGE:

There is only a description - lorem ipsum, it's not really important for now.
   
---

<<< SHOPPING CART, DYNAMIC GOLD PRICES, LOCAL STORAGE (no infinite fetching, remembering the place where user finished browsing when reloaded), ABOUS US SECTION >>>  

  <h3> * - not introduced yet <h3>
   
<h2> MORE SOON <h2>
