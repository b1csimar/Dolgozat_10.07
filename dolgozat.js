//0. hozz létre egy txt változót és add meg a változó értékét - legalább 20 karakterből álljon
//1. Írasd ki a konzolba az első 5 karaktert
//2. Írasd ki a konzolba a 3. tól a 8-ik karakterig
//3. Írasd ki a konzolba az 5. karaktertől a végéig
//4. Írasd ki a konzolba az 5. karaktertől 6 karakter hosszan
//5. Írasd ki a konzolba a txt-t nagybetűkkel
//6. Írasd ki a konzolba a txt változót, hogy minden második karakter nagybetű legyen
//7. Írasd ki a konzolba a txt-t úgy, hogy minden "e" karakter "E" legyen
//8. Készíts tömböt a txt-ből az "e" betűk szerint elválasztva. Ítasd ki a tömböt.


//0. feladat
let string = "abcdefgrtzuilokjhmnbvpayxb";

// 1. feladat
console.log(string.substring(0,5)); 

// 2. feladat
console.log(string.substring(2,8)); 

// 3. feladat
console.log(string.substring(4)); 

// 4. feladat
console.log(string.substring(4,10));

// 5. feladat
console.log(string.toUpperCase()); 

// 6. feladat
let upper = string.split('').map((char, index) => {
    return index % 2 === 1 ? char.toUpperCase() : char;
}).join('');
console.log(upper);

// 7. feladat
let e_replace = string.replace(/e/g, 'E');
console.log(e_replace);

// 8. feladat
let split = string.split('e');
console.log(split);