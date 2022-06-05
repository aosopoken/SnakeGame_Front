import { useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../service/api';
import './loseModal.css'

const LoseModal = (props) => {
    const {nome,score} = props;
    const history = useHistory();
    
    const voltarMenu = () => {
        api.post('/person',{name: nome,score}).then((res) => console.log(res.status))
        history.push('/');
        window.location.reload();
    }

    return(
        <>
        {
        props.isVisible && 
        (
            <div className="modal">
                <div className="modal__conteudo">
                    <div className='modal__titulo'>
                        VOCÊ PERDEU
                    </div>
                    <div className='modal__score'>
                      SCORE:  {props.score}
                    </div>
                    <button className='modal__button' onClick={voltarMenu}>
                        MENU
                    </button>

                </div>
            </div>
        ) }
        
        </>
    )
}
export default LoseModal