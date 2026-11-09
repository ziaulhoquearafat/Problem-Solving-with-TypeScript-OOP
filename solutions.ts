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


type LatLongDis = readonly [latitude: number, longitude: number, locationName: string] 
function formatCoordinate(coordinate: LatLongDis): string{
    const [latitude, longitude, locationName] = coordinate
    return `Location: ${locationName} (${latitude}, ${longitude})`
}
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);


function concatenateArrays<T>(...arrays: T[][]):T[]{
    return arrays.flat()
}
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);



