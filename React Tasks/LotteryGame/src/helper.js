
// Function to generate n random numbers in the form of array
function generateTicket(n)
{
    let arr=[];
    for(let i=0;i<n;i++)
    {
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}

function sum(arr)
{
    let total=0;
    arr.forEach(element => {
        total+=element;
    });
    return total;
}
export {generateTicket,sum};