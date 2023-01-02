export const Marks = [
  { id: 1, name: "European" },
  { id: 2, name: "Americano" },
  { id: 3, name: "Asian" },
];

const yearMax = new Date().getFullYear();
export const Years = Array.from(
  new Array(20),
  (valor, index) => yearMax - index
);

export const Plans = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Complete" },
];
