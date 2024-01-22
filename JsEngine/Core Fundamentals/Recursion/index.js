let user = {
    name: 'raghavendra',
    address: {
        personal: {
            city: 'andraprades',
            area: 'bosenagar'
        },
        office: {
            city: 'hyderabad',
            area: {
                landamark: 'Madhapur'
            }
        }
    }
}

let finalobj = {};
function Recursionfunc(obj, parent) {

    for (let key in obj) {
        // console.log(typeof obj[key])

        if (typeof obj[key] === 'object') {
            Recursionfunc(obj[key], parent + '_' + key);
        }
        else {
            finalobj[parent + "_" + key] = obj[key]
        }
    }
    console.log(finalobj)
}
 Recursionfunc(user, 'user');

