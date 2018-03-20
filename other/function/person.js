console.log('person');

function Person(first, last, age, gender, insterests) {
    this.name = {
        first,
        last
    }
    this.age = age;
    this.gender = gender;
    this.insterests = insterests;
}

Person.prototype.greeting = function () {
    console.log('hi', this.name.first);
}

//定义Teacher构造器函数

function Teacher(first, last, age, gender, insterests, subject) {
    Person.call(this, first, last, age, gender, insterests);

    this.subject = subject
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var Aimi = new Teacher('Aimi', 'Alice', 20, 'F', 'reading', 'Chinese')

console.log(Aimi);

var count = 0;
var i = 0
for (i=0 ; i < 10; i++) {
    console.log(i)
}
console.log(i)

function markPerson(first, last) {

    return {
        first: first,
        last: last,
        fullName: function() {
            return `${this.first} ${this.last}`
        }
    }
    
}

var ami = markPerson('Ami', 'Col');
var full = ami.fullName;
console.log('fullName', full());
console.log('fullName', ami.fullName());

var co = new markPerson('Bro', 'Co');
console.log('co', co, co.fullName());

function RFullName(first, last) {
    this.first = first;
    this.last = last;
}

RFullName.prototype.fullName = function() {
    return `${this.first} ${this.last}`;
}

var Ru = new RFullName('Ru', 'Co');
console.log('RU', Ru, Ru.fullName());
