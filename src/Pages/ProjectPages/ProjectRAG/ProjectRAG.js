import React from 'react';
import ListBox from '../../../components/ListBox/ListBox';
import InputBox from '../../../components/InputBox/InputBox';
import BoxHolder from '../../../components/BoxHolder/BoxHolder';
import Button from '../../../components/Button/Button';
import Spinner from '../../../components/Spinner/Spinner';
import { useState, useEffect } from 'react';
import image from '../../../assets/RAGDeployed.jpg'

const ProjectRAG = () => {
    const [selectedTopic, setTopic] = useState('');
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    const handleTopicChange = (topic) => {
        setLoading(true);
        if (topic === '') {
            alert("Please select a topic");
            setLoading(false);
            return;
        }
        const response = fetch(`https://llmbackend.fly.dev/settopic`,
            {
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
                body: JSON.stringify({ "topic": topic })
            });
        console.log(response)
        setLoading(false);
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
        setLoading(true);
        const loadTopics = async () => {
            const response = await fetch(`https://llmbackend.fly.dev/listtopics`,
                {
                    headers: { 'Content-Type': 'application/json' },
                    method: 'GET'
                });
            const data = await response.json();
            if (data.topics) {
                setLoading(false);
            }
            setTopics(data.topics);
        }
        loadTopics();
    }, []);

    return (
        <div>
            <section style={{ marginTop: "100px" }}>
                <h1>Retrieval Augmented Generation</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {loading ? <Spinner /> : <div style={{ width: '30px', height: '37px' }} />}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BoxHolder heading={"Select Topic"}>
                        <ListBox options={topics} onClick={handleTopicChange} />
                    </BoxHolder>
                    <BoxHolder heading={"Current Topic"}>
                        <p style={{ width: '150px' }}>{selectedTopic}</p>
                    </BoxHolder>
                    <BoxHolder heading={"Create Topic"}>
                        <InputBox options={topics} onClick={handleTopicChange} />
                    </BoxHolder>
                    <BoxHolder heading={"Delete"}>
                        <Button title={"Delete All Topics"} onClickHandler={() => { }} />
                    </BoxHolder>

                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <BoxHolder heading={"Question"}>
                            <input style={{ width: '600px', height: '30px', marginRight: '10px', fontSize: '16px' }} onChange={(event) => setQuestion(event.target.value)}></input>
                            <Button title={"Ask"} onClickHandler={handleQuestion} />
                        </BoxHolder>
                        <BoxHolder heading={"Answer"}>
                            <p style={{ width: '650px', height: '120px' }}>{answer}</p>
                        </BoxHolder>
                    </div>
                </div>
                <hr style={{ width: '70%' }} />
                <img src={image} alt="RAGDeployed" />
            </section>
        </div>
    );
};

export default ProjectRAG;