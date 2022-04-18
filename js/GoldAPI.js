/* const goldAPI = async () => {
  const req = await fetch("http://api.nbp.pl/api/cenyzlota")
  const goldData = await req.json()
  return { price: goldData[0].cena, date: goldData[0].data }
}

const goldRates = {
  price: 268.77,
  date: "2022-04-15",
}

export const goldInfo = goldAPI().then((res) => console.log(res))
 */
