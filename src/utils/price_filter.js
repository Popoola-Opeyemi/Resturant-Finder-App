export const filterResultByPrice = (result, price) => {

  return result.filter(arr => {
    return arr.restaurant.price_range === price
  })
}
