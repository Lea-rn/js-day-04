// 5 falsy values : 0 , "" , undefined , null , NaN (not a number)  ===> (les valeurs faux)

// el be9i el kol truthy values ... 

// let x ;
// console.log(x)

// const age1 = 10 ; 
// const age2 = 5 ;
// let y ; 
// console.log(y)  ===> undefined
// const result = Number(x)
// console.log(result)


// if (x){
//     console.log("Condition is true");
// }

// if (age1 > age2) {
//     console.log("Condition is true");
// }


// let x = false ; 
// let y = false ; 
// let z = !true ; 


// and : ===> && 
// or : ===> || 
//// not : ===> !

// let a = !x ;   //// true || false || false

// console.log(a)


// if (a || y || z) {
//     console.log("Condition is true");
// }


///// basic boolean logic operators : And (&&) , OR (||) , Not (!) 



const hasDrivingLicense = true ; 
const hasGoodVision = false ; 
const isNotTired = false ; 


if (hasDrivingLicense && hasGoodVision && isNotTired){
    console.log("sarah able to drive 🎉")
}

else if (hasDrivingLicense || hasGoodVision) {
    console.log("sarah can drive with some conditions 🚗")
}

else {
    console.log("sarah can't drive 😔")
}
