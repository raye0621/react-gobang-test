## React - 五子棋小遊戲

這是為了學習 React 及 React hooks 應用所製作的五子棋遊戲。

- [Demo](https://raye0621.github.io/react-gobang-test/)

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

- /src
	- /components
		- App.js
		- GobangInfo.js
		- GobangItem.js
	- /customHooks
		- useBoard.js
	- /style
		- index.css
	- animate.js
	- index.js
	- utils.js