function isEmpytPropetsyObj(obj) {
    var index;
    var returnProperts = [];
    var properts = Object.keys(obj);

    for (index in properts) {
        var property = properts[index];
        if (obj[property] === '') {
            returnProperts.push(properts[index]);
        }
    }
    return returnProperts;
} 