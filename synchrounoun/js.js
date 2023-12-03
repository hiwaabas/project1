// function one(){
//     console.log('hello one')
// }
// function two(){
//     console.log('hello two')
// }
// two()
// one()
// callback function 
// function one(two_f){
//     two_f()
//     console.log('hello one')

// }
// function two(){
//     console.log('hello two')
// }

// one(two)


// let stocks ={
//     fruits:['strawberry','grapes','banana','apple'],
//     liquid:['water','ice'],
//     holder:['cone','cup','sticks'],
//     topping:['chocolate','peanuts'],
// }
// let order =(fruit_name,w_f)=>{
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//         setTimeout(()=>{
//             console.log('the fruits has shoped inner')
//         },4000)
//     w_f()

//     },4000)
//     // w_f()

//     console.log('order');
// }
// let production = ()=>{
//     setTimeout(()=>{
//         console.log('production')
//     },2000)
// }
// order(1,production)
let is_shop_open=true;

let order = (work,time)=>{
    return new Promise(()=>{})
}