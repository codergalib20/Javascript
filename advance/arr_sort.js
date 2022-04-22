// var arr = [1, 2, 54, 23, 54, 68, 2, 5, 667];
// arr.sort();
// console.log(arr)

// var arr = [12, 4, 5, 56, 57, 678, 7, 8989, 44, 565];
// arr.sort(function (a, b) {
//     return a-b
// });
// console.log(arr);

// var arr = [12, 4, 5, 56, 57, 678, 7, 8989, 44, 565];
// arr.sort(function (a, b) {
//     return b - 1
// });
// console.log(arr);


// var student = [
//     {
//         name: "Hello 1",
//         age: 16,
//     },
//     {
//         name: "Hello 2",
//         age: 17,
//     },
//     {
//         name: "Hello 4",
//         age: 19,
//     },


//     {
//         name: "Hello 5",
//         age: 20,
//     },
//     {
//         name: "Hello 3",
//         age: 18,
//     },
// ]

// student.sort(function (a, b) {
//     return a.age - b.age
// });
// console.log(student);


// var student = [
//     {
//         name: "Hello 1",
//         age: 16,
//     },
//     {
//         name: "Hello 2",
//         age: 17,
//     },
//     {
//         name: "Hello 4",
//         age: 19,
//     },


//     {
//         name: "Hello 5",
//         age: 20,
//     },
//     {
//         name: "Hello 3",
//         age: 18,
//     },
// ]

// student.sort(function (a, b) {
//     return b.age - a.age
// });
// console.log(student);

var student = [
    {
        name: "asdsa 1",
        age: 16,
    },
    {
        name: "tgdfg 2",
        age: 17,
    },
    {
        name: "dfdfd 4",
        age: 19,
    },


    {
        name: "dfd 5",
        age: 20,
    },
    {
        name: "hgfds 3",
        age: 18,
    },
]

student.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    } else {
        return 0
    }
});
console.log(student);