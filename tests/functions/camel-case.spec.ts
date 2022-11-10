import { toCamelCase } from '../../src/change-casing';
import * as mockData from '../fixtures/camel-case.json';

describe('toCamelCase', () => {

  test('should change the casing of properties to camelCase', () => {
    const result = toCamelCase(mockData);

    expect(result).toEqual({
      "name": "Test",
      "id": "622PC",
      "age": 32,
      "gamePlayed": "Tennis",
      "hobbies": {
        "experienceInYears": 2,
        "level": "Hard",
        "name": "Dancing"
      },
      "fRIENDS": [
        {
          "nAME": "test 1",
          "aGE": 36
        },
        {
          "name": "test 2",
          "age": 40
        },
        {
          "nAME": "test 3",
          "age": 50
        }
      ]
    });
  });

});