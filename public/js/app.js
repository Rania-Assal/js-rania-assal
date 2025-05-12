
let user = {
    username: 'rania',
    password: '1234',
    balance: 2500
}

let inputUsername = prompt('Smitk?')
let inputPassword = prompt('Mot de passe dyalk?')


if (inputUsername === user.username && inputPassword === user.password) {
    console.log(' Marhba bik, ' + user.username + '!')
    console.log(' Rssidak howa: ' + user.balance + ' dh')
} else {
    console.log(' Smitk ola lmot de passe ghalta!')
}


let users = []

while (true) {
    let choice = prompt("ACHNO BRITI TKTEB (signup / login / change password)\n fach tbri tkhrej kteb exit")

    if (choice === null || choice.toLowerCase() === "exit") {
        console.log("chokran 3la listikhdam dyalek lbernamaj")
        break
    }

    if (choice === "signup") {
        let username = prompt("dakhel issm lmostakhdim")

        if (username === null || username === "exit") {
            continue
        }

        let found = users.find(user => user.username === username)

        if (found) {
            alert("had smiya mesta3mla déja")
            continue
        }

        let password = prompt("dakhel password")

        if (password === null || password === "exit") {
            continue
        }

        users.push({
            username: username,
            password: password,
            balance: 0
        })

        alert("valider bien")
        console.log("new compte" + username)

    } else if (choice === "login") {
        let username = prompt("dakhel issm lmostakhdim")

        if (username === null || username === "exit") {
            continue
        }

        let password = prompt("dakhel lpassword")

        if (password === null || password === "exit") {
            continue
        }

        let user = users.find(user => user.username === username && user.password === password)

        if (user) {
            alert("welcome" + user.username + "\n rassidok " + user.balance + "dh")
            console.log("tassjil dokhol najih " + user.username)
        } else {
            alert(" issm lmostakhdim aw password ralat")
            console.log("error" + username)
        }

    } else if (choice === "change password") {
        let username = prompt("dakhel issm lmostakhdim")

        if (username === null || username === "exit") {
            continue
        }

        let password = prompt("dakhel password l9dim")

        if (password === null || password === "exit") {
            continue
        }

        let user = users.find(user => user.username === username && user.password === password)

        if (user) {
            alert("name aw lpssword ralat")
            console.log("error in password " + username)
            continue
        }

        let newPassword = prompt("enter password")

        if (newPassword === null || newPassword === "exit") {
            continue
        }

        user.password = newPassword
        alert("change password bi najah")
        console.log("tbedl password" + username)
    } else {
        alert("likhtiyar mchi shih")
    }
}


// # Name (Full):
let name = "Rania Assal"

function validateName(name) {

    name = name.trim()

    let nameWithoutSpaces = name.split(' ').join('')
    if (nameWithoutSpaces.length < 5) {
        console.log("name khasse yekon fih 5 les letres 3ala l2a9al")
        return false
    }

    for (let i = 0; i < name.length; i++) {
        let char = name[i]
        if (char >= '0' && char <= '9') {
            console.log("name makhsch yekono fih 2ar9am")
            return false
        }

        let specialChars = ['@', '#', '$', '%', '&', '*', '(', ')', '!', '?', '+'];
        if (specialChars.includes(char)) {
            console.log("name makhsch yekono fih chi romoz")
            return false
        }
    }

    let words = name.split(' ')
    let formattedName = words.map(word => {

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')

    console.log("name", formattedName)
    return formattedName
}
validateName(name)



