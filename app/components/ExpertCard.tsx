import React from 'react';

type ExpertCardProps = {
  name: string;
  title: string;
  country: string;
  categories: string[];
};

export default function ExpertCard({ name, title, country, categories }: ExpertCardProps) {
  return (
    <div className="expert-card">
      <div className="expert-details">
        <p>{name}</p>
        <p>{title}</p>
        <p>{country}</p>
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </div>
  );
}
