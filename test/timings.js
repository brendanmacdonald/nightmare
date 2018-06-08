const Nightmare = require('nightmare')

main().catch(console.error)

async function main() {
  const nightmare = Nightmare({ show: false, gotoTimeout: 1200000 })
  const pageurl = 'https://www.bbc.co.uk/'

  console.time('goto')
  await nightmare.goto(pageurl)
  console.timeEnd('goto')
  console.log(await nightmare.title())

  await nightmare.end()
}