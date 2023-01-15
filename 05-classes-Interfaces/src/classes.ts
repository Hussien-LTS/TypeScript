abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(protected id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no reports found");
  }

  set mostRecentReport(val: string) {
    if (!val) {
      throw new Error("add a val");
    }
    this.addReports(val);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const emp1 = Department.createEmployee("static");
console.log(emp1);

const it = new ITDepartment("d1", ["Asura"]);

it.addEmployees("Max");
it.addEmployees("Asura");

it.describe();
it.printEmployeeInformation();

// const itCopy= {name:"DUMMY", describe:it.describe}
// accountingCopy.describe()

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting);
console.log(accounting2);

accounting.mostRecentReport = "from setter";
accounting.addReports("test report");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Man");

// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();
