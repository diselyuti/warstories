import React from 'react';

const StoryPreview = ({story, setSelectedId}) => {
    function handleSelect(){
        setSelectedId(story.id);
    }
    return (
        <div id={"story-" + story.id} className='story-preview-container p-3 d-flex justify-content-between align-items-center' onClick={handleSelect}>
            <h4>{story.title}</h4>
            <h5>{story.name + " " + story.surname}</h5>
        </div>
    );
};

export default StoryPreview;
