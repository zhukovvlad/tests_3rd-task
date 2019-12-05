import fetchData from '../src/js/http';
import getLevel from '../src/js/user';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  fetchData.mockReturnValue(1);

  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
