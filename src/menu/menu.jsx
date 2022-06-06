import React,{useState, useEffect} from 'react';
import './menu.css'
import api from '../service/api';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SnakeGame from '../SnakeGame/SnakeGame';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Menu = () =>{
    const [users,setUsers] = useState();
    const [name, setName] = useState();
    const history = useHistory();

    const clickButton = () =>{
        history.push({pathname: '/snakeGame', state: {nome: name || 'Anônimo'}})
    }

    useEffect(() => {
      api.get('/person').then((res) => {
        setUsers(res.data.sort((a,b) => b.score - a.score))
      });

    },[])

    const usersArray =users?.map((user,i) => {
        return(
        <tr key={user.id}>
            <td>{user.name}</td> 
            <td>{user.score}</td> 
        </tr>
        );
        })

    return(
        <div className='container'>
            <div className='menu'>
                <div className='menu__titulo'>
                    MENU
                </div>
                <div className='menu__conteudo'>
                    <div className='menu__score'>
                        <table className="TabelaProdutos">
                            <thead>
                                <tr>
                                    <th>
                                        Nome
                                    </th>
                                    <th>
                                        Score
                                    </th>
                                </tr>
                                {usersArray}
                            </thead>
                        </table>
                    </div>
                    <div className='menu__conteudo__input'>
                        <div className='menu__input'>
                            <p>Coloque seu nome</p> 
                            <input onChange={(event) => {setName(event.target.value)}} />
                        </div>
                        <button onClick={clickButton} className='menu__iniciar' href='/snakeGame'>
                            Iniciar
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default withRouter(Menu)