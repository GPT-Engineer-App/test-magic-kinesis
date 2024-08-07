import { useState, useEffect } from "react";
import { Cat, Heart, Info, Paw, Moon, Sun, Star, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg", popularity: 85 },
  { name: "Persian", description: "Recognized for their long, luxurious coat and flat face.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg", popularity: 90 },
  { name: "Maine Coon", description: "One of the largest domestic cat breeds with a distinctive ruff.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG", popularity: 88 },
  { name: "British Shorthair", description: "Famous for their round faces and dense, plush coats.", image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Britishblue.jpg", popularity: 82 },
  { name: "Scottish Fold", description: "Characterized by their unique folded ears and owl-like appearance.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg", popularity: 80 },
];

const catFacts = [
  { fact: "Cats spend approximately 70% of their lives sleeping!", icon: "🛌" },
  { fact: "A group of cats is called a 'clowder'.", icon: "👥" },
  { fact: "Cats have over 20 vocalizations, including the meow!", icon: "🗣️" },
  { fact: "A cat's nose print is unique, like a human's fingerprint.", icon: "👃" },
  { fact: "Cats can rotate their ears 180 degrees.", icon: "👂" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [isSparkleVisible, setIsSparkleVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % catFacts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      setIsSparkleVisible(true);
      setTimeout(() => setIsSparkleVisible(false), 1000);
    }, 5000);
    return () => clearInterval(sparkleInterval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8 transition-colors duration-500`}>
      <ScrollArea className="h-[100vh] w-full pr-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8 sticky top-0 z-10 bg-opacity-80 backdrop-blur-md p-4 rounded-lg">
            <motion.h1 
              className="text-6xl font-bold flex items-center justify-center text-purple-800 dark:text-purple-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Cat className="mr-3 text-pink-600 dark:text-pink-400" size={56} /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-300 dark:to-pink-300">
                Feline Fascination
              </span>
              <AnimatePresence>
                {isSparkleVisible && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    className="ml-2"
                  >
                    <Sparkles className="text-yellow-400" size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.h1>
            <Button variant="outline" size="icon" onClick={toggleDarkMode} className="rounded-full p-2">
              {isDarkMode ? <Sun className="h-[1.5rem] w-[1.5rem]" /> : <Moon className="h-[1.5rem] w-[1.5rem]" />}
            </Button>
          </div>

          <Carousel className="mb-12">
            <CarouselContent>
              {catBreeds.map((breed, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                  >
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="mx-auto object-cover w-full h-[600px] rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-white mb-2">{breed.name}</h3>
                      <p className="text-lg text-gray-200">{breed.description}</p>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <Card className="mb-12 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl">The Enigmatic World of Cats</CardTitle>
              <CardDescription className="text-lg">Uncover the charm and mystery of our feline companions</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Cats have captivated humans for millennia with their grace, independence, and affectionate nature. These enigmatic creatures continue to be one of the most popular pets worldwide, cherished for their companionship and unique personalities.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-100 dark:bg-purple-900 p-6 rounded-lg shadow-inner relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <h3 className="font-semibold text-2xl mb-4 flex items-center">
                  <Star className="mr-3 text-yellow-500" size={28} /> Fascinating Feline Fact
                </h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFactIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-start"
                  >
                    <span className="text-4xl mr-4">{catFacts[currentFactIndex].icon}</span>
                    <p className="text-xl text-gray-700 dark:text-gray-300">
                      {catFacts[currentFactIndex].fact}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </CardContent>
            <CardFooter className="justify-between items-center">
              <Button variant="outline" onClick={() => setLikes(likes + 1)} className="group text-lg px-6 py-3 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-red-100 dark:bg-red-900"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: likes > 0 ? 1 : 0, opacity: likes > 0 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Heart className="mr-2 h-6 w-6 group-hover:text-red-500 transition-colors duration-300 relative z-10" />
                <span className="mr-2 relative z-10">Like</span>
                <motion.span
                  key={likes}
                  initial={{ scale: 1.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  ({likes})
                </motion.span>
              </Button>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Fact {currentFactIndex + 1} of {catFacts.length}
              </Badge>
            </CardFooter>
          </Card>

          <Tabs defaultValue="characteristics" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 text-lg">
              <TabsTrigger value="characteristics">Feline Features</TabsTrigger>
              <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            </TabsList>
            <TabsContent value="characteristics">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Unique Feline Characteristics</CardTitle>
                  <CardDescription className="text-lg">Discover what makes cats truly special</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    {[
                      { feature: "Retractable claws for hunting and climbing", icon: "🐾" },
                      { feature: "Exceptional balance and agility", icon: "🤸" },
                      { feature: "Acute hearing and night vision", icon: "👂👁️" },
                      { feature: "Complex vocal communication", icon: "🗣️" },
                      { feature: "Independent yet affectionate nature", icon: "🐱❤️" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
                      >
                        <span className="text-2xl mr-4">{item.icon}</span>
                        {item.feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Diverse Cat Breeds</CardTitle>
                  <CardDescription className="text-lg">Explore the fascinating world of feline varieties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {catBreeds.map((breed, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedBreed(breed)}
                      >
                        <h3 className="font-semibold text-xl mb-3 text-purple-700 dark:text-purple-300">{breed.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{breed.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">Popularity</span>
                          <Progress value={breed.popularity} className="w-2/3" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        {selectedBreed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedBreed(null)}
          >
            <Card className="w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle className="text-3xl">{selectedBreed.name}</CardTitle>
                <CardDescription className="text-lg">{selectedBreed.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <Progress value={selectedBreed.popularity} className="mb-2" />
                <p className="text-right text-sm text-gray-500">Popularity: {selectedBreed.popularity}%</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedBreed(null)}>Close</Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Paw className="mr-3 text-orange-500" size={28} /> Essential Cat Care Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { tip: "Provide fresh water daily", icon: "💧", details: "Clean, fresh water is crucial for your cat's health. Change it at least once a day." },
                  { tip: "Schedule regular vet check-ups", icon: "🩺", details: "Annual check-ups help catch health issues early. Don't skip vaccinations!" },
                  { tip: "Offer a balanced diet", icon: "🍽️", details: "Choose high-quality cat food appropriate for your cat's age and health needs." },
                  { tip: "Ensure plenty of playtime", icon: "🧶", details: "Regular play keeps your cat physically and mentally stimulated." },
                  { tip: "Keep the litter box clean", icon: "🧹", details: "Scoop daily and deep clean weekly for your cat's comfort and health." }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-lg text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-300"
                  >
                    <span className="text-2xl mr-4">{item.icon}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">{item.tip}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.details}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Index;
