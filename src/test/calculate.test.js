import calculate from '../logic/calculate';

describe('calculate', () => {
  it('constructs the (total)number as you type', () => {
    let data = {total: '', next: '', operation: ''}
    data = calculate(data, "1");
    expect(data.total).toBe('1');
    data = calculate(data, "2");
    expect(data.total).toBe('12');
  });
  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = {total: '123', next: '', operation: '+'}
    data = calculate(data, "5");
    expect(data.next).toBe('5');
    data = calculate(data, ".");
    expect(data.next).toBe('5.');
    data = calculate(data, "7");
    expect(data.next).toBe('5.7');
  });
});
