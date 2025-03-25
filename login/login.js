function onLogin() {
    const loginForm = document.getElementById("loginForm");
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    const emailFormGroup = document.getElementById("emailFG");
    const passwordFormGroup = document.getElementById("passwordFG");
    const emailErrorMsg = document.getElementById("emailError");

    // if (true) {
    //     window.location.href = "/homescreen/homescreen.html";
    // }

    if (!email || !password) {
        emailErrorMsg.innerText = "Email is mandatory";
        if (!email) {
            emailFormGroup.classList.add("error");
        }
        else {
            emailFormGroup.classList.remove("error");
        }

        if (!password) {
            passwordFormGroup.classList.add("error");
        }
        else {
            passwordFormGroup.classList.remove("error");
        }
    }
    else if (!checkValidEmail(email)) {
        emailErrorMsg.innerText = "Entered Email is not valid";
        passwordFormGroup.classList.remove("error");
        emailFormGroup.classList.add("error");
    }
    else {
        emailFormGroup.classList.remove("error");
        passwordFormGroup.classList.remove("error");
        logIn(email, password);
    }

}

function checkValidEmail(email) {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let isValid = regEx.test(email);
    return isValid;
}

function throwError(message) {
    alert(message);
}

function logIn(email, password) {
    checkIfValidUser(email, password);
}

function checkIfValidUser(email, password) {
    const userList = JSON.parse(localStorage.getItem("user-list") || "[]");
    const user = userList.find((item) => item.email == email && item.password == password);
    currentUserId = user.userId
    if (user) {
        localStorage.setItem('current-user-id', currentUserId);

        localStorage.setItem("user-info", JSON.stringify({
            currentUserId : {
                email: email,
                userId: currentUserId,
                favorites: []
            }
        }));
        window.location.href = "/homescreen/homescreen.html";

    } else {
        throwError("invalid email or password");
    }
}

function fun1(item) {
    if (item.email == email && item.password == password) {
        return true;
    }

    return false;
}