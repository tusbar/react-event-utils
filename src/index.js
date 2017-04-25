[
  'persist',
  'preventDefault',
  'stopPropagation'
].forEach((name) => {
  module.exports[name] = func => (e, ...args) => {
    e[name]();
    return func(e, ...args);
  };
});
