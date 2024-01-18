import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <Card>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{title} - {country}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Expertise: {categories.join(", ")}</p>
          </CardContent>
          <CardFooter>
            <p>More Details</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
