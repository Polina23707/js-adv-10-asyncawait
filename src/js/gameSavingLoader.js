import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      setTimeout(() => {
        (async () => {
          try {
            const data = await read();
            const value = await json(data);
            resolve(value);
          } catch(error) {
            console.log(error);
          }
        })();
      }, 500)
    })
  }
}

