import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample card data (you can replace this with API data)
const cards = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive and modern websites.",
    image: "https://source.unsplash.com/400x300/?website,code",
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Learn AI and ML models easily.",
    image: "https://source.unsplash.com/400x300/?ai,technology",
  },
  {
    id: 3,
    title: "Mobile Apps",
    description: "Create Android and iOS applications.",
    image: "https://source.unsplash.com/400x300/?mobile,app",
  },
  {
    id: 4,
    title: "Cloud Computing",
    description: "Deploy apps on the cloud securely.",
    image: "https://source.unsplash.com/400x300/?cloud,server",
  },
  {
    id: 5,
    title: "Cyber Security",
    description: "Protect systems and data.",
    image: "https://source.unsplash.com/400x300/?cyber,security",
  },
];

export default function CardCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Popular Courses
      </h2>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* Left Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg"
        >
          <ChevronLeft />
        </Button>

        {/* Cards Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-12"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="min-w-[260px] sm:min-w-[300px]"
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />

                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.description}
                  </p>

                  <Button className="w-full rounded-xl">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}

/*
  NOTE:
  Make sure you have these installed:

  npm install framer-motion lucide-react
  npx shadcn-ui@latest init
  npx shadcn-ui@latest add card button

  Also add this plugin for hiding scrollbar (optional):
  npm install tailwind-scrollbar-hide
*/
