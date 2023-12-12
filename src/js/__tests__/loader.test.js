import GameSavingLoader from "../gameSavingLoader";

jest.setTimeout(3000);
test('should load', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
