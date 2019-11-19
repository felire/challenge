export const isNotEmpty = value => {
  if (value && value !== '') return undefined;
  return 'HOME:EMPTY_FIELD';
};
