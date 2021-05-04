import operate from '../logic/operate';

describe ('operate', () => {
  it('adds two numbers and returns the result (1)', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe(3);
  });
  it('adds two numbers and returns the result (2)', () => {
    const result = operate(12, 25, '+');
    expect(result).toBe(37);
  });
  it('subtracts two numbers and returns the result (1)', () => {
    const result = operate(9, 3, '-');
    expect(result).toBe(6);
  });
  it('subtracts two numbers and returns the result (2)', () => {
    const result = operate(14, 99, '-');
    expect(result).toBe(-85);
  });
  it('multiplies two numbers and returns the result (1)', () => {
    const result = operate(2, 6, '*');
    expect(result).toBe(12);
  });
  it('multiplies two numbers and returns the result (2)', () => {
    const result = operate(12, 4, '*');
    expect(result).toBe(48);
  });
  it('divides two numbers and returns the result (1)', () => {
    const result = operate(12, 4, '÷');
    expect(result).toBe(3);
  });
  it('divides two numbers and returns the result (2)', () => {
    const result = operate(45, 12, '÷');
    expect(result).toBe(3.75);
  });
  it('modifies a number to percentage', () => {
    const result = operate(45, 100, '%');
    expect(result).toBe(0.45);
  });
  it('returns the opposite of a number', () => {
    const result = operate(45, -1, '+/-');
    expect(result).toBe(-45);
  });
});