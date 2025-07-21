const expect = (val) => ({
  toBe: (a) => val === a ? true : "Not Equal",
  notToBe: (a) => val !== a ? true : "Equal"
});

console.log(expect(6).toBe(4))
