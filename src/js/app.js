// TODO: write your code here
import GameSavingLoader from "./gameSavingLoader";

console.log('worked');
GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});


