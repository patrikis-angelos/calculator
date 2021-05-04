import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers and returns the result (1)', () => {
    const result = operate(1, 2, '+');
    expect(result == '3').toBe(true);
  });
  it('adds two numbers and returns the result (2)', () => {
    const result = operate(12, 25, '+');
    expect(result == '37').toBe(true);
  });
  it('subtracts two numbers and returns the result (1)', () => {
    const result = operate(9, 3, '-');
    expect(result == '6').toBe(true);
  });
  it('subtracts two numbers and returns the result (2)', () => {
    const result = operate(14, 99, '-');
    expect(result == '-85').toBe(true);
  });
  it('multiplies two numbers and returns the result (1)', () => {
    const result = operate(2, 6, '*');
    expect(result == '12').toBe(true);
  });
  it('multiplies two numbers and returns the result (2)', () => {
    const result = operate(12, 4, '*');
    expect(result == '48').toBe(true);
  });
  it('divides two numbers and returns the result (1)', () => {
    const result = operate(12, 4, '÷');
    expect(result == '3').toBe(true);
  });
  it('divides two numbers and returns the result (2)', () => {
    const result = operate(45, 12, '÷');
    expect(result == '3.75').toBe(true);
  });
  it('modifies a number to percentage', () => {
    const result = operate(45, 100, '%');
    expect(result == '0.45').toBe(true);
  });
  it('returns the opposite of a number', () => {
    const result = operate(45, -1, '+/-');
    expect(result == '-45').toBe(true);
  });
});
