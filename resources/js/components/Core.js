import React, {useEffect, useState} from 'react';
import StoryPreview from "./StoryPreview";
import Loading from "./Loading";
import ShowStory from "./ShowStory";
import Search from "./Search";

const Core = () => {
    const [stories, setStories] = useState();
    const [selectedId, setSelectedId] = useState();
    const [error, setError] = useState();
    useEffect(()=>{
        fetch(window.location.origin + '/api/histories')
            .then(res=>res.json())
            .then(data=>{
                setStories(data);
            }).catch(err=>{
                console.log(err.message);
            });
    }, []);
    if (selectedId){
        return (
            <ShowStory story={
                stories.find(story=>story.id === selectedId)
            } setSelectedId={setSelectedId}/>
        );
    }else {
        return (
            <div>
                <Search setStories={setStories}/>
                <div className='core-page d-flex flex-column h-100 w-100'>
                    {
                        stories
                            ?
                            stories.map(story => {
                                return <StoryPreview
                                    key={story.created_at}
                                    story={story}
                                    setSelectedId={setSelectedId}
                                />
                            })
                            :
                            <Loading text={"Завантажуємо контент;))"}/>
                    }
                </div>
            </div>
        );
    }
};

export default Core;
