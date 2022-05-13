// read the contens of the local storage && display it onto the table by modifying 
// the inner html of the table 
let displayData = () => {
    let tbody = document.getElementById("my-table")
    tbody.innerHTML = ""
    let storedUser = JSON.parse(localStorage.getItem("users"))
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

displayData();
