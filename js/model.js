/* Data structures */

export const products = [
  {
    name: "American Eagle 1oz",
    id: 1,
    description: `<h3 class="product__about--description"><span class="golden-color"> The American Gold Eagle</span> is a classic golden coin minted by <span class="golden-color">the US Mint</span>. Since 1986, is one of <span class="golden-color">the most popular</span> bullion coins in the world!</h3>`,
    shortcut: "eagle",
    feeRatio: 1.035,
  },
  {
    name: "Australian Kangaroo 1oz",
    id: 2,
    description: `<h3 class="product__about--description"><span class="golden-color">The Australian Gold Kangaroo</span> is one of <span class="golden-color">the most recognizable</span> bullion coins in the world. Its production began in 1989, commemorating on its obverse the long-legged bagman, which is one of the symbols of <span class="golden-color">Australia</span>.</h3>`,
    shortcut: "kangaroo",
    feeRatio: 1.052,
  },
  {
    name: "Vienna Philharmonic 1 oz",
    id: 3,
    description: `<h3 class="product__about--description"><span class="golden-color">Vienna Philharmonic coin</span> is Europe's first legal tender gold coin made of <span class="golden-color">genuine 24-carat gold</span> and the first with a <span class="golden-color">denomination expressed in euro</span>. This elegant coin is particularly valued for its <span class="golden-color">impeccable artistic appearance and top quality workmanship</span>.
          <span class="golden-color"></span></h3>`,
    shortcut: "philharmonic",
    feeRatio: 1.071,
  },
  {
    name: "Krugerrand 1 oz",
    id: 4,
    description: `<h3 class="product__about--description"><span class="golden-color">Krugerrand</span> is undoubtedly <span class="golden-color">the most popular</span> bullion coin in the world. Struck by the South African Mint, it owes its <span class="golden-color">characteristic reddish colour</span> to a small <span class="golden-color">admixture of copper</span>, which <span class="golden-color">makes</span> the coin <span class="golden-color">harder and more resistant</span> to scratches.</h3>`,
    shortcut: "krugerand",
    feeRatio: 1.042,
  },
  {
    name: "Canadian Maple Leaf 1 oz",
    id: 5,
    description: `<h3 class="product__about--description"><span class="golden-color">Canadian Maple Leaf</span> was introduced into circulation in 1979. Issuance of the coin in its first year was over 37 million copies, making it <span class="golden-color">the world's most popular 24 carat bullion coin</span>. <span class="golden-color">The pristine purity</span> of the product is evidenced by the four nines elegantly styled on the grooves radiating from the centre of the coin decorated with a maple leaf which is <span class="golden-color">Canada's most recognisable symbol</span>. The Gold Maple Leaf is one of the most famous gold coins in the world, guaranteeing an <span class="golden-color">excellent feeRatio and high liquidity</span>, making it a great addition to the investment portfolio of any person seeking <span class="golden-color">stability and independence</span>.</h3>`,
    shortcut: "lipa",
    feeRatio: 1.18,
  },
  {
    name: "American Buffalo 1oz",
    id: 6,
    description: `<h3 class="product__about--description"><span class="golden-color">American Buffalo</span> - in response to the growing popularity of gold bullion coins made of gold of the <span class="golden-color">highest purity</span> in 2006, the management of the United States Mint decided to introduce the <span class="golden-color">coin of 999.9 purity</span> as <span class="golden-color">legal</span> tender in the USA.</h3>`,
    shortcut: "bison",
    feeRatio: 1.086,
  },
  {
    name: "Bar 10g",
    id: 7,
    description: `<h3 class="product__about--description"><span class="golden-color">Golden Bar</span> in our offer is produced from gold of <span class="golden-color">the highest purity 999.9</span> and come from the <span class="golden-color">most prestigious mints</span>, accredited by the LBMA (London Bullion Market Association), which is a guarantee of their <span class="golden-color">highest quality and liquidity</span>.
          </h3>`,
    shortcut: "sztabka",
    feeRatio: 1.07,
  },
  {
    name: "Bar 1 oz",
    id: 8,
    description: `<h3 class="product__about--description"><span class="golden-color">Golden Bar</span> in our offer is produced from gold of <span class="golden-color">the highest purity 999.9</span> and come from the <span class="golden-color">most prestigious mints</span>, accredited by the LBMA (London Bullion Market Association), which is a guarantee of their <span class="golden-color">highest quality and liquidity</span>.
          </h3>`,
    shortcut: "sztabka",
    feeRatio: 1.054,
  },
]

export const goldAPI = async () => {
  const usdReq = await fetch(
    "http://api.nbp.pl/api/exchangerates/tables/a/today/"
  )
  const usdJSON = await usdReq.json()
  const USD = usdJSON[0].rates.find((el) => el.code === "USD")

  const goldReq = await fetch("http://api.nbp.pl/api/cenyzlota")
  const goldData = await goldReq.json()

  const { data, cena } = goldData[0]

  const goldRates = {
    data: data,
    cena: (cena * 31.1034) / USD.mid,
  }

  return goldRates
}
