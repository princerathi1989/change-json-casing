export class Json {
  data: any;

  constructor(data: any) {
    this.data = data;
  }
  getData() {
    return this.data;
  }
  convert() {
    if (Array.isArray(this.getData())) {
      return this.convertArray(this.getData());
    }
    return this.changeCase(this.getData());
  }
  convertArray(data: any) {
    const result = data.reduce((next, item) => {
      return [...next, this.changeCase(item)];
    }, []);

    return result;
  }
  changeCase(data: any) {
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
  getConvertedNestedObject(value: any) {
    if (Array.isArray(value)) {
      return this.convertArray(value);
    }
    if (typeof value === 'object') {
      return this.changeCase(value);
    }
    return null;
  }
  getPropertyName(key: any) {
    return key;
  }
}