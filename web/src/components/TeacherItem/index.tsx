import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/35177809?s=460&u=f20753f1c37d7db0f29f0291b552f89effdd4d9d&v=4" alt=""/>
                        <div>
                            <strong>Nicolas Codonho</strong>
                            <span>Químico</span>
                        </div>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero deserunt 
                        <br/><br/>
                        rerum doloribus excepturi obcaecati quae velit
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type="button" >
                            <img src={whatsAppIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;