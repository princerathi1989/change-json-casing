function toUpperCase(data) {
  const casing = new UpperCase(data);
  return casing.convert();
}

function toLowerCase(data) {
  const casing = new LowerCase(data);
  return casing.convert();
}

function toCamelCase(data) {
  const casing = new CamelCase(data);
  return casing.convert();
}



class Json {
  data;

  constructor(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  convert() {
    if (Array.isArray(this.getData())) {
      const result = this.getData().reduce((next, item) => {
        return [...next, this.changeCase(item)];
      }, []);
      return result;
    };
    return this.changeCase(this.getData());
  }

  changeCase(data) {
    return data;
  }

  getPropertyName(key) {
    let propertyName = key.toLowerCase();
    if (key.length > 2) {
      propertyName = key[0].toLowerCase() + key.slice(1);
    }
    return propertyName
  }
}

class CamelCase extends Json {

  constructor(data) {
    super(data);
  }

  changeCase(data) {
    const result = Object.entries(data).reduce((next, [key, value]) => {
      const propertyName = this.getPropertyName(key);
      return { ...next, [propertyName]: value };
    }, {});
    return result;
  }
}

class LowerCase extends Json {
  constructor(data) {
    super(data);
  }

  changeCase(data) {
    const result = Object.entries(data).reduce((next, [key, value]) => {
      const propertyName = key.toLowerCase();
      return { ...next, [propertyName]: value };
    }, {});
    return result;
  }
}

class UpperCase extends Json {
  constructor(data) {
    super(data);
  }

  changeCase(data) {
    const result = Object.entries(data).reduce((next, [key, value]) => {
      const propertyName = key.toUpperCase();
      return { ...next, [propertyName]: value };
    }, {});
    return result;
  }
}


module.exports.toCamelCase = toCamelCase;
module.exports.toLowerCase = toLowerCase;
module.exports.toUpperCase = toUpperCase;

const data1 = {
  name: 'Prince',
  Age: 32,
  GamePlayed: 'Tennis'
};
const data2 = {
  name: 'Nikhil',
  AGE: 34,
  GAMEPLAYED: 'Badminton'
};
const data3 = {
  Name: 'Rahul',
  age: 33,
  GamePlayed: 'Cricket'
};
const dataArray = [data1, data2, data3];
console.log(toCamelCase(dataArray))
console.log(toLowerCase(dataArray))
console.log(toUpperCase(dataArray))
console.log(toUpperCase(data3))



// function toUpperCase(data: unknown): unknown {
//   const Case = new UpperCase(data);
//   return Case.convert();
// }

// function toLowerCase(data: unknown): unknown {
//   const Case = new LowerCase(data);
//   return Case.convert();
// }

// function toCamelCase(data: unknown): unknown {
//   const Case = new CamelCase(data);
//   return Case.convert();
// }



// module.exports.toCamelCase = toCamelCase;
// module.exports.toLowerCase = toLowerCase;
// module.exports.toUpperCase = toUpperCase;



// class Json {
//   private data;

//   constructor(data: any) {
//     this.data = data;
//   }

//   getData(): any {
//     return this.data;
//   }

//   convert(): unknown {
//     if (Array.isArray(this.getData())) {
//       const result = this.getData().reduce((next: any, item: any) => {
//         return [...next, this.changeCase(item)];
//       }, []);
//       return result;
//     };
//     return this.changeCase(this.getData());
//   }

//   changeCase(data: any): unknown {
//     const result = Object.entries(data).reduce((next, [key, value]) => {
//       const propertyName = this.getPropertyName(key);
//       return { ...next, [propertyName]: value };
//     }, {});
//     return result;
//   }

//   getPropertyName(key: any) {
//     let propertyName = key.toLowerCase();
//     if (key.length > 2) {
//       propertyName = key[0].toLowerCase() + key.slice(1);
//     }
//     return propertyName
//   }
// }

// export class CamelCase extends Json {

//   constructor(data: any) {
//     super(data);
//   }

//   changeCasing(data: any): unknown {
//     const result = Object.entries(data).reduce((next, [key, value]) => {
//       const propertyName = this.getPropertyName(key);
//       return { ...next, [propertyName]: value };
//     }, {});
//     return result;
//   }
// }

// export class LowerCase extends Json {

//   constructor(data: any) {
//     super(data);
//   }

//   changeCasing(data: any): unknown {
//     const result = Object.entries(data).reduce((next, [key, value]) => {
//       const propertyName = key.toLowerCase();
//       return { ...next, [propertyName]: value };
//     }, {});
//     return result;
//   }
// }

// export class UpperCase extends Json {


//   constructor(data: any) {
//     super(data);
//   }

//   changeCasing(data: any): unknown {
//     const result = Object.entries(data).reduce((next, [key, value]) => {
//       const propertyName = key.toUpperCase();
//       return { ...next, [propertyName]: value };
//     }, {});
//     return result;
//   }
// }