const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayuscula True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("hola")).toBe(false);
})

describe('calculator', () => {
    test.each`
      firstValue | expectedResult    
      ${"amor"}       | ${false}
      ${"MESA"}      | ${true}        
      ${"a"}      | ${false}
    `('comprobar mayuscula', ({firstValue,  expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  })