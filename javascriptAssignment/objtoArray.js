
const ObjeArr = (obj) => {
    let i = 0;
    let Array = [];
    for(let i in obj) {
        Array.push([i, obj[i]]);
    }
    console.log(Array);
}

let obj = {
    "a1": "1",
    "a2": "2",
    "a3": "3",
    "a4": "4"
}
 ObjeArr(obj)