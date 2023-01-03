var salary = {
    georgi: 1500,
    maria: 1800,
    petur: 1430,
}

console.log(salary.georgi)
console.log(salary.maria)

var salary1 = {
    georgi: {
        cur: "$",
        value: 1800,
        workTime: {
            monday: 7,
            tuesday: 6,
        },
        sayHello: function() {
            alert('Hello');
            return 5;
        },
        more: [{
            information: 123
        }],
        spinning: [1, 2, undefined, undefined, null, {}, 123],
        test: function() {
            return this.value
        },
        filterFunction: function() {
            return this.spinning.filter(function (el) {return typeof el === 'number'} )
        }
    },
    maria: 1800,
    petur: 1430,
}

console.log(salary1.georgi.cur)
console.log(salary1.georgi.workTime.tuesday)
console.log(salary1.georgi.sayHello())
console.log(salary1.georgi.more[0])
console.log(salary1.georgi.more[0].information)
console.log(salary1.georgi.test())
console.log(salary1.georgi.filterFunction())
