const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email,school) {
    
    super(name,id,email);
    this.school = school;
    }

    getSchool () {
        if (this.school) {
           return `${this.school}`;
        }
        return `Please enter a school`;
    };

    getRole() {
        return `Intern`;
    };
}
module.exports = Intern;