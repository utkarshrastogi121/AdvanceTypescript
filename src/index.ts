// interface User{
//     id:string;
//     name: string;
//     age: number;
//     email: string;
//     password: string;
// };

// type UpdateProps = Pick<User, 'name'|'age'|'email'>;

// Pick is used to select specific properties from the interface
// Here we are selecting 'name', 'age' and 'email' from the User interface

// type UpdatePropsOptional = Partial<UpdateProps>;

// Partial is used to make all the properties of  optional
// Here we are making 'name', 'age' and 'email' optional from the UpdateProps interface

// function updateUser(updateUser: UpdateProps){
//     console.log(updateUser);
// }


//readonly is used to make all the properties of the interface readonly
// type User = {
//     name: string;
//     age: number;
// };

// const user:Readonly<User>={
//     name: 'John',
//     age: 25
// }

// user.age=26; // Error: Cannot assign to 'age' because it is a read-only property

// Record is used to create a new type with a specific set of properties
// type Users = Record<string,{name: string, age: number}>;
// const users: Users = {
//     '1':{name: 'John', age: 25},
//     '2':{name: 'Jane', age: 22}
// };

// Map is used to create a new type with a specific set of properties
// type User = {
//     name: string;
//     age: number;
// };
// const users = new Map<string,User>();
// users.set('1', {name: 'John', age: 25});
// users.set('2', {name: 'Jane', age: 22});
// const user1 = users.get('1');
// console.log(user1); // {name: 'John', age: 25}

// Exclude is used to exclude specific properties from the type
// type User = {
//     name: string;
//     age: number;
//     email: string;
// };
// type UserWithoutEmail = Exclude<keyof User, 'email'>;
// const user: UserWithoutEmail = 'name' || 'age';

// Extract is used to extract specific properties from the type
// type User = {
//     name: string;
//     age: number;
//     email: string;
// };
// type UserWithEmail = Extract<keyof User, 'email'>;
// const user: UserWithEmail = 'email';

// diiference between Pick and Extract is that Pick selects specific properties from the type whereas Extract selects properties that are assignable to the given type

