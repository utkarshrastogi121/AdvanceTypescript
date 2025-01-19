"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Alice', age: 23 }, { name: 'Bob', age: 25 });
console.log(age);
