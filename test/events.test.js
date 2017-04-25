import { persist, preventDefault, stopPropagation } from '../lib';

test('should be a function', () => {
  expect(persist).toBeInstanceOf(Function);
  expect(preventDefault).toBeInstanceOf(Function);
  expect(stopPropagation).toBeInstanceOf(Function);
});

test('should return a function', () => {
  expect(persist()).toBeInstanceOf(Function);
  expect(preventDefault()).toBeInstanceOf(Function);
  expect(stopPropagation()).toBeInstanceOf(Function);
});

test('should call the appropriate function', () => {
  const persistMock = jest.fn();
  const event = {
    persist: persistMock
  };

  persist(() => {})(event);

  expect(persistMock).toBeCalledWith();
});

test('should pass all the arguments to the passed function', () => {
  const funcMock = jest.fn();
  const args = [
    { preventDefault: () => {} },
    'hi',
    45
  ];

  preventDefault(funcMock)(...args);

  expect(funcMock).toBeCalledWith(...args);
});
