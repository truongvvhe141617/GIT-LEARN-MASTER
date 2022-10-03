// let where = {};

// where['age'] = 23;
// where['name'] = 'Hi';
// console.log(Object.values(where).length);

// var number = "0,2000000";
// function roundToTwoDigitsAfterComma(floatNumber) {
//     return parseFloat((Math.floor(floatNumber * 100000) / 100000).toFixed(5));
// }
// console.log(roundToTwoDigitsAfterComma("7.000000000000001"));





  const exampleData = [
    {
      id: 1,
      name: "Danh mục 01",
      parent: null,
      note: "Note danh mục 01",
      count: 5
    },
    {
      id: 2,
      name: "Danh mục 02",
      parent: 1,
      note: "Note danh mục 02",
      count: 5
    },
    {
      id: 3,
      name: "Danh mục 03",
      parent: 1,
      note: "Note danh mục 03",
      count: 5
    },
    {
      id: 4,
      name: "Danh mục 04",
      parent: 2,
      note: "Note danh mục 04",
      count: 5
    },
    {
      id: 5,
      name: "Danh mục 05",
      parent: 4,
      note: "Note danh mục 05",
      count: 5
    },
    {
      id: 6,
      name: "Danh mục 06",
      parent: null,
      note: "Note danh mục 06",
      count: 5
    }
  ];
  // build a map with get node by its id
  let mapNodeById = {};
  exampleData.forEach((item) => {
    mapNodeById[item.id] = item;
  });
  // {
  //   '1': {
  //     id: 1,
  //     name: 'Danh mục 01',
  //     parent: null,
  //     note: 'Note danh mục 01',
  //     count: 5
  //   },
  //   '2': {
  //     id: 2,
  //     name: 'Danh mục 02',
  //     parent: 1,
  //     note: 'Note danh mục 02',
  //     count: 5
  //   },
   console.log(mapNodeById);
  exampleData.forEach((item) => {
    if (item.parent && mapNodeById[item.parent]) {
      let parentNode = mapNodeById[item.parent]; //get node parent
      if (parentNode.listChild) {
        parentNode.listChild.push(item); // add child to parent
        console.log(parentNode)
      } else {
        parentNode.listChild = [item]; // add child to parent
      }
    }
  });
  let result = [];
  exampleData.forEach((item) => {
    if (!item.parent || !mapNodeById[item.parent]) {
      // !item.parent <=> no parent, !mapNodeById[item.parent] <=> no existed parent
      result.push(item);
    }
  });

 
