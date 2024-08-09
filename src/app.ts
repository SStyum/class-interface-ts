const names: string[] = ["Rocha", "Jaque"];

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: "Rocha" }, { age: 30 });
console.log(mergeObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy> (element: T): [T, string] {
    let descriptionText = "Got no value";
    if (element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if (element.length > 0){
        descriptionText = 'Got' + element.length + 'elements.';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
    return 'Value: ' + obj[key];
};

extractAndConvert({ name: 'Rocha' }, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem (item: T) {
        this.data.push(item)
    };

    removeItem (item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };

    getItems () {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Jaquelinda");
textStorage.addItem("Rocha");
textStorage.removeItem("Rocha");
console.log(textStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal (title: string, description: string, date: Date): CourseGoal  {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
    /* return {
        title,
        description,
        completeUntil: date,
    }; */
}