import React, {useEffect} from 'react';

const HelpDima = ({isOpen}) => {
    useEffect(()=>{
        if (isOpen) {
            document.getElementById('help-dima-block').scrollIntoView({
                behavior:"smooth"
            });
        }
    });
    if (isOpen){
        return(
            <div id='help-dima-block' className='w-100 d-flex flex-column align-items-center'>
                <h4>Для, того, щоб сайт існував, мені потрібно сплачувати хостінг,
                    тож моє прохання до тебе: "Одну гривню на добре діло!"</h4>
                <h4>Моя картка:</h4>
                <h4>5168745018815107</h4>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
};

export default HelpDima;
