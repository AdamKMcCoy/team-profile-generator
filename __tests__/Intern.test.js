const Intern = require('../lib/Intern.js');

test('creates a intern class', () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    console.log(intern);
});

test("gets intern's name value", () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern's ID value", () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email value", () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("gets intern's school value", () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role value", () => {
    const intern = new Intern('Todd', 3, 'toddp@anywho.com','USC');
  
    expect(intern.getRole()).toEqual(expect.any(String));
});