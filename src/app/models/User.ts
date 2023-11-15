export class User {
    name: string;
    email: string;
    password: string;
    gender: string;
    role: string;

    constructor(name: string, email: string, password: string, gender: string, role: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.role = role;
    }
}