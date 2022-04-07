import React, {useState} from 'react';
import TextEditor from "./TextEditor";

const Tellstory = () => {
    async function onFormSubmit(e) {
        e.preventDefault();
        let url = window.location.origin + '/api/histories';
        let data = {
            name: document.getElementById('exampleFormControlInput1').value,
            surname: document.getElementById('exampleFormControlInput2').value,
            title: document.getElementById('exampleFormControlInput3').value,
            story: document.querySelector('.public-DraftEditor-content').innerHTML
        };
        try {
            const response = await fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            document.querySelector('.all-good').classList.add('opened');
            setTimeout(()=>{
                window.location.href = window.location.origin;
            }, 1000)
        } catch (error) {
            document.querySelector('.all-bad').classList.add('opened');
        }
    }

    return (
        <div className='tellstory-page d-flex w-100 justify-content-center align-items-center'>
            <form className='w-50' id='tellstory-form' onSubmit={onFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Ім'я</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1"
                           placeholder="Степан" required/>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Фамілія</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2"
                           placeholder="Бандера" required/>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Назва</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3"
                           placeholder="Путлєр сволота/Відважні солдатики/щось своє" required/>
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Історія</label>
                    <TextEditor/>
                </div>
                <button className="btn btn-outline-success w-100" type="submit">Ось і все</button>
            </form>
            <div className='all-good position-absolute d-flex align-items-center justify-content-center'>
                Ваша історія збережена, дякуємо за відвертість))
            </div>
            <div className='all-bad position-absolute d-flex align-items-center justify-content-center'>
                Сталася помилка(( Спробуйте ще раз, а потім повідомте мені
            </div>
        </div>
    );
};

export default Tellstory;
