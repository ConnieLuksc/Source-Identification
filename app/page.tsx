import Link from 'next/link';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ExpertCard from './components/ExpertCard';


export default function Home() {
    return (
        <div>
            <Header />
            <SearchBar />
            {/* <ExpertCard 
                name="Jane Doe" 
                title="Environmental Scientist" 
                country="USA" 
                categories={['Climate Change', 'Renewable Energy']} 
                /> */}
            
        </div>
    );
}
