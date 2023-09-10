
fetch("https://jsonplaceholder.typicode.com/users?fbclid=IwAR2m82_dIwTzfzXyGip5P7arnms5jUbifhclezKWv5cgtHXpOBHcOwVb8AY").then(alldata => {
    let data = alldata.json(); //data filtered
    const vv = document.getElementById('table');
    let values = Object.values(data);
    let keys = Object.keys(data);
    let th = document.querySelector('th');
    let td = document.querySelector('td');
    let create = document.createElement("td")
    
    const table = document.getElementById('table').innerHTML = object.values(data);

    data.forEach(user => {
        if (keys == th.className) {

     let output= table.document.innerHTML.create.push(values);
            return (output);
            //return ({`${data.name}`},${ data.username },${ data.email },${ data.address },${ data.street });
            
        } else {
            let empty = table.document.innerHTML = [""];
            return (empty);
        }
        return(user)
    }
    );
    
});







   // then(data => {
       // const table = document.getElementById('table')
 /*    data.forEach () {
            const tr = document.createElement('tr');
            const content = `<td>${user._id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
             <td>${user.email}</td>
            <td>${user.street}</td>
            <td>${user.address}</td>
            <td>${user.email}</td>`;
          tr.innerHTML = content;
            tableBody.appendChild(tr)
           }});
});
*/
//let fun1 = () => {
//    console.log(('hello fron node'));
//}



//const mydata = requires("./js/data")
//console.log(calc)
//const fs = require("fs")
//fs.writeFileSync("a.text","hello")
