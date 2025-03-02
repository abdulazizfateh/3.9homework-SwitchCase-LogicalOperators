const case1 = function (inputDay) {
    switch (inputDay) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("An inccorect week number was entered");
    }
}
case1(1);



const case2 = function (inputGrade) {
    switch (inputGrade) {
        case 1:
            console.log("Poor");
            break;
        case 2:
            console.log(("Passing, weak"));
            break;
        case 3:
            console.log("Average")
            break;
        case 4:
            console.log("Good");
            break;
        case 5:
            console.log("Excellent");
            break;
        default:
            console.log("Error");
    }
}
case2(5);



const case3 = function (inputMonth) {
    switch (inputMonth) {
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        case 12:
            console.log("Winter");
            break;
        default:
            console.log("An incorrect month number was entered");
    }
}
case3(3);



const case4 = function (inputMonth) {
    switch (inputMonth) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31);
            break;
        case 2:
            console.log("28, (only 29 in every 4 years)");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("30");
            break;
        default:
            console.log("An incorrect month number was entered");
    }
}
case4(3);



const case5 = function (inputA, inputB, inputOperator) {
    switch (inputOperator) {
        case "+":
            console.log(`${inputA} + ${inputB} = ${inputA + inputB}`);
            break;
        case "-":
            console.log(`${inputA} - ${inputB} = ${inputA - inputB}`);
            break;
        case "/":
            console.log(`${inputA} / ${inputB} = ${inputA / inputB}`);
            break;
        case "*":
            console.log(`${inputA} * ${inputB} = ${inputA * inputB}`);
            break;
        default:
            console.log("An incorrect operator number was entered");
    }
}
case4(11, 12, "+");



const case6 = function (inputUnit, inputLength) {
    switch (inputUnit) {
        case 1: // Decimeter
            console.log(`${inputLength}dm = ${inputLength / 10}m`);
            break;
        case 2: // Kilometer
            console.log(`${inputLength}km = ${inputLength * 1000}m`);
            break;
        case 3: // Meter
            console.log(`${inputLength}m = ${inputLength}m`);
            break;
        case 4: // Millimeter
            console.log(`${inputLength}mm = ${inputLength / 1000}m`);
            break;
        case 5: // Centimeter
            console.log(`${inputLength}cm = ${inputLength / 100}m`);
            break;
        default:
            console.log("An inccorect unit number was entered");
    }
}
case6(5, 100);



const case7 = function (inputUnit, inputWeight) {
    switch (inputUnit) {
        case 1: // Kilogramm
            console.log(`${inputWeight}kg = ${inputWeight}kg`);
            break;
        case 2: // Milligramm
            console.log(`${inputWeight}mg = ${inputWeight / 1000000}kg`);
            break;
        case 3: // Gramm
            console.log(`${inputWeight}g = ${inputWeight / 1000}kg`);
            break;
        case 4: // Ton
            console.log(`${inputWeight}t = ${inputWeight * 1000}kg`);
            break;
        case 5: // Centner
            console.log(`${inputWeight}ct = ${inputWeight * 100}kg`);
            break;
        default:
            console.log("An inccorect unit number was entered");
    }
}
case7(4, 1);



const case8 = function (inputDay, inputMonth) {
    const oneDigitToTwoDigit = function (inputDay, inputMonth) {
        if (inputDay > 0 && inputDay < 10) {
            inputDay = "0" + inputDay;
        }
        if (inputMonth > 0 && inputMonth < 10) {
            inputMonth = "0" + inputMonth;
        }
        return [inputDay, inputMonth];
    }
    switch (inputMonth) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if (inputDay <= 31 && inputDay > 0) {
                let checkedTwoDigit = oneDigitToTwoDigit(inputDay, inputMonth);
                console.log(`This is a valid date: ${checkedTwoDigit[0]}.${checkedTwoDigit[1]}.2025`);
            } else {
                console.log("An incorrect day number was entered");
            }
            break;
        case 2:
            if (inputDay <= 28 && inputDay > 0) {
                let checkedTwoDigit = oneDigitToTwoDigit(inputDay, inputMonth);
                console.log(`This is a valid date: ${checkedTwoDigit[0]}.${checkedTwoDigit[1]}.2025`);
            } else {
                console.log("An incorrect day number was entered");
            }
            break;
        case 4: case 6: case 9: case 11:
            if (inputDay <= 30 && inputDay > 0) {
                let checkedTwoDigit = oneDigitToTwoDigit(inputDay, inputMonth);
                console.log(`This is a valid date: ${checkedTwoDigit[0]}.${checkedTwoDigit[1]}.2025`);
            } else {
                console.log("An incorrect day number was entered");
            }
            break;
        default:
            console.log("An incorrect month number was entered");
    }
}
case8(11, 3);



const case9 = function (inputDay, inputMonth) {
    switch (inputMonth) {
        case 1: case 3: case 5: case 7: case 8: case 10:
            if (inputDay < 31 && inputDay > 0) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: ${inputDay + 1}.${inputMonth}.2025`);
            } else if (inputDay === 31) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: 01.${inputMonth + 1}.2025`);
            }
            else {
                console.log("An incorrect day number was entered");
            }
            break;
        case 2:
            if (inputDay < 28 && inputDay > 0) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: ${inputDay + 1}.${inputMonth}.2025`);
            } else if (inputDay === 28) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: 01.${inputMonth + 1}.2025`);
            }
            else {
                console.log("An incorrect day number was entered");
            }
            break;
        case 4: case 6: case 9: case 11:
            if (inputDay < 30 && inputDay > 0) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: ${inputDay + 1}.${inputMonth}.2025`);
            } else if (inputDay === 30) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: 01.${inputMonth + 1}.2025`);
            }
            else {
                console.log("An incorrect day number was entered");
            }
            break;
        case 12:
            if (inputDay < 31 && inputDay > 0) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: ${inputDay + 1}.${inputMonth}.2025`);
            } else if (inputDay === 31) {
                console.log(`This is a valid date: ${inputDay}.${inputMonth}.2025`);
                console.log(`The next day of this valid valid date is: 01.01.2026`);
            }
            else {
                console.log("An incorrect day number was entered");
            }
            break;
        default:
            console.log("An incorrect month number was entered");
    }
}
case9(31, 12);



const case10 = function (inputY, inputK) {
    let cardinalDirection; // North, South, East, West
    let relativeDirection; // Left and Right
    switch (inputY) {
        case `N`:
            cardinalDirection = `towards North`
            break;
        case `S`:
            cardinalDirection = `towards South`
            break;
        case `E`:
            cardinalDirection = `towards East`
            break;
        case `W`:
            cardinalDirection = `towards West`
            break;
    }
    switch (inputK) {
        case 0:
            relativeDirection = `⬆ Straight`;
            break;
        case 1:
            relativeDirection = `<- Turn left`
            break;
        case 2:
            relativeDirection = `-> Turn right`
            break;
        default:
            console.log(`Noto'g'ri komanda raqami kiritildi`);
    }
    console.log(`To get to your destination, please follow the instructions below:`);
    console.log(`${relativeDirection} ${cardinalDirection}`);
}
case10(`N`, 0);