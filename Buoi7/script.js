const bai1 = function bai1(){
    const time = new Date();
    return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}

const bai2 = function bai2(){
    const today = new Date()
    const m = today.getMonth() + 1
    const d = today.getDate()
    const y = today.getFullYear()

    return `   dd/mm/yyyy: ${d}/${m}/${y}
            mm/dd/yyyy: ${m}/${d}/${y}
            dd-mm-yyyy: ${d}-${m}-${y}
            mm-dd-yyyy: ${m}-${d}-${y}`
}

const bai3 = function bai3(number){
    let s = String(number)
    
    for (let i = 1; i < s.length; i++)
        if (s[i] < s[i - 1]) return false;
    return true
}

const bai4 = function bai4(str){
    let res = "";
    for (let ch of str){
        let ascii = ch.charCodeAt(0)
        if (ascii < 91 && ascii > 64)
            res += String.fromCharCode((ascii - 65 + 1)%26 + 65)
        else if (ascii > 96 && ascii < 123)
            res += String.fromCharCode((ascii - 97 + 1)%26 + 97)
        else res += ch;
    }
    return res;
}

const bai5 = function bai5(str = ""){
    if (str.length % 2 == 0)
        return "Chuoi co do dai chan"
    let n = str.length
    return str.charAt(n/2 - 1) + str.charAt(n/2) + str.charAt(n/2 + 1)
}

const bai6 = function bai6(str){
    const obj = {}
    let res = 0;
    for (let value of str){
        if (!obj[value]) obj[value] = 0;
        res = Math.max(++obj[value], res)
    }
    return res;
}

const bai7 = function bai7(str = ""){
    return ((str.search('java')) != -1) ? "Co chua tu java" : "Khong chua tu java";
}

const bai8 = function bai8(number){
    switch (number) {
        case 1:
            return "Thang mot"
        case 2:
            return "Thang hai"
        case 3:
            return "Thang ba"
        case 4:
            return "Thang tu"
        case 5:
            return "Thang nam"
        case 6:
            return "Thang sau"
        case 7:
            return "Thang bay"
        case 8:
            return "Thang tam"
        case 9:
            return "Thang chin"
        case 10:
            return "Thang muoi"
        case 11:
            return "Thang muoi mot"
        case 12:
            return "Thang muoi hai"
        default:
            return "Khong co thang nay"
    }
}

const bai9 = function bai9(str){
    const arr = str.split(" ");
    let max = 0, strMax;

    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > max){
            max = arr[i].length
            strMax = arr[i];
        }
    }

    return strMax;
}

const bai10 = function bai10(left, right){
    const check = function check(number){
        if (number < 2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++)
            if (number % i == 0) return false;
        return true;
    }
    let res = "";
    for (let i = left + 1; i < right; i++){
        if (check(i))
            res += i + ' ';
    }
    return res;
}

console.log("Bai 1 : ",bai1());
console.log("Bai 2 : ",bai2());
console.log("Bai 3 : ",bai3(1230568));
console.log("Bai 4 : ",bai4("abcxyz ABCXYZ 123!"));
console.log("Bai 5 : ",bai5("1235478"))
console.log("Bai 6 : ",bai6([1,4,3,5,6,5,4,4,4,4,7]))
console.log("Bai 7 : ",bai7("Hello Java"))
console.log("Bai 8 : ",bai8(9))
console.log("Bai 9 : ",bai9("Hello World!!!"));
console.log("Bai 10 : ",bai10(1, 100))
