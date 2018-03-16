window.onload = function () {

    console.log("onload");

    function Personal(name){
        var obj = {};

        var number = 100;

        obj.name = name;

        obj.count = 10;

        obj.greeting = function() {

            console.log("Hello:", this.name);
            
        }

        obj.add = function(params) {
            return this.count++ ;
        }

        obj.number = function(params) {
            return ++number;
        }

        return obj;
    }

    Personal.prototype.add = function (a, b) {
        return this.count ++ ;
    }

    var salva = Personal("salva");

    // console.log(salva.name);
    // salva.greeting()
    // console.log(salva.add());
    // console.log(salva.add());

    // console.log(salva.number());
    // console.log(salva.number());

    var andy = Personal("andy")
    // console.log(andy.name);
    // console.log(andy.add())

    // console.log(andy.number());
    // console.log(andy.number());

    console.log(andy)


    //构造对象
    var bob = new Personal('bob');
    var aim = new Personal('aim');

    console.log(bob, bob.number(), bob.number())
    console.log(aim, aim.number(), aim.number())


    //Object函数创建对象
    var person1 = new Object({
        name: 'Aibi',
        age: 22
    });
    // console.log('person1:', person1);

    var person2 = Object.create(person1);
    // console.log('person2:', person2);


    function Animal(name, age) {
        var obj = {};

        obj.name = name;
        obj.age = age;
        obj.greeting = function () {
            console.log('Hello:', this.name)
        }

        return obj;
    }

    var dog = new Animal('CC', 2);
    var jm = Object.create(dog);
    var hsq = new dog.constructor('hsq',3)

    // console.log('dog', dog, dog.constructor);
    // console.log('jm', jm, jm.name);
    // console.log('hsq', hsq, hsq.name);
}