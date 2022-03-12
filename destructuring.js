const student = {
    name: 'Ameer Khan',
    subject: 'CSE',
    year: 2022,
    course: {
        major: 'Programming',
        optional: 'Networking',
        lab: 'c++'
    },
}

const {name, year, subject} = student;
const {lab, major} = student.course;

console.log(name);
console.log(year);
console.log(lab);
console.log(major);