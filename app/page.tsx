import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExpertCard from "./components/ExpertCard";
import experts from './data/experts_data.json';

export default function Home() {

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

