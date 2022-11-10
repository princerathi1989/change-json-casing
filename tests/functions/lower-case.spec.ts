import { toLowerCase } from '../../src/change-casing';
import * as mockData from '../fixtures/lower-case.json';

describe('toLowerCase', () => {

  test('should change the casing of properties to lowerCase', () => {
    const result = toLowerCase(mockData);

    expect(result).toEqual({
      "name": "Test",
      "id": "622PC",
      "age": 32,
      "gameplayed": "Tennis",
      "hobbies": {
        "experienceinyears": 2,
        "level": "Hard",
        "name": "Dancing"
      },
      "friends": [
        {
          "name": "test 1",
          "age": 36
        },
        {
          "name": "test 2",
          "age": 40
        },
        {
          "name": "test 3",
          "age": 50
        }
      ]
    });
  });

});