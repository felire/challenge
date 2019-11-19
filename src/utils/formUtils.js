export const isNotEmpty = value => {
  if (value !== '') return undefined;
  return 'HOME:EMPTY_FIELD';
};
