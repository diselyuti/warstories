import React, {useState} from 'react';
import HelpDima from "./HelpDima";

const AboutUs = () => {
    const [open, setOpen] = useState(false);
    function toggleOpen(){
        setOpen(!open);
    }
    return (
        <div className='about-page d-flex flex-column w-100 justify-content-around align-items-center'>
            <div className='about-page-main d-flex flex-column w-100 justify-content-center align-items-center'>
                <h2>Хто я?</h2>
                <h4>Я, <a className='h4 dimaska' href='https://www.instagram.com/_dimaska/' target='_blank'> Дмитро Селютін </a>, народився та живу в Україні. В школі, як і всі, вивчав історію, вважав, що
                розумію, що таке війна. Але ніякий підручник не розповість краще, ніж люди</h4>
                <h2>Мета:</h2>
                <h4>Чому в 21 столітті таке сталося? Мабуть, дехто забув, наскільки це жахливо
                    і чому не можна допускати війни. Тому я створив сайт, на якому можна залишити
                    свою історію, розповісти, як саме тебе зачепила російсько-українська війна.
                    Сподіваюсь, що завдяки такому сайту наші діти будуть краще розуміти, наскільки важливо не допускати
                    збройних конфліктів.
                </h4>
                <h2>До чого закликаю?</h2>
                <h4>Не тримати в собі, розповісти все, як було. Писати, писати, писати. Не думати про те, що чиясь історія
                гірше, чиясь краще - усі вони жахливі. А також, бережіть себе))</h4>
            </div>
            <div>
                <h2 className='help-btn' onClick={toggleOpen}>Що ще?</h2>
                <HelpDima isOpen={open}/>
            </div>
        </div>
    );
};

export default AboutUs;
