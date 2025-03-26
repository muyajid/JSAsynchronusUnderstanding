const keyValue = {name: "yazid", age: 15}
console.log(keyValue.name);
const encode = {
    data: [
        {name: "yazid", age: 15},
        {name: "Zakky", age: 20},
        {name: "raden", age: 30}
    ]
}

const data = encode.data;
data.forEach(element => {
    console.log(element.name + element.age );
});