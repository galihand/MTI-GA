const data = require('./initialData')
const idx = Math.floor(Math.random() * 5)

const main = (data) => {
  // code here
  let result = {}

  return result
}


// don't change code below
const test = (func, result) => {
  let flag = false
  if (Object.keys(func).join() === Object.keys(result).join()) flag = true
  else if (Object.keys(func).join() !== Object.keys(result).join()) flag = false
  else if (Object.values(func).join() === Object.values(result).join()) flag = true
  else if (Object.values(func).join() !== Object.values(result).join()) flag = false
  return console.log(flag)
}

test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)