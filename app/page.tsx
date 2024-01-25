import Link from 'next/link';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ExpertCard from './components/ExpertCard';


export default function Home() {
    const experts = [
        { name: 'Ramit Singh Sambiyal', title: 'Subject Matter Expert', profession: 'Doctor', country: 'IN', tags: ['Healthcare', 'Lifestyle'] , image: 'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/f3173c2504693c76ecbda3d2f3c265e01618327053_l.jpg'},
        { name: 'Elena Morales', title: 'Lead Research Scientist', profession: 'Biologist', country: 'ES', tags: ['Biodiversity', 'Conservation'], image:'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/748fa4631ce42d5b2960a20b40eb990a1575052988_l.jpg' },
        { name: 'Michael Connor', title: 'Senior Technology Advisor', profession: 'Software Engineer', country: 'US', tags: ['Artificial Intelligence', 'Software Development'] , image:'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/63f0ad05e355de66f0cf3479ac8bd60b1582136038_l.jpg'},
        { name: 'Aisha Al Mansoori', title: 'Energy Consultant', profession: 'Renewable Energy Specialist', country: 'AE', tags: ['Sustainable Energy', 'Environmental Policy'] , image:'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/86518abb5f9bfc33563eb332c4ba871a1543341842_l.png'},
        { name: 'Yuto Takahashi', title: 'Financial Analyst', profession: 'Economist', country: 'JP', tags: ['Global Markets', 'Economic Forecasting'] , image:'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/fb405a960e2abde36766a6faa62bcbbe1658621138_l.jpg'},
        { name: 'Chloe Dubois', title: 'Cultural Anthropologist', profession: 'Anthropologist', country: 'FR', tags: ['Cultural Studies', 'Ethnography'], image:'https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/70eaa5c3517851d655ed6deca1906c9b1607695835_l.jpg' },
      ];
      
    return (
        <div>
            <Header />
            <SearchBar />
            <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experts.map((expert, index) => (
                    <ExpertCard key={index} {...expert} />
                ))}
            </div>
        </div>
            
        </div>
    );
}
