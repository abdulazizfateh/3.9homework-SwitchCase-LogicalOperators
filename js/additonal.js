const task1 = function (isPaid, isActive, isAdmin) {
    if ((isPaid && isActive) || isAdmin) {
        return `Welcome Premium`;
    } else {
        return `You are not an active subscriber`;
    }
}
console.log(task1(true, false, false));



const task2 = function (score, attendance, hasExemption) {
    if ((score >= 75 && attendance >= 80) || hasExemption) {
        return "Student passes";
    } else {
        return "Student fails";
    }
}
console.log(task2(70, 70, true));



const task3 = function (hasWeapon, hasMagic, mana) {
    if (hasWeapon || (hasMagic && mana)) {
        return `A game character can attack`;
    } else {
        return `A game character cannnot attack`
    }
}
console.log(task3(true, false, 30));



const task4 = function (spending, isMember, hasCoupon) {
    if ((spending > 100 && isMember) || hasCoupon) {
        return `Discount applies`;
    } else {
        return `Discout does not applie`;
    }
}
console.log(task4(120, true, false));



const task5 = function (isLoggedIn, hasPermission, isOwner) {
    if ((isLoggedIn && hasPermission) || isOwner) {
        return `You can download the file`;
    } else {
        return `You cannot download the file`;
    }
}
console.log(task5(false, false, true));



const task6 = function (age, hasLicense, hasGuardian) {
    if ((age > 25 && hasLicense) || hasGuardian) {
        return `You can rent a car`;
    } else {
        return `You cannot rent a car`;
    }
}
console.log(task6(22, true, false));



const task7 = function (isPublic, isFriend, isNotBlocked) {
    if (isPublic || (isFriend && isNotBlocked)) {
        return `A post is visible`;
    } else {
        return `A post is not visible`;
    }
}
console.log(task7(false, true, false));
//TASK8, TASK9 ARE THE SAME, SO SKIPPED



const task10 = function (temperature, pressure) {
    if ((temperature > 100 && pressure > 50) || (temperature > 200 || pressure > 200)) {
        return `System alert triggers`;
    } else {
        return `System alert does not trigger`;
    }
}
console.log(task10(201, 0));