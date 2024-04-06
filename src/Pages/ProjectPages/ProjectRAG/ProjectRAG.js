import React from 'react';
import ListBox from '../../../components/ListBox/ListBox';

const ProjectRAG = () => {
    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <h1>Retrieval Augmented Generation</h1>
                {/* Add your component content here
                1. Add a searchable dropdown
                2. Add a text box with a button to search and add a topic
                3. Question and Answering chat component based on the topic
                4. See if you are able to stream the text from langchain
                5. Delete all topics
                */}
                <ListBox />
            </section>
        </div>
    );
};

export default ProjectRAG;