const fs = require("fs");
/*** 
 * using promise class to convert cb based code into promise based 
 * */

function promisifyFS(filePath) {
    function executoFn(resolve, reject) {
        fs.readFile(filePath, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }

        })
        // console.log("Before in promisefn");
        // resolve("Hello");
        // console.log("AFter in promisefn ");
        // console.log("````````````````````");
    }
    return new Promise(executoFn);

}

/*** consuming the promise***/
const promise = promisifyFS("./f11.txt");

console.log("Before in main");
/*********************************************then handler function****/
// //microtask Queue
// promise.then(function (data) {
//     console.log("`````````````````````we are async`````````````````");
//     console.log("first then")
//     console.log("data" + data);
// });

// console.log("b/w")
// promise.then(function (data) {
//     console.log("`````````````````````we are async`````````````````");
//     console.log("second then")
//     console.log("data" + data);
// });

/********************************catch behaviour******************************************/ 
promise.catch(function (err) {
    console.log("`````````````````````we are async`````````````````");
    console.log("first catch")
    console.log("errr" + err);
});

// console.log("b/w")
promise.catch(function (err) {
    console.log("`````````````````````we are async`````````````````");
    console.log("second catch")
    console.log("err" + err);
});

console.log("After in main")

