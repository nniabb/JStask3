// TASK 1 

let array = [
    {
        name : "test",
        year : 2000,
    },
    {
        name : "test2",
        year : 2001,
    },
    {
        name : "test3",
        year : 2002,
    },
    {
        name: "test4",
        year: 2003,
    },
    {
        name: "test5",
        year : 2004,
    },
    {
        name: "test6",
        year : 2005,
    }
]

let newarray = array.map(item => item.year).sort(function(a, b) {
    return b -a
})
console.log(newarray)


// TASK 2

let users = ["nia", "daduka", "ciyvi", "datosnika", "datoskaxa", "tavadDATO"]

const container = document.getElementById('container')

container.innerHTML = users.map(el => el)

console.log(users)


// TASK 3 

// let arr = [
// {
//     laptop : laptop1,
//     price : 1500,
// },
// {
//     laptop : laptop2,
//     price : 1800,
// },
// {
//     laptop : laptop3,
//     price : 1700,
// },
// {
//     laptop : laptop4,
//     price : 2000,
// }
// ]
   

// ეს ვერ გავიგეეეე </3




