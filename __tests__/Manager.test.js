const Manager = require('../lib/Manager.js');

test('creates a manager class', () => {
    const manager = new Manager('Linda', 2, 'lindat@anywho.com',9999999999);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

    console.log(manager);
});

test("gets manager's name value", () => {
    const manager = new Manager('Linda', 2, 'lindat@anywho.com',9999999999);
  
    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's ID value", () => {
    const manager = new Manager('Linda', 2, 'lindat@anywho.com',9999999999);
  
    expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email value", () => {
    const manager = new Manager('Linda', 2, 'lindat@anywho.com',9999999999);
  
    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("gets manager's role value", () => {
    const manager = new Manager('Linda', 2, 'lindat@anywho.com',9999999999);
  
    expect(manager.getRole()).toEqual(expect.any(String));
});