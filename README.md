# CHANGE-JSON-CASING
**change-json-casing** provides the easy and reliable way of changing the casing of keys for the whole JSON data.


## Available Conversion Functions:

- toCamelCase()
- toLowerCase()
- toUpperCase()

## How to use?
>Install the package
```bash
npm install change-json-casing
```

> Pass the complete array or object as a parameter to the desired function
```js
const result = toCamelCase([{ Name: 'Test', UserId: 123  }])
```
> result
```js
[{"name":"Test","userId":123}]
```