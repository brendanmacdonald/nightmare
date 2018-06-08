const Nightmare = require('nightmare')
const obj = require('../utils/page_objects')

main().catch(console.error)

async function main() {
  const nightmare = Nightmare({ show: false, gotoTimeout: 1200000 })

  console.time('Time to go to BBC News')
  await nightmare.goto(obj.baseURL)
  console.timeEnd('Time to go to BBC News')

  await nightmare.end()
}