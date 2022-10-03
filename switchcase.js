// const option = 'all';
// const filterDictionary = {
//     all: 'All items',
//     category1: 'Category1 items',
//     category2: 'Category2 items',
//     category3: 'Category3 items',
//     category4: 'Category4 items'
// }

// console.log(filterDictionary['all']);

const state = {
    a: 3,
    b: 5
}

function changeState(state){
    return {...state, b: state.b + 5}
}
console.log(changeState(state));