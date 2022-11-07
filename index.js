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
      return this.convertArray(this.getData());
    }
    return this.changeCase(data);
  }

  convertArray(data) {
    const result = data.reduce((next, item) => {
      return [...next, this.changeCase(item)];
    }, []);
    return result;
  }

  changeCase(data) {
    const result = Object.entries(data).reduce((next, [key, value]) => {
      let nestedObject = this.getConvertedNestedObject(value);
      const propertyName = this.getPropertyName(key);
      return {
        ...next,
        [propertyName]: nestedObject || value
      };
    }, {});
    return result;
  }

  getConvertedNestedObject(value) {
    if (typeof value === 'object') {
      return this.changeCase(value);
    }
    if (Array.isArray(value)) {
      return this.convertArray(value);
    }
    return null;
  }

  getPropertyName(key) {
    return key;
  }
}

class CamelCase extends Json {
  constructor(data) {
    super(data);
  }

  getPropertyName(key) {
    let propertyName = key.toLowerCase();
    if (key.length > 2) {
      propertyName = key[0].toLowerCase() + key.slice(1);
    }
    return propertyName;
  }
}

class LowerCase extends Json {
  constructor(data) {
    super(data);
  }

  getPropertyName(key) {
    return key.toLowerCase();
  }
}

class UpperCase extends Json {
  constructor(data) {
    super(data);
  }

  getPropertyName(key) {
    return key.toUpperCase();
  }
}

module.exports.toCamelCase = toCamelCase;
module.exports.toLowerCase = toLowerCase;
module.exports.toUpperCase = toUpperCase;