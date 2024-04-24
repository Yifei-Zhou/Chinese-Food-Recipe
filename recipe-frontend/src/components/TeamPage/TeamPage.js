import React from 'react';

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Doraemon",
            role: "Babysitting robot cat from the future",
            image: "https://static.vecteezy.com/system/resources/previews/027/806/381/non_2x/doraemon-cute-free-vector.jpg"
        },
        {   
            name: "Nobita",
            role: "Lazy schoolboy and Doraemon's best friend",
            image: "https://www.dora-world.com.tw/dist/images/character_3.png"
        },
        {
            name: "Gian",
            role: "Bully and Nobita's friend?",
            image: "https://scontent.fphl1-1.fna.fbcdn.net/v/t1.6435-9/49623507_304615953495973_512919674686537728_n.png?_nc_cat=103&ccb=1-7&_nc_sid=947906&_nc_ohc=2X6_sPdvRLUAX_nb3x6&_nc_ht=scontent.fphl1-1.fna&oh=00_AfDto70Z6CQiUp7PYdMMb4WIG-eJmMByIwWz7Oidsxql3A&oe=65F0EEA0"
        },
        {
            name: "Suneo",
            role: "Rich kid and Nobita's friend?",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlt_-ysYqyzmu91KDbvO7FRPgZOsQyuEGVZxhJ_mwQyw&s"
        },
    ];
    return (
        <div>
            <h1>Team Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', overflow: 'hidden' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black', width: 'calc(50% - 40px)' }}>
                        <img src={member.image} alt={member.name} style={{ width: '100px', height: '100px' }} />
                        <h2 style={{ whiteSpace: 'nowrap' }}>{member.name}</h2>
                        <h3 style={{ whiteSpace: 'nowrap' }}>{member.role}</h3>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TeamPage;
