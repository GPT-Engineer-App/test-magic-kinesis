import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
  { name: "Persian", description: "Recognized for their long, luxurious coat and flat face.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
  { name: "Maine Coon", description: "One of the largest domestic cat breeds with a distinctive ruff.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
  { name: "British Shorthair", description: "Famous for their round faces and dense, plush coats.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg" },
  { name: "Scottish Fold", description: "Characterized by their unique folded ears and owl-like appearance.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg" },
];

const catFacts = [
  "Cats spend approximately 70% of their lives sleeping!",
  "A group of cats is called a 'clowder'.",
  "Cats have over 20 vocalizations, including the meow!",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats can rotate their ears 180 degrees.",
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8 transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-5xl font-bold flex items-center justify-center text-purple-800 dark:text-purple-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Cat className="mr-3 text-pink-600 dark:text-pink-400" size={48} /> Feline Fascination
          </motion.h1>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>

        <Carousel className="mb-8">
          <CarouselContent>
            {catBreeds.map((breed, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="mx-auto object-cover w-full h-[500px] rounded-xl shadow-2xl"
                  />
                  <p className="text-center mt-2 text-lg font-semibold">{breed.name}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Enigmatic World of Cats</CardTitle>
            <CardDescription>Discover the charm and mystery of our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Cats have captivated humans for millennia with their grace, independence, and affectionate nature. These enigmatic creatures continue to be one of the most popular pets worldwide, cherished for their companionship and unique personalities.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg shadow-inner"
            >
              <h3 className="font-semibold mb-2 flex items-center">
                <Info className="mr-2 text-blue-500" /> Did You Know?
              </h3>
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  {catFacts[currentFactIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => setLikes(likes + 1)} className="group">
              <Heart className="mr-2 h-4 w-4 group-hover:text-red-500 transition-colors duration-300" />
              <span className="mr-2">Like</span>
              <motion.span
                key={likes}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                ({likes})
              </motion.span>
            </Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Feline Features</CardTitle>
                <CardDescription>What makes cats unique?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Retractable claws for hunting and climbing</li>
                  <li>Exceptional balance and agility</li>
                  <li>Acute hearing and night vision</li>
                  <li>Complex vocal communication</li>
                  <li>Independent yet affectionate nature</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle>Diverse Cat Breeds</CardTitle>
                <CardDescription>Explore some popular feline varieties</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catBreeds.map((breed, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-semibold text-lg mb-2">{breed.name}</h3>
                      <p className="text-sm text-gray-600">{breed.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Paw className="mr-2 text-orange-500" /> Cat Care Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Provide fresh water daily",
                "Schedule regular vet check-ups",
                "Offer a balanced diet",
                "Ensure plenty of playtime",
                "Keep the litter box clean"
              ].map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                >
                  <Paw className="mr-2 h-4 w-4 text-orange-500" />
                  {tip}
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
