"use client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ExpertCard from "./components/ExpertCard";
import useEventStore from "./store/eventStore";

export default function Home() {
  const searchQuery = useEventStore((state) => state.searchQuery);
  const setSearchQuery = useEventStore((state) => state.setSearchQuery);

  const experts = [
    {
      id: 1,
      name: "Ramit Singh Sambiyal",
      title: "Subject Matter Expert",
      profession: "Doctor",
      country: "IN",
      tags: ["Healthcare", "Lifestyle"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/f3173c2504693c76ecbda3d2f3c265e01618327053_l.jpg",
    },
    {
      id: 2,
      name: "Elena Morales",
      title: "Lead Research Scientist",
      profession: "Biologist",
      country: "ES",
      tags: ["Biodiversity", "Conservation"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/748fa4631ce42d5b2960a20b40eb990a1575052988_l.jpg",
    },
    {
      id: 3,
      name: "Michael Connor",
      title: "Senior Technology Advisor",
      profession: "Software Engineer",
      country: "US",
      tags: ["Artificial Intelligence", "Software Development"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/63f0ad05e355de66f0cf3479ac8bd60b1582136038_l.jpg",
    },
    {
      id: 4,
      name: "Aisha Al Mansoori",
      title: "Energy Consultant",
      profession: "Renewable Energy Specialist",
      country: "AE",
      tags: ["Sustainable Energy", "Environmental Policy"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/86518abb5f9bfc33563eb332c4ba871a1543341842_l.png",
    },
    {
      id: 5,
      name: "Yuto Takahashi",
      title: "Financial Analyst",
      profession: "Economist",
      country: "JP",
      tags: ["Global Markets", "Economic Forecasting"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/fb405a960e2abde36766a6faa62bcbbe1658621138_l.jpg",
    },
    {
      id: 6,
      name: "Chloe Dubois",
      title: "Cultural Anthropologist",
      profession: "Anthropologist",
      country: "FR",
      tags: ["Cultural Studies", "Ethnography"],
      image:
        "https://media-speakerfile-pre.s3.amazonaws.com/images_avatars/70eaa5c3517851d655ed6deca1906c9b1607695835_l.jpg",
    },
  ];

  const filteredExperts = experts.filter((expert) => {
    return (
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <div>
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredExperts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
