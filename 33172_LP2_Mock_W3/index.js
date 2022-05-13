
// fetch a list of 10 users from a dummy API with a GET request
let fetchData = () => {
    console.log("fetch called");
    let httprequest = new XMLHttpRequest()
    httprequest.open("GET", "https://jsonplaceholder.typicode.com/users/")
    httprequest.send()
    httprequest.onload = () => {
        let res = JSON.parse(httprequest.responseText)
        console.log(res)

        if(!res){
            localStorage.setItem("users", JSON.stringify(res))
        }
        displayData()
    }
}

// read the contens of the local storage && display it onto the table by modifying 
// the inner html of the table 
let displayData = () => {
    let tbody = document.getElementById("my-table")
    tbody.innerHTML = ""
    let storedUser = JSON.parse(localStorage.getItem("users"))
    
    // map the users onto the table using the required callback function
    storedUser.map((user , index) => (
        tbody.innerHTML += `
                <tr>
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.age}</td>
                </tr>`
    ))
}
//initial Data
fetchData()


// handle the button press event of the submit bitton
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {

    // gather all the form fields
    const email = document.getElementById("email").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value

    let postObject = {
        email: email, password: password, name: name, username: username, age: age
    }

    console.log(postObject);

    // let res = xhr.response
    // console.log(res)

    // get the users array from the localStorage
    let storedUser = JSON.parse(localStorage.getItem("users"))

    // append the new entry to the front of the array
    storedUser.unshift(postObject)
    localStorage.setItem("users", JSON.stringify(storedUser));

    displayData();

    // redirect to the next.html page
    window.location.replace("file:///home/ml-06/33172_LP2_Mock_W3/next.html")
        
    
})