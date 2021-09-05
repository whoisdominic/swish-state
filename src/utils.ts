import isPlainObject from 'is-plain-object';
export { isPlainObject };
export const isArray = Array.isArray.bind(Array);
export const isFunction = (o: void): boolean => typeof o === 'function';
export const returnSelf = (m: any) => m;
export const noop = () => {};
export const findIndex = (array, predicate): number => {
  for (let i = 0, { length } = array; i < length; i += 1) {
    if (predicate(array[i], i)) return i;
  }

  return -1;
};
