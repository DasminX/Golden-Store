export default async function goldAPI() {
  const req = await fetch(
    "https://www.metals-api.com/api/latest?access_key=s&base=XAU&symbols=USD"
  )
  const data = await req.json()
  return ({ USD } = data.rates)
}
