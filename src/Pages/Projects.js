import React from 'react';
import Card2 from '../components/Card2/Card';

const Projects = () => {

    const projects = [
        {
            link: "https://llm-frontend-hazel.vercel.app/",
            title: "Retrieval Augmented Generation",
            description: "Description of the project",
            image: "https://picsum.photos/200/300",
            route: "/projects/RAG"
        },
    ]

    return (
        <section style={{ marginTop: "100px" }}>
            <div>
                <h1>My Projects</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    alignItems: 'center',
                    justifyItems: 'center',
                }}>
                    {projects.map((project, index) => {
                        return (
                            <Card2
                                key={index}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                image={project.image}
                            />)
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;