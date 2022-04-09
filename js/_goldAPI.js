export default async function goldAPI() {
  const req = await fetch()
  ;("https://www.metals-api.com/api/latest?access_key=7duc71qgm1wtl4tz2uc57qx3ih0evw612x6e3ib40rvxu3tv2630jiflhpg4&from=XAU&to=USD")
  const data = await req.json()
  console.log(data)
}
