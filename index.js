// Code your solution here
function findMatching(array, string) {
    return array.filter(function (element) {
        return element.toUpperCase() === string.toUpperCase();
    })
}

function fuzzyMatch(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) === 0
    })
}

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];


function matchName(collection, string) {
    return collection.filter(function (element) {
        return element.name === string;
    })
}

console.log(matchName(drivers, 'Bobby'))