
// var book = `Eng Sharafli Ummat`;
// console.log(book);
// book = 55;
// console.log(book);
// const java = `inoi`;
// console.log(java);
// let cola = `qora`;
// console.log(cola);
// let mypro = `mishka`;
// console.log(mypro);
// let name = `zifler`;
// console.log(name);
// let free = `asu`;
// console.log(free);
// let book = `Shaytanat`;
// let book_author = `Tohir Malik`;
// document.write(`Mening eng sevgan kitobim ${book} , unimg afteri ${book_author}`);
// alert(book);
// confirm(book_author);
// prompt(`Siz ${book_author} ning qanday kitoblarini bilasiz?`);

// var sum = `Books`;
// var cars = [`Ohing Allohga Omonat`,`Eng Sharafli Ummat`,`Duo Taqdirni O'zgartiradi`,`Iskom Tarixi`, `Chuqur Uyqu`];
// console.log(sum);
// console.log(cars);
// console.log(cars[0]);
// console.log(typeof(sum));
// console.log(typeof(cars));
// alert(cars);
// let book ={
//     bookName:`Ibodati Islomiya`,
//     bookAuthor:`Shayx Muhammad Soqdiq Muhammad Yusuf`,
//     bookJanr:`Islom ta'limoti va Shariat hukmkari`,
// }
// console.log(book);
// console.log(book.bookName);
// console.log(typeof(book));

// alert(book.bookAuthor);
// alert(book.bookName);
// alert(book.bookJanr);

// hello(`Djurayeva`,`Munira`);
// hello(`Abrurafiqov`, `Hasan`);
// function hello(name, surName){
//     alert (`Salom ${name} ${surName} Sizni ko'rganimdan hursandman..!`)
// }

// prompt(`Ismingiz`)
// prompt(`Familyangiz`)


// let book = `Baxtiyor Oila`;
// let book_author = `Shayx Muhammad Sodiq Muhammad Yusuf`;
// document.write (`Mening Eng sevgan Kitobim  ${book} , uning afteri ${book_author}`);
// alert(book);
// confirm(book_author);
// prompt(`Siz ${book_author} ning qanday kitoblarini bilasiz?`);

// let aga = prompt(`Tug'ilgan yilingizn kiriting !`);
// let Name = prompt( `Ismingizni kiritig !`);
// let res = 2023 - aga
// alert(`Siz ${res} yoshdasiz ${Name}`);
// console.log(Date());
let ball = prompt(`To'plagan balingizni kiriting !`);
if(isNaN(ball)){
      alert(`Faqat raqam kitrishingiz mumkin !`);
}
else if(ball === ``){
    alert(`Qiymat kiriting`);
}
else if(ball > 56){
    alert(`Siz Talabalikga Tavsiya Etildingiz`);
}
else{
    alert(`Siz Talabalikga Tavsiya etilmadingiz , Siqilmeng Hali hayot oldinda , Siz omadlisz ,Biz bunga ishonamiz :)`);
}