export function total(items) {
  return items.reduce(
    (total, { weight }) => total + weight,
    0
  );
}

export function distribute(items) {
  return items.reduce(
    ([alex, eve], item) => {
      if (total(alex) > total(eve)) {
        eve = [item, ...eve];
      } else {
        alex = [item, ...alex];
      }
      return [alex, eve];
    },
    [[], []]
  );
}
