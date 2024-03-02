import React from 'react';

const Developer = () => {

    image: "https://bellyfull.net/wp-content/uploads/2016/03/Classic-Margherita-Pizza-blog-2.jpg"

    return (
        <div>
            <h1>Developer</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', overflow: 'hidden' }}>
                <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black', width: 'calc(50% - 40px)' }}>
                    <img src="ProfilePhoto.jpeg" alt="Yifei Zhou" style={{ width: '100px', height: '100px' }} />
                    <h2 style={{ whiteSpace: 'nowrap' }}>Yifei Zhou</h2>
                    <h3 style={{ whiteSpace: 'nowrap' }}>Developer of the Website</h3>
                    <p>MS Computer Science Student at Brandeis University</p>
                </div>
            </div>
        </div>
    );
}

export default Developer;
