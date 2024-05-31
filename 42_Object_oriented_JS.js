//OOP


//Object :- Collection of Properties and Methods
//eg :- toLowerCase(),Promise()

//Parts of OOP
//1.Object Literal

//-Constructor
//-prototype
//-classes
//-instances (new, this)

// 4 Pillers :=
// Abstraction
// Encapsulation
// inheritance
// Polymorphism

const user={
    username:"hitesh",
    loginCount:8,
    singedIn:true,
    getUserDetails:function(){
        //console.log("Got User details")
        console.log(`username: ${this.username}`)
        //How can interpreter know which context are you telling to work that's why we work .this for tell current Context
        console.log(this)// this keywork give you whole current object context
    }
}
console.log(user.username)
console.log(user.getUserDetails())
console.log(this)//now this keyword will give empty object because global context is empty
//in browser it will give window as object


//Instances 
// const promiseOne = new Promise()
// const date = new date() // new keyword used for create new context

function user2(username,loginCount,isLoggedIn){
    this.username=username //instead of this.username u can give any variable name
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

const userone=user2("Sumit",6,true)
const userTwo=user2("abc",9,false)
const userThree=new user2("xyz",12,true)
console.log(userone)//userone values are overwrite same as userTwo values that why we have to use new instance
console.log(userTwo)
console.log(userThree)

