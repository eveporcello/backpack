export function total(items) {
  return items.reduce(
    (total, { weight }) => total + weight,
    0
  );
}

export function distribute(items) {
  return items.reduce(
    ([first, second], item) => {
      if (total(first) > total(second)) {
        second = [item, ...second];
      } else {
        first = [item, ...first];
      }
      return [first, second];
    },
    [[], []]
  );
}
