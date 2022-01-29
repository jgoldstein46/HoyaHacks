class Candidate {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: string;
  id: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    resume: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.resume = resume;
  }
}
