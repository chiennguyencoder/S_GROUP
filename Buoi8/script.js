function bai1(){
    const user = {}
    user.name = "Daivd"
    user.surname = "Xuan"
    user.name = "Cafedev"
    delete user.name
}

function bai2(){
    const isEmpty = (obj) => {
        let cnt = 0;
        for (let key in obj)
            cnt ++;
        return (cnt > 0) ? false : true;
    }

    let schedule = {}
    alert(isEmpty(schedule))
    schedule["8:30"] = "get up"
    alert(isEmpty(schedule))
}

function bai3(){

    const sumofSalaries = (obj) => {
        let result = 0;
        for (let key in obj)
            result += obj[key];
        return result;
    }

    let salaries = {
        John : 100,
        Ann : 160,
        Pete : 130
    }

    console.log(sumofSalaries(salaries))
}


function bai4(){
    let multiplyNumeric = (obj) => {
        for (let key in obj)
            if (typeof obj[key] == 'number')
                    obj[key] *=2
    }

    let menu = {
        width : 200,
        height : 300,
        // margin : 40,
        title : "My menu cafedev"
    }
    multiplyNumeric(menu)
    console.log(menu)
}

function bai5(){
    const calc = {
        number1 : 0,
        number2 : 0,
        read(a,b){
            this.number1 = a
            this.number2 = b
        },

        sum(){
            return this.number1 + this.number2
        },
        mul(){
            return this.number1*this.number2
        }
    }
    calc.read(12,24);
    console.log("Tổng : ", calc.sum())
    console.log("Tích : ",calc.mul())
}
