import Card from './Card'

const Board = () => {

    const cardData = [
        {name: 'The PartyRock Generative AI Hackathon by AWS', deadline: 'Mar 11, 2024', link:'https://partyrock.aws/', imageSrc:'/src/assets/PartyRock_Hackathon.png', description:'PartyRock is a space where you can build AI-generated apps in a playground powered by Amazon Bedrock. It’s a fast and fun way to learn about generative AI.'},
        {name: 'Zero to One Hackathon by Convex', deadline: 'Mar 18, 2024', link:'https://convexhackathon.devpost.com/', imageSrc:'/src/assets/Convex.png', description:'Build fullstack apps at light speed with Convex.'},
        {name: 'LIVE AI 1 Ideathon', deadline: 'Mar 3, 2024', link:'https://live-ai-1-ideathon.devpost.com/', imageSrc:'/src/assets/LiveAI1.png', description:'The LIVE AI Ideathon is an online pitch competition that is jointly organized and operated by ICP.HUB North America and Tech Tree Root.'},
        {name: 'CSTA 2024 Annual Conference', deadline: 'Jul 16-19, 2024', link:'https://conference.csteachers.org/event/f0c0e0a8-5ac1-4333-90c9-2eab9723af76/summary', imageSrc:'/src/assets/CSTA2024.png', description:'onnect with the world’s largest CS department at the CSTA 2024 Annual Conference, set for July 16–19, 2024, in Las Vegas! '},
        {name: 'HenHacks', deadline: 'Mar 2-3, 2024', link:'https://www.henhackshackathon.com/', imageSrc:'/src/assets/HenHacks.png', description:'HenHacks is a beginner-friendly hackathon hosted on the University of Delaware\'s campus for all college students of any major. Our goal is to help develop and enhance students\' technical skills to help them become competitive applicants in technology-related careers. '},
        {name: 'Global Hack Week: Games', deadline: 'Mar 8, 2024', link:'https://events.mlh.io/events/10848', imageSrc:'/src/assets/GlobalHackWeek.jpg', description:'Spend a week hacking with the MLH community at Global Hack Week: Game Week! Global Hack Week takes place throughout the year to give you a chance to complete technical challenges, network with the community, enjoy fun live sessions, build technical projects, and make new memories.'},
        {name: 'All In Open Source Hackathon', deadline: 'Mar 9-10, 2024', link:'https://allinopensource.org/', imageSrc:'/src/assets/AllIn.png', description:'MLH is teaming up with All In Open Source to run a hackathon for all student hackers - regardless of where you are in the world. All In is a community dedicated to advancing diversity, equity, and inclusion within open source.'},
        {name: 'HackPrinceton', deadline: 'Mar 29-31, 2024', link:'https://www.hackprinceton.com/', imageSrc:'/src/assets/HackPrinceton.png', description:'At HackPrinceton, you\'ll meet fellow hackers from around the world, learn new skills, and work alongside seasoned mentors. We\'ll have free workshops, lecture series, mentorship, prizes, games, and more.'},
        {name: 'SF Hacks 2024', deadline: 'Apr 5-7, 2024', link:'https://sfhacks.io/', imageSrc:'/src/assets/SFHacks.png', description:'Our organization\'s purpose is to plan and host California\'s most talented collegiate hackers, designers, and developers, to a 3 day hackathon. Join us next spring to kickoff SF Hacks 2024!'},
        {name: 'Hack Kosice 2024', deadline: 'Apr 6-7, 2024', link:'https://hackkosice.com/2024/', imageSrc:'/src/assets/HackKosice.png', description:'Challenge yourself, impress sponsors, gain CV-worthy experience, and learn beyond school. We seek innovative, confident individuals in programming, data analysis, design, entrepreneurship, and leadership.'},
        {name: 'Web3Apps', deadline: 'Apr 19-21, 2024', link:'https://events.mlh.io/events/11082', imageSrc:'/src/assets/Web3Apps.png', description:'Web3, DAOs, cryptos and Dapps - have you dived in yet? Explore and experiment with your fellow hackers this weekend at Web3Apps! We will be running a fun, activity-filled, open-themed digital hackathon.'},
        {name: 'HackUPC', deadline: 'May 3-5, 2024', link:'https://www.hackupc.com/', imageSrc:'/src/assets/HackUPC.png', description:'HackUPC is the first student hackathon in Spain. Once a year, we aim to provide participants of all experience levels from all around the world with a space where they can improve and learn new skills, meet amazing people, and have an overall great experience!'},

    ]

    return (
           <div className="card-container">
               {cardData.map((card, index) => (
                    <Card key={index}
                    name={card.name}
                    deadline={card.deadline}
                    link={card.link}
                    imageSrc={card.imageSrc}
                    description={card.description}
                    />
               ))}
            </div>                                                                                                                                                                                                                                                          
    );
}

export default Board