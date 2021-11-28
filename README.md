## 五子棋小遊戲

![](https://i.imgur.com/xJAMXl3.png)

- [Demo](https://raye0621.github.io/react-gobang-test/)

---

React 入門學習時製作的五子棋遊戲。

## 功能 

- 基本五子棋功能，判斷勝負
- 使用二維陣列存取棋盤狀態
- 彩蛋：勝負出現後，標題會出現可以點選的文字，點選後會出現我愛 Huli 的跑馬燈

![](https://i.imgur.com/ZpSjuRI.gif)

![](https://i.imgur.com/8AljYB0.gif)

## 使用技術

- 以 JSX 語法撰寫元件
- 使用 function component 搭配 hooks
- 將五子棋功能包成單一一個 hooks - useBoard.js

## 專案結構

/src
	- /components
		- App.js
		- GobangInfo.js
		- GobangItem.js
	- /customHooks
		- useBoard.js
	- /style
		- index.css
	animate.js
	index.js
	utils.js