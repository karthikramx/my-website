import React from 'react';
import ListBox from '../../../components/ListBox/ListBox';
import { useState, useEffect } from 'react';
import image from '../../../assets/RAGDeployed.jpg'

const ProjectRAG = () => {
    const [selectedTopic, setTopic] = useState('');
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    const handleTopicChange = (topic) => {
        if (topic === '' || !topics.includes(topic)) {
            alert("Please select a topic");
            return;
        }
        const response = fetch(`https://llmbackend.fly.dev/settopic`,
            {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ "topic": topic })
            });
        console.log(response)
        setTopic(topic);
    }

    const handleQuestion = async () => {
        try {
            setLoading(true);
            if (question === '') {
                alert('Please enter a question');
                setLoading(false);
                return;
            }
            console.log(question)
            const response = await fetch(`https://llmbackend.fly.dev/ask`,
                {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST',
                    body: JSON.stringify({ "question": question })
                });
            const data = await response.json();
            setAnswer(data.answer.result);
        } catch (err) {
            console.error(err.message)
        }
        setLoading(false);
    }

    useEffect(() => {
        const loadTopics = async () => {
            const response = await fetch(`https://llmbackend.fly.dev/listtopics`,
                {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'GET'
                });
            const data = await response.json();
            setTopics(data.topics);
        }

        loadTopics();
    }, []);

    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <h1>Retrieval Augmented Generation</h1>

                {/* Add your component content here
                1. (done) Add a searchable dropdown
                2. Add a text box with a button to search and add a topic
                3. Question and Answering chat component based on the topic
                4. Delete all topics
                5. Display current topic being used
                6. Let the end point also return the consine similarity matches
                7. Link and show the wikipedia page
                */}
                <ListBox options={topics} onClick={handleTopicChange} />
                <img src={image} alt="RAGDeployed" />
            </section>
        </div>
    );
};

export default ProjectRAG;