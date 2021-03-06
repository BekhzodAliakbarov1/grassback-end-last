import React from 'react'

import Style from './Home2.module.css'
import bg from '../../../assets/images/2.png'

const Home2 = () => {
    return (
        <div className={Style.main}>
            <div className={Style.inMain} >
                <div className={Style.img} style={{backgroundImage:`url(${bg})`}} ></div>
                <div className={Style.text}>
                    <h3>
                        КВИНС ГРАСС <span>ИНТЕРНЭШНЛ</span>
                    </h3>
                    
                    <p>
                        Качество – это не просто наша цель, это основополагающий элемент философии, которая проявляется во всех наших действиях, направленных на удовлетворение потребителя конечным результатом.
                    </p>
                    <p><span>
                        Мы предлагаем спортивные рулонные газоны только высшего качества.    
                    </span></p>
                    <p>
                        На протяжении многих лет, наряду с развитием новых видов продукции и альтернативного их использования, и благодаря постоянному развитию, неуклонно растет наш опыт. Наш качественный газон зарекомендовал себя не только в Голландии, где находится основное производство, но и в других странах Европы, а так же и в России.
                    </p>
                    <p>
                        Наш многолетний опыт является гарантией того, что наши клиенты получают высококачественный продукт, выращенный под контролем специалистов.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home2
