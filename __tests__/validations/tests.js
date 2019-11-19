import { isNotEmpty } from '@utils/formUtils';

describe('is not empty', () => {
  it('empty item', () => {
    expect(isNotEmpty('')).toBe('HOME:EMPTY_FIELD');
  });
  it('null item', () => {
    expect(isNotEmpty(null)).toBe('HOME:EMPTY_FIELD');
  });
  it('undefined item', () => {
    expect(isNotEmpty(undefined)).toBe('HOME:EMPTY_FIELD');
  });
  it('item with value', () => {
    expect(isNotEmpty('something')).toBe(undefined);
  });
});
