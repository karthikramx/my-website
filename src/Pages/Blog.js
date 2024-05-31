import React from 'react';
import Card from '../components/Card/Card';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Spinner from '../components/Spinner/Spinner';


export default function Blog() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    function extractImageLinks(html) {
        ReactHtmlParser(html);
        let imageLinks = [];

        const transform = (node, index) => {
            if (node.type === 'tag' && node.name === 'img') {
                imageLinks.push(node.attribs.src);
            }
        };

        ReactHtmlParser(html, { transform });

        return imageLinks[0];
    }

    function extractParagraph(html) {
        ReactHtmlParser(html);
        let paragraphs = [];

        const transform = (node, index) => {
            if (node.type === 'tag' && node.name === 'p') {
                paragraphs.push(node.children[0].data);
            }
        }

        ReactHtmlParser(html, { transform });

        const textFromParagraphs = paragraphs.join(' ');

        //Limit the number of characters to 100
        // if (paragraphs[0] && paragraphs[0].length > 100) {
        //     return `${paragraphs[0].substring(0, 100)}...`
        // }

        return `${textFromParagraphs.substring(0, 50)}...`


    }

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karthikramx');
                const { items } = await res.json();
                console.log(items);
                setItems(items);
            } catch (error) {
                console.error("Failed to fetch data", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (error) {
        return (
            <section>
                <div >
                    <h3>Latest Articles</h3>
                    <ul>
                        <p>Failed to fetch data, please try again later.</p>
                    </ul>
                    <a
                        href={"https://karthikramx.medium.com/"}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        Read on Medium
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section style={{ marginTop: "100px", marginBottom: "40px" }}>
            <div>
                <h1>My Blogs</h1>
                {loading && <div style={{ display: 'flex', justifyContent: 'center', marginTop: "40px" }}><Spinner /></div>}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    alignItems: 'center',
                    justifyItems: 'center',
                    marginTop: "40px",
                    gridGap: "20px"
                }}>
                    {items.map((item, index) => {
                        //console.log(item.description);
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                description={extractParagraph(item.content)}
                                link={item.link}
                                image={extractImageLinks(item.content)}
                            />)
                    })}
                </div>
            </div>
        </section>
    );
}
