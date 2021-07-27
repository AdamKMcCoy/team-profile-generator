const Engineer = require('../lib/Engineer.js');

test('creates a engineer class', () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    console.log(engineer);
});

test("gets engineer's name value", () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("gets engineer's ID value", () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("gets engineer's email value", () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("gets engineer's github value", () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("gets engineer's role value", () => {
    const engineer = new Engineer('Sarah', 3, 'sarahr@anywho.com','sarhmai');
  
    expect(engineer.getRole()).toEqual(expect.any(String));
});