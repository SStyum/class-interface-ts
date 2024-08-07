class Department {
    protected employees: string[] = [];
    constructor(private readonly id: string, public name: string) {}

    static createEmployee (name: string) {
        return { name: name };
    }

    describe () {
        console.log(`Department (${this.id}: ${this.name})`); 
    }

    addEmployee (employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation () {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport () {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found!");
    }

    set mostRecentReport (value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    addEmployees(name: string) {
        if (name === "Rocha") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("d1", ["Rocha", "Jaque"]);
const accounting = new AccountingDepartment("d2", ["batata", "beterraba", "oleaginosa"]);

accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);

it.describe();

it.addEmployee("Rocha");
it.addEmployee("Jaque");
console.log(it);

accounting.describe();

accounting.addEmployee("Rocha");
accounting.addEmployee("Jaque");
accounting.addReport("Something went wrong...");
accounting.getReports();
console.log(accounting)

const employee1 = Department.createEmployee("Threy");