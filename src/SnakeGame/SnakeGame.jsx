import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, snakeTamanho } from '../SnakeGame/snake/snake.js'
import { update as updateFood, draw as drawFood } from '../SnakeGame/food/food.js'
import { outsideGrid } from '../SnakeGame/grid/grid'
import { withRouter } from 'react-router-dom';
import React,{useState} from 'react';
import './style.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import LoseModal from '../loseModal/loseModal.jsx';

const SnakeGame = (props) => {
    const location = useLocation()
    const {nome} = location?.state;
    const score = snakeTamanho();

    let lastRenderTime = 0
      let gameOver = false
      const gameBoard = React.createRef()
      const [loseModal, setLoseModal] = useState(false);
      function main(currentTime) {
        if (gameOver) {
          setLoseModal(true)
          return
        }
        window.requestAnimationFrame(main)
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    
        lastRenderTime = currentTime 
        
        update()
        draw()
      }
    
      window.requestAnimationFrame(main)
    
    
      function update() {
          updateSnake()
          updateFood()
          checkDeath()
      }
    
      function draw () {
        gameBoard.current.innerHTML = ''
          drawSnake(gameBoard.current)
          drawFood(gameBoard.current)
      }
    
      function checkDeath() {
          gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
      }
    return(
      <>
      <LoseModal isVisible={loseModal} score={score} nome={nome}/>
      <div className="campoGrid">
        <div id="cobra" ref={gameBoard}></div>
      </div>
      </>
    )
}

export default withRouter(SnakeGame);