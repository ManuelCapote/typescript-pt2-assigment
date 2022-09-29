import Warehouse from './models/Warehouse'

// List of Warehouses
// Detroit
let detroitWarehouse: Warehouse[] = [
  {
    name: 'iPhone SE',
    price: 399,
    fiveG: false,
  },
  {
    name: 'iPhone XR',
    price: 499,
    fiveG: false,
  },
  {
    name: 'iPhone 11',
    price: 599,
    fiveG: false,
  },
  {
    name: 'iPhone 12 Mini',
    price: 729,
    fiveG: true,
  },
  {
    name: 'iPhone 12',
    price: 829,
    fiveG: true,
  },
  {
    name: 'iPhone 12 Pro',
    price: 999,
    fiveG: true,
  },
  {
    name: 'iPhone 12 Max',
    price: 1099,
    fiveG: true,
  },
  {
    name: 'Pixel 4a',
    price: 349,
    fiveG: false,
  },
  {
    name: 'Pixel 5',
    price: 699,
    fiveG: true,
  },
]

// New York
let newYorkWarehouse: Warehouse[] = [
  {
    name: 'iPhone SE',
    price: 399,
    fiveG: false,
  },
  {
    name: 'Pixel 5',
    price: 699,
    fiveG: true,
  },
  {
    name: 'Pixel 4a 5G',
    price: 499,
    fiveG: true,
  },
  {
    name: 'Pixel 4a 5G',
    price: 499,
    fiveG: true,
  },
  {
    name: 'Pixel 4a 5G',
    price: 499,
    fiveG: true,
  },
  {
    name: 'Pixel 4a',
    price: 349,
    fiveG: false,
  },
  {
    name: 'Pixel 4a',
    price: 349,
    fiveG: false,
  },
  {
    name: 'Galaxy S10',
    price: 750,
    fiveG: false,
  },
  {
    name: 'Galaxy S10+',
    price: 1500,
    fiveG: true,
  },
]

// Chicago
let chicagoWarehouse: Warehouse[] = [
  {
    name: 'Galaxy S10',
    price: 750,
    fiveG: false,
  },
  {
    name: 'Galaxy S10+',
    price: 1500,
    fiveG: true,
  },
  {
    name: 'Galaxy S10+',
    price: 1500,
    fiveG: true,
  },
  {
    name: 'Galaxy S10+',
    price: 1500,
    fiveG: true,
  },
  {
    name: 'iPhone 12',
    price: 829,
    fiveG: true,
  },
  {
    name: 'iPhone 12 Pro',
    price: 999,
    fiveG: true,
  },
  {
    name: 'iPhone 12 Max',
    price: 1099,
    fiveG: true,
  },
  {
    name: 'Pixel 4a',
    price: 349,
    fiveG: false,
  },
  {
    name: 'Pixel 5',
    price: 699,
    fiveG: true,
  },
]

// Functions:==================================================
//addPhone
//Add a cell phone to the provided array
const addPhone = (
  array: Warehouse[],
  name: string,
  price: number,
  fiveG: boolean
) => {
  const newCell: Warehouse = { name: name, price: price, fiveG: fiveG }
  array.push(newCell)
  console.log(array)
}

addPhone(newYorkWarehouse, 'iPhone 13 Plus', 1090, true)

//deletePhoneByIndex
//Delete a cell phone from the provided array at the provided index
const deletePhoneByIndex = (array: Warehouse[], index: number) => {
  array.splice(index, 1)
  return array
}

console.log(deletePhoneByIndex(newYorkWarehouse, 2))

//deletePhoneByName
//Delete the first cell phone from the provided array that has the provided name
const deletePhoneByName = (array: Warehouse[], name: string) => {
  const newArray = array.filter((cell) => cell.name != name)
  return newArray
}

console.log(deletePhoneByName(newYorkWarehouse, 'iPhone SE'))

//filter5G
//Using the provided array, return a new array where all the phones are either 5G or not, based on the provided boolean value
const filter5G = (array: Warehouse[], fiveG: boolean) => {
  const newArray = array.filter((cell) => cell.fiveG === fiveG)
  return newArray
}

console.log(filter5G(newYorkWarehouse, true))

//filterPriceLessThan
//Using the provided array, return a new array where all the phones are less in price than the provided price

const filterPriceLessThan = (array: Warehouse[], priceLessThan: number) => {
  const newArray = array.filter((cell) => cell.price < priceLessThan)
  return newArray
}

console.log(filterPriceLessThan(newYorkWarehouse, 500))

//filterPriceGreaterThan
//Using the provided array, return a new array where all the phones are greater in price than the provided price
const filterPriceGreaterThan = (
  array: Warehouse[],
  priceGreaterThan: number
) => {
  const newArray = array.filter((cell) => cell.price > priceGreaterThan)
  return newArray
}

console.log(filterPriceLessThan(newYorkWarehouse, 500))

//findPhoneByName
//Return the first phone in the provided array that matches the provided name

const findPhoneByName = (array: Warehouse[], name: string) => {
  const newArray = array.find((cell) => cell.name === name)
  return newArray
}

console.log(findPhoneByName(newYorkWarehouse, 'iPhone SE'))

//calcAverageCost
//Return the average cost of all the phones in the provided array

const calcAverageCost = (array: Warehouse[]) => {
  const averageCost = array.reduce((pv, cv) => pv + cv.price, 0) / array.length
  return averageCost
}

console.log(calcAverageCost(newYorkWarehouse))

//doWeHaveA5GPhone
//Return true if the provided array has a 5G phone and false otherwise
const doWeHaveA5GPhone = (array: Warehouse[]) => {
  const isFiveG = array.find((cell) => cell.fiveG === true)
  if (isFiveG?.fiveG) {
    return true
  } else false
}

console.log(doWeHaveA5GPhone(newYorkWarehouse))

//phoneFlashSale
//Return a new array including all phone information with the addition of a discounted price, calculated by the given percentage.
const phoneFlashSale = (array: Warehouse[], percentage: number) => {
  array.map(
    (cell) =>
      (cell.discountedPrice = cell.price - cell.price * (percentage / 100))
  )
  return array
}

//Testing results:
// console.log('phoneFlashSale:', phoneFlashSale(newYorkWarehouse, 15))

//phoneFlashSaleV2
//Return a new array including all phone information where only specified names have an additional discounted property based on a provided percentage.
const phoneFlashSaleV2 = (
  array: Warehouse[],
  percentage: number,
  names: string[]
): Warehouse[] => {
  const cellNames = names
  const discountedArray = array.map((cell) => {
    cellNames.map((item) => {
      if (cell.name === item) {
        cell.discountedPrice = cell.price - cell.price * (percentage / 100)
      }
    })

    return cell
  })

  return discountedArray
}

//Testing results:
// console.log(
//   'phoneFlashSaleV2',
//   phoneFlashSaleV2(newYorkWarehouse, 15, ['Pixel 4a 5G', 'iPhone SE'])
// )
