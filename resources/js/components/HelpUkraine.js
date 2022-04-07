import React from 'react';

const HelpUkraine = () => {
    return (
        <div className='help-ukraine-page w-100 d-flex flex-column align-items-center justify-content-center text-center'>
            <div className='wrap w-75 '>
                <h1>Пропоную вам не залишатися осторонь та допомогти Україні фінансово</h1>
                <h5>Мій сайт не зберігає ніяких даних, окрім історій. Але існує багато інших благодійних фондів. На жаль, також існують говнюки, які паразитують на добродушності інших, тому пропоную вам перевірений сайт НБУ:</h5>
                <a href="https://promo.bank.gov.ua/fin-defense/" className='btn btn-outline-success'>Тик сюди</a>
            </div>
        </div>
    );
};

export default HelpUkraine;
