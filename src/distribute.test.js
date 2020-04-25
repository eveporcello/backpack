import { total, distribute } from "./distribute";

describe("Can distribute items evenly between bags", () => {
  const items = [
    { name: "Big Agnes Copper Spur Tent HV", weight: 3 },
    { name: "BearVault BV500 Bear Canister", weight: 4 },
    { name: "JetBoil Flash", weight: 1 },
    { name: "Eno DoubleNest Hammock", weight: 1 },
    { name: "Sony Wireless Party Speaker", weight: 15 }
  ];

  test("totals items", () => {
    const weight = total(items);
    expect(weight).toBe(24);
  });

  test("distributes items into correct bags", () => {
    const result = distribute(items);
    expect(result).toEqual([
      [
        { name: "Eno DoubleNest Hammock", weight: 1 },
        { name: "JetBoil Flash", weight: 1 },
        {
          name: "Big Agnes Copper Spur Tent HV",
          weight: 3
        }
      ],
      [
        { name: "Sony Wireless Party Speaker", weight: 15 },
        {
          name: "BearVault BV500 Bear Canister",
          weight: 4
        }
      ]
    ]);
  });
});
