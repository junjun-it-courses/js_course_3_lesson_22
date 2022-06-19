// Итератор обращается к элементам коллекции по одному,
// в то же время сохраняя память о своей текущей позиции в этой коллекции.
// У итератора есть метод next(), который возвращает следующий элемент
// в последовательности. Этот метод возвращает объект с двумя свойствами: done
// (окончен ли перебор) и value (значение).


let arr = [11, 12, 13];
// console.log(arr)

// for(let i = 0; i < arr.length; i++) {
//     console.log(
//         arr[i]
//     )
// }



// let itr = arr[Symbol.iterator]();
//
// console.log(itr)
//
// console.log( itr.next() ); // { value: 11, done: false }
//
// // some code ...
//
// console.log( itr.next() ); // { value: 12, done: false }
//
// // some code ...
//
// console.log( itr.next() ); // { value: 13, done: false }
//
// // some code ...
//
//
// console.log( itr.next() ); // { value: undefined, done: true }


// Работа с DOM

// let liElements = document.querySelectorAll('li');
// let liItr = liElements[Symbol.iterator]();

// console.log(liElements)
// console.log(liItr)

// console.log(liItr.next());
// console.log(liItr.next());
// console.log(liItr.next());
// console.log(liItr.next());
// console.log(liItr.next());

// не работает для обчных объектов объявленных через литерал

// let obj = {
//     name: 'Alex',
//     age: 10,
//     hasDog: true
// }
//
// let objItr = obj[Symbol.iterator]();

// try {
//     let objItr = obj[Symbol.iterator]();
// } catch (e) {
//     console.dir(e)
// }

// console.log(objItr.next());
// console.log(objItr.next());
// console.log(objItr.next());
// console.log(objItr.next());


// Если нужна такая штука то можно дописать ее самом для объектов


let obj = {
    name: 'Alex',
    age: 100
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// for(const key in obj) {
//     console.log( obj[key]  )
// }

// let itr = Object.entries(obj)[Symbol.iterator]();
//
// console.log(itr);
// console.log(itr.next());
// console.log(itr.next());

//
// const objItr = Object.keys(obj)[Symbol.iterator]();
// console.log(objItr.next())



// console.log(Object.keys(obj))
// console.log(Object.values(obj))
//
//
// for (const key in obj) {
//
// }

