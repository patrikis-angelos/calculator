import Big from 'big.js';
import calculate from '../logic/calculate';

describe('calculate', () => {
  it('constructs the (total)number as you type (1)', () => {
    let data = { total: '', next: '', operation: '' };
    data = calculate(data, '1');
    expect(data.total).toBe('1');
    data = calculate(data, '2');
    expect(data.total).toBe('12');
  });
  it('constructs the (total)number as you type (2)', () => {
    let data = { total: '123', next: '', operation: '' };
    data = calculate(data, '4');
    expect(data.total).toBe('1234');
  });
  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = { total: '123', next: '', operation: '+' };
    data = calculate(data, '5');
    expect(data.next).toBe('5');
    data = calculate(data, '.');
    expect(data.next).toBe('5.');
    data = calculate(data, '7');
    expect(data.next).toBe('5.7');
  });
  it('sets the current operation', () => {
    let data = { total: '12', next: '', operation: '' };
    data = calculate(data, '+');
    expect(data.operation).toBe('+');
  });
  it('calculates the total if the = button is pressed', () => {
    let data = { total: '6', next: '4', operation: '-' };
    data = calculate(data, '=');
    expect(data.total).toStrictEqual(Big(2));
  })
  it('calculates and sets the operation if there are two numbers (1)', () => {
    let data = { total: '12', next: '15', operation: '+' };
    data = calculate(data, '-');
    expect(data.total).toStrictEqual(Big(27));
    expect(data.operation).toBe('-');
  });
  it('calculates and sets the operation if there are two numbers (2)', () => {
    let data = { total: '2', next: '3', operation: '*' };
    data = calculate(data, '+');
    expect(data.total).toStrictEqual(Big(6));
    data = calculate(data, '1');
    data = calculate(data, '2');
    data = calculate(data, '-');
    expect(data.total).toStrictEqual(Big(18));
    data = calculate(data, '8');
    data = calculate(data, '=');
    expect(data.total).toStrictEqual(Big(10));
  });
  it('lets the user do a new calculation after the = button is pressed', () => {
    let data = { total: '2', next: '3', operation: '*' };
    data = calculate(data, '=');
    data = calculate(data, '2');
    data = calculate(data, '1');
    expect(data.total).toBe('21');
    data = calculate(data, '÷');
    data = calculate(data, '7');
    data = calculate(data, '=');
    expect(data.total).toStrictEqual(Big(3));
  });
  it('lets the user do calculations with decimal numbers', () => {
    let data = { total: '', next: '', operation: '' };
    data = calculate(data, '1');
    data = calculate(data, '.');
    data = calculate(data, '2');
    data = calculate(data, '*');
    data = calculate(data, '2');
    data = calculate(data, '.');
    data = calculate(data, '2');
    data = calculate(data, '=');
    expect(data.total).toStrictEqual(Big(2.64));
  });
});
