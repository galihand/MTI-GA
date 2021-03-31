const data = require('./initialData')
const idx = Math.floor(Math.random() * 5)

const main = (data) => {
  // code here
  let result = {}
  for (let i = 0; i < data.length; i++) {
    let letter = data[i].toLowerCase()
    if (letter === ' ') continue
    else if (!result[letter]) result[letter] = 1
    else if (result[letter] >= 1) result[letter]++
  }
  return result
}


// don't change code below
const test = (func, result) => {
  let flag = false
  if (Object.keys(func).join().toLowerCase() === Object.keys(result).join().toLowerCase()) flag = true
  else if (Object.keys(func).join().toLowerCase() !== Object.keys(result).join().toLowerCase()) flag = false
  else if (Object.values(func).join() === Object.values(result).join()) flag = true
  else if (Object.values(func).join() !== Object.values(result).join()) flag = false
  return console.log(flag)
}

test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)
test(main(data[idx].sentence), data[idx].counter)