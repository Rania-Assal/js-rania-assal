
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



//  # Email:

let emails = []

function validateEmail(email) {
    email = email.trim()

    if (email.length < 10) {
        console.log("email khass yekon fih 10 les letres 3la l2a9al")
        return false
    }
    let atCount = 0
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            atCount++
        }
    }
    if (atCount !== 1) {
        console.log("gmail khass tkon fih @ wahda sfi")
        return false
    }

    if (email.includes(' ')) {
        console.log("email makhsech yekon fih espace lwest")
        return false
    }

    email = email.toLowerCase()

    if (emails.includes(email)) {
        console.log("had lemail déja dakhel")
        return false
    }
    emails.push(email)

    console.log("email is correcte", email)
    return email
}


validateEmail("  Rania.Assal@example.com  ")
validateEmail("rania.assal@example.com")
validateEmail("rania.assal@ex ample.com")
validateEmail("rania1234")
validateEmail("rania.assal@example@example.com")
validateEmail("rania.assal@example.com")


//  # Age:
let ages = []

function validateAge(age) {
    age = age.trim()


    if (age.length === 0 || age.length > 2) {
        console.log("lage khass yekono fih joj 2ara9am mn 1 hta l 99")
        return false
    }

    let numericAge = parseInt(age)
    if (numericAge < 1 || numericAge > 99) {
        console.log("lage khass yekon mabin 1 ou 99")
        return false
    }

    if (ages.includes(numericAge)) {
        console.log("deja dakhel lage")
        return false
    }


    ages.push(numericAge)

    console.log("lage nice", numericAge)
    return numericAge
}

validateAge(" 25 ")
validateAge(" 0 ")
validateAge("100")
validateAge("abc")
validateAge(" 9 ")
validateAge(" 55 ")
validateAge(" 9 9 ")
validateAge("25")

