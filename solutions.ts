function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier === undefined ? 2 : multiplier);
}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

type AcceptedValue = string | number | boolean;

function processInput(value: AcceptedValue): string | number {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  else {
    return value ? "Active" : "Inactive";
  }
}

processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

