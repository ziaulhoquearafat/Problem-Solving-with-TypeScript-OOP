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
  } else {
    return value ? "Active" : "Inactive";
  }
}
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

type LatLongDis = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];
function formatCoordinate(coordinate: LatLongDis): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];
getPopularCourses(courses, 80);

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

pluckValues(users, "name");
pluckValues(users, "id");

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();


function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}
validateAgeAsync(20);
validateAgeAsync(15);

