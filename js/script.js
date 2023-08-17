function findUser(){
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        document.getElementById('name').innerHTML =
        `
        Hello my name is ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}
        I live in ${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}
        `
    })
}

setInterval(() => findUser(), 3000 );