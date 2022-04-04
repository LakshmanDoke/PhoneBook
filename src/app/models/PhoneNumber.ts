export class PhoneNumber {
  id: number | undefined;
  name: string | undefined;
  email: string | undefined;
  phoneNumber: number | undefined;
  constructor(name: string, email: string, phoneNumber: number) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
