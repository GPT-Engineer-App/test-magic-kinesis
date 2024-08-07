import { useState } from "react";
import { Cat, Heart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const catBreeds = [
  { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
  { name: "Persian", description: "Recognized for their long, luxurious coat and flat face." },
  { name: "Maine Coon", description: "One of the largest domestic cat breeds with a distinctive ruff." },
  { name: "British Shorthair", description: "Famous for their round faces and dense, plush coats." },
  { name: "Scottish Fold", description: "Characterized by their unique folded ears and owl-like appearance." },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-3 text-pink-600" size={48} /> Feline Fascination
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A majestic cat"
            className="mx-auto object-cover w-full h-[500px] rounded-xl shadow-2xl mb-8"
          />
        </motion.div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Enigmatic World of Cats</CardTitle>
            <CardDescription>Discover the charm and mystery of our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-4">
              Cats have captivated humans for millennia with their grace, independence, and affectionate nature. These enigmatic creatures continue to be one of the most popular pets worldwide, cherished for their companionship and unique personalities.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={() => setLikes(likes + 1)}>
              <Heart className="mr-2 h-4 w-4" /> Like ({likes})
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
              <Info className="mr-2 text-blue-500" /> Did You Know?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              Cats spend approximately 70% of their lives sleeping! This means that a 9-year-old cat has been awake for only three years of its life.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
