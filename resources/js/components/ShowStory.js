import React from 'react';

const ShowStory = ({story, setSelectedId}) => {
    function handleBack(){
        setSelectedId(null);
    }
    return (
        <div className='showstory d-flex flex-column w-100'>
            <div className='m-3 d-flex justify-content-between'>
                <div className='story-preview-container p-3 w-75 d-flex justify-content-between align-items-center'>
                    <h4>{story.title}</h4>
                    <h5>{story.name + " " + story.surname}</h5>
                </div>
                <button className="back btn btn-outline-success" onClick={handleBack}>До інших історій</button>
            </div>

            <div className='m-3 p-3' dangerouslySetInnerHTML={{__html: story.story}}></div>
        </div>
    );
};

export default ShowStory;
