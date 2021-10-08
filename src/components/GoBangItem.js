import styled from "styled-components";
import '../style/index.css';

// 正式的棋盤 
const Board = styled.div`
  width: 32px;
  height: 32px;
  position: relative;

  // 直線
  &::before {
    content: '';
    height: 100%;
    width: 2px;
    background: #5b5765;
    position: absolute;
    top: 0;
    left: 50%;
    // 上下邊界
    ${props => props.row === 0 && `height: 50%; top: 50%;`};
    ${props => props.row === 18 && `height: 50%;`}
  }
  // 橫線
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #5b5765;
    position: absolute;
    top: 50%;
    // 左右邊界
    ${props => props.col === 0 && `width: 50%; left: 50%;`};
    ${props => props.col === 18 && `width: 55%;`};
  }
`

// 正式的棋子
const ChessElement = styled.div`
  width: 30px;
  height: 30px;
  transform: scale(0.8);
  position: absolute;
  color: white;
  z-index: 1;
  ${props => props.value === "black" && 
  `
    border:  solid 1px black ;

    /* 手繪粗細 */
    border-width: 4px 3px 3px 2px;
  
    /* 手繪形狀 */
    border-radius: 53% 47% 57% 44% / 44% 48% 55% 53%;

    /* 手繪填滿 */
    background:repeating-linear-gradient(-45deg, 
        #000 0, #000 5%, 
        rgb(197, 197, 197) 5%, rgb(209, 209, 209) 10%);
  `}

  ${props => props.value === "white" &&
  `
    background:white;
    border:  solid 1px black ;

    /* 手繪粗細 */
    border-width: 3px 4px 3px 2px;
    
    /* 手繪形狀 */
    border-radius: 54% 42% 48% 53% / 53% 47% 47% 47%;
  `}
`

const GoBangItem = ({position, squares, handleChessClick }) => {
  const {x, y} = position
  const handleClick = () => {
    handleChessClick(position)
  }

  return(
    <Board
      col={x}
      row={y}
      onClick={handleClick}
    >
      <ChessElement value={squares[y][x]} />
    </Board>
  )
};

export default GoBangItem;
