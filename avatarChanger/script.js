const btn = document.getElementById('btn');
 
const avatarImg = document.getElementById('');

btn.addEventListener('click', getData);

function getData(){
    const name = document.getElementById('name');
    const dob = document.getElementById('dob');

    fetch('https://random-data-api.com/api/users/random_user').then( (response) => response.json()).then( (data) =>{
       console.log(data);
    name.innerText =data.first_name
       dob.innerText =data.date_of_birth;
       document.getElementById("avatar-img").src=`${data.avatar}`;
      ;
    })
;

}