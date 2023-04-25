# Learn TypeScript 

##### reference
+ Learn
  - [codecademy Cheatsheets](https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-types/cheatsheet)
  - [codecademy Lesson](https://www.codecademy.com/courses/learn-typescript/lessons/introduction-to-typescript/exercises/what-is-typescript)
  - [TypeScript HandBook](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

- [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content) 

1. npm init
2. npm install typescript --save-dev
3. tsc init  (create tsconfig.json)

```
"compilerOptions": {
  
  "rootDir": "./src",             /* Specify the root folder within your source files. */
  
  "outDir": "./dist",             /* Specify an output folder for all emitted files. */
  
  "inlineSourceMap": true,        /* Include sourcemap files inside the emitted JavaScript. */
  // 簡單來說，source map 就是儲存了原始碼與編譯後程式碼的對應關係之檔案，讓你在開啟 Devtool 時，能讓瀏覽器透過載入 source map 的方式幫助你定位原始碼位置，方便下中斷點除錯。
  
}
```


