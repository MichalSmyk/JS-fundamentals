//exercie

let numbers = ["1763687364", "4763687363", "7867867862", "AAAA#####AAAA#87@768767382672", "4763687363", "4763687363"];

    const phoneNumbers = (number) => {
        if (number.length <= 10) {
            return true;
        } else {
            return false;
        };
    };

    const validNumbers = numbers.filter(phoneNumbers);
    console.log(validNumbers);

 
 const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];


 const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];



const generateMessage = namesAndDiscounts => {
    return namesAndDiscounts.map(({name, discount}) => {
        return `Hi ${name}! ${discount}% off our best candies for you today!`
    })
}

 

console.log(generateMessage(namesAndDiscounts));



 