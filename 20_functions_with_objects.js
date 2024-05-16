function calculateCartPrice(...num1){
    return num1
}
//...num1 is rest operator
console.log(calculateCartPrice(100,400,500))

const user={
    username:"Sumit",
    price:999,
}

function handleobject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`)
}
handleobject(user)

handleobject({username:"sam",price:1999})

