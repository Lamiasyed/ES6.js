const products=[
    {id:1,name:'lenovo',price:65000},
    {id:2,name:'hp',price:53000},
    {id:3,name:'dell',price:83000},
    {id:4,name:'mac',price:183000},
]
// map
const names=products.map(product=>product.name)
// console.log(names)
const prices=products.map(p=>p.price)
console.log(prices)

// foreach
products.forEach(p=>console.log(p.id))

// filter
const expensive=products.filter(p=>p.price>70000)
// console.log(expensive)

// find
const affordable=products.find(p=>p.price<70000)
// console.log(affordable)

// reduce
const total=products.reduce((acum,current)=>acum+current.price,0)
console.log(total)










