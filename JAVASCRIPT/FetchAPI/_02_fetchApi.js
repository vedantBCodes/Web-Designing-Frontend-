// fetch data using .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=>response.json()
)
.then(data=>{
    console.log("Fetched data : " , data);
})
.catch((error)=>{
    console.log('Error fetching data', error);
})
