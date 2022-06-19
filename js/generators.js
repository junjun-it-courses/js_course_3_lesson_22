// Функция-генератор возвращает итерируемый объект при своём вызове.
// Функция-генератор записывается с помощью знака * после ключевого слова
// function, а в теле функции должно присутствовать ключевое слово yield.

// function a() {
//     return 1
// }


// function* generator() {
//     yield 10;
//     yield 12;
//     yield 43;
// }
//
//
// const gen = generator(); // "Generator { }"
//
// console.log(gen);
//
// console.log( gen.next() );
// console.log( gen.next() );
// console.log( gen.next() );
//
// console.log( gen.next() ); // undefined



// function* infiniteNumbers() {
//     let a = 0;
//
//     while (true) {
//         yield ++a;
//     }
// }
//
//
// const infNum = infiniteNumbers();
//
// console.log(
//     infNum.next()
// )
//
//
// console.log(
//     infNum.next()
// )
//
// console.log(
//     infNum.next()
// )


const person = {
    firstName: 'vlad',
    lastName: 'vlad',
    middleName: 'vlad',
}


// function* iterateObject(obj) {
//     for(const key in obj) {
//         yield {
//             [key]: obj[key]
//         }
//     }
// }
//
//
// let gen = iterateObject({
//     name: 'Vladimir',
//     age: 20
// });
//
// console.log(gen.next())
// console.log(gen.next())

// function* iterateObject2(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(const key in arr[i]) {
//             yield {
//                 [key]: arr[i][key]
//             }
//         }
//     }
// }

// let gen2 = iterateObject2([{name: 'Vladimir', age: 20}, {name: 'Alex', age: 24}])
//
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
//

// console.log(gen2.next())
// console.log(gen2.next())
