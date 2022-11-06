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