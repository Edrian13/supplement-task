import { classNames } from './classNames';

describe('classNames - tests', () => {
  test('positive arguments', () => {
    expect(
      classNames('className', { mod: true, secondMod: 'value' }, [
        'value1',
        'value2',
      ])
    ).toBe('className mod secondMod value1 value2');
  });

  test('negative arguments', () => {
    expect(classNames('className', { mod: false })).toBe('className');
  });
});
