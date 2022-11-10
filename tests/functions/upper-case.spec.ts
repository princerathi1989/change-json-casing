import { toUpperCase } from '../../src/change-casing';
import * as mockData from '../fixtures/upper-case.json';

describe('toUpperCase', () => {

  test('should change the casing of properties to upperCase', () => {
    const result = toUpperCase(mockData);

    expect(result).toEqual({
      "NAME": "Test",
      "ID": "622PC",
      "AGE": 32,
      "GAMEPLAYED": "Tennis",
      "HOBBIES": {
        "EXPERIENCEINYEARS": 2,
        "LEVEL": "Hard",
        "NAME": "Dancing"
      },
      "FRIENDS": [
        {
          "NAME": "test 1",
          "AGE": 36
        },
        {
          "NAME": "test 2",
          "AGE": 40
        },
        {
          "NAME": "test 3",
          "AGE": 50
        }
      ]
    });
  });
});