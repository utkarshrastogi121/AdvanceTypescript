interface User{
    id:string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name'|'age'|'email'>;
// Pick is used to select specific properties from the interface
// Here we are selecting 'name', 'age' and 'email' from the User interface

type UpdatePropsOptional = Partial<UpdateProps>;
// Partial is used to make all the properties of  optional
// Here we are making 'name', 'age' and 'email' optional from the UpdateProps interface

function updateUser(updateUser: UpdateProps){
    console.log(updateUser);
}