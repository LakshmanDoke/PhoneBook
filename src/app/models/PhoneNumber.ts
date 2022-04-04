export class PhoneNumber {
    name: String | undefined;
    email: String | undefined;
    phoneNumber: number | undefined;
    constructor(name: String, email: String, phoneNumber: number) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}