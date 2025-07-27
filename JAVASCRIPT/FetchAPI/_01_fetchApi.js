// Fetching data using API (using async await)

async function fetchData() {

    try
    {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if( ! response.ok)
    {
       throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(data);
    }
    catch(error)
    {
        console.error('Error fetching data:', error);
    }
    
}
fetchData();
