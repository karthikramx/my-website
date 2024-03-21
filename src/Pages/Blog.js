import React from 'react';
import Card from '../components/Card/Card';
import { useEffect, useState } from 'react';

export default function Blog() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@karthikramx');
                const data = await res.json();
                const items = data.items;
                setItems(items);
            } catch {
                setError(true);
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
        <section style={{ marginTop: "100px" }}>
            <div>
                <h3>Latest Articles</h3>
                <ul>
                    {items.map((item, index) => (
                        <div style={{ justifyContent: 'center', alignItems: 'center' }} key={index}>
                            <Card
                                key={index}
                                title={item.title}
                                description={'This will be the description of the article.'}
                                link={item.link}
                                image={'https://cdn-images-1.medium.com/v2/resize:fit:1024/0*5qM8xcEbuRwAV1LO'}
                            />
                        </div>
                    ))}
                </ul>
                <a
                    href={"https://karthikramx.medium.com/"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                >
                    Read More on Medium
                </a>
            </div>
        </section>
    );
}


// const Blog = () => {
//     return (
//         <div>
//             <h1 style={{ marginTop: "100px" }}>Blog</h1>
//             {/* Add your blog content here */}
//         </div>
//     );
// };

