import { distribute } from "./distribute";

const items = [
  { name: "Big Agnes Copper Spur Tent HV", weight: 3 },
  { name: "BearVault BV500 Bear Canister", weight: 15 },
  { name: "JetBoil Flash", weight: 1 },
  { name: "Eno DoubleNest Hammock", weight: 1 },
  { name: "Sony Wireless Party Speaker", weight: 15 }
];

const people = ["eve", "alex"];

test("Returns bags for Alex and Eve", () => {
  const result = distribute(items, people);
  expect(result).toMatchObject({
    alex: [
      { name: "BearVault BV500 Bear Canister", weight: 15 },
      { name: "Sony Wireless Party Speaker", weight: 15 }
    ],
    eve: [
      { name: "Big Agnes Copper Spur Tent HV", weight: 3 },
      { name: "JetBoil Flash", weight: 1 },
      { name: "Eno DoubleNest Hammock", weight: 1 }
    ]
  });
});

test("Totals list of item weights", () => {
  const result = distribute(items, people);
  expect(result).toMatchObject({
    alex: [
      { name: "BearVault BV500 Bear Canister", weight: 15 },
      { name: "Sony Wireless Party Speaker", weight: 15 }
    ],
    eve: [
      { name: "Big Agnes Copper Spur Tent HV", weight: 3 },
      { name: "JetBoil Flash", weight: 1 },
      { name: "Eno DoubleNest Hammock", weight: 1 }
    ]
  });
});

test("Distributes items into bags", () => {
  const result = distribute(items, people);
  expect(result).toMatchObject({
    alex: [
      { name: "BearVault BV500 Bear Canister", weight: 15 },
      { name: "Sony Wireless Party Speaker", weight: 15 }
    ],
    eve: [
      { name: "Big Agnes Copper Spur Tent HV", weight: 3 },
      { name: "JetBoil Flash", weight: 1 },
      { name: "Eno DoubleNest Hammock", weight: 1 }
    ]
  });
});
