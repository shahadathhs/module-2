{
    // Type
    type User1 = {
        name: string;
        email: string;
        age: number;
    }

    const user2: User1 = {
        name: "",
        email: "",
        age: 5,
    }

    // Interface
    interface User2 {
        name: string;
        email: string;
        age: number;
    }

    const user1: User2 = {
        name: "",
        email: "",
        age: 5,
    }

    // In primitive
    type roll = number // Not possible in interface

    type UserWithRole = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }

    // Array
    type Roll = number[];

    const rollNumber: Roll = [1, 2, 3]

    interface Roll2 {
        [index: number]: number
    }

    const roll2: Roll2 = [1, 2, 3]

    // Function
    type Add = (a: number, b: number) => number

    const add: Add = (a, b) => a + b;

    interface Add2 {
        (a: number, b: number) : number
    }
}