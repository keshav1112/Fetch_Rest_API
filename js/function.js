const fetchBtn = document.getElementById('fetchBtn');
const userData = document.getElementById('userList')
const API_URL = 'https://jsonplaceholder.typicode.com/users';

let userNamety = '';
// fetchBtn.onclick = () => {
    // You can use this function for click the button and fetch the api data
// }

fetch(API_URL)
    .then(data =>{
        return data.json();
        })
        .then(data =>{
            let bindData = '';

            data.forEach(element => {
                // console.log(element);
                const {id, name, email, address:{street, zipcode}} = element;
                bindData += `<tr><td>${id}</td> <td>${name}</td> <td>${email}</td> <td>${street}</td> <td>${zipcode}</td></tr>`; 
            })

            localStorage.setItem('userNamety', JSON.stringify(data));
            userData.innerHTML = localStorage.getItem(userNamety);

            sessionStorage.setItem('userNamety', JSON.stringify(data));
            userData.innerHTML = sessionStorage.getItem(userNamety);
            
            userData.innerHTML = bindData;
    })
    .catch(err => {
        console.log('Something went wrong', err);
    });