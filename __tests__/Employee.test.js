const Employee = require('../lib/Employee.js');

test('creates a employee class', () => {
    const employee = new Employee('Tom', 1, 'toma@anywho.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.log(employee);
  });

  test("gets employee's name value", () => {
    const employee = new Employee('adam', 1, 'toma@anywho.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });

  test("gets employee's ID value", () => {
    const employee = new Employee('adam', 1, 'toma@anywho.com');
  
    expect(employee.getId()).toEqual(expect.any(Number));
  });

  test("gets employee's email value", () => {
    const employee = new Employee('adam', 1, 'toma@anywho.com');
  
    expect(employee.getEmail()).toEqual(expect.any(String));
  });

  test("gets employee's role value", () => {
    const employee = new Employee('adam', 1, 'toma@anywho.com');
  
    expect(employee.getRole()).toEqual(expect.any(String));
  });

