namespace spread_operator_demo {

    let originalArr1 = [ 1, 2, 3];
    let originalArr2 = [ 4, 5, 6];
    let copyArr = [...originalArr1];
    let mergedArr = [...originalArr1, ...originalArr2];
    let newObjArr = [...originalArr1, 7, 8];

    let originalObj1 = {a: 1, b: 2, c: 3};
    let originalObj2 = {d: 4, e: 5, f: 6};
    let copyObj = {...originalObj1};
    let mergedObj = {...originalObj1, ...originalObj2};
    let newObjObj = {... originalObj1, g: 7, h: 8};

}
