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

Person.prototype.greeting = function(){
    console.log('hi', this.name.first);
}

//定义Teacher构造器函数

function Teacher(first, last, age, gender, insterests, subject) {
    Person.call(this, first, last, age, gender, insterests);

    this.subject = subject
}