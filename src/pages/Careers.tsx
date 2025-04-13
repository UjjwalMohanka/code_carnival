
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, Code, Laptop, LineChart, Microscope, Pencil } from "lucide-react";

const careerPaths = [
  {
    title: "Software Development",
    description: "Build applications, websites, and software systems using programming languages and development tools.",
    icon: Code,
    matchPercentage: 92,
    salary: "$110,000 - $150,000",
    growth: "22% (Much faster than average)",
  },
  {
    title: "Data Science",
    description: "Analyze large datasets to extract insights and help organizations make data-driven decisions.",
    icon: LineChart,
    matchPercentage: 85,
    salary: "$100,000 - $140,000",
    growth: "36% (Much faster than average)",
  },
  {
    title: "UX/UI Design",
    description: "Create intuitive, engaging user experiences and interfaces for digital products.",
    icon: Pencil,
    matchPercentage: 78,
    salary: "$85,000 - $130,000",
    growth: "13% (Faster than average)",
  },
  {
    title: "Product Management",
    description: "Lead the development of products from conception to launch, balancing business goals with user needs.",
    icon: BriefcaseBusiness,
    matchPercentage: 75,
    salary: "$100,000 - $160,000",
    growth: "10% (Faster than average)",
  },
  {
    title: "Cybersecurity",
    description: "Protect organizations' systems, networks, and data from digital attacks and security breaches.",
    icon: Laptop,
    matchPercentage: 70,
    salary: "$95,000 - $155,000",
    growth: "33% (Much faster than average)",
  },
  {
    title: "Biotechnology",
    description: "Apply technology to biological systems for applications in medicine, agriculture, and environmental science.",
    icon: Microscope,
    matchPercentage: 65,
    salary: "$90,000 - $130,000",
    growth: "15% (Faster than average)",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Career Paths</h1>
          <p className="text-muted-foreground mb-8">
            Explore potential career paths based on your skills, interests, and market demand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-10 h-10 rounded-md bg-advisor-purple/10 text-advisor-purple flex items-center justify-center">
                      <career.icon className="h-5 w-5" />
                    </div>
                    <div className="bg-advisor-purple text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {career.matchPercentage}% Match
                    </div>
                  </div>
                  <CardTitle>{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80 text-base mb-4">
                    {career.description}
                  </CardDescription>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Avg. Salary:</span>
                      <span className="font-medium">{career.salary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Growth Rate:</span>
                      <span className="font-medium">{career.growth}</span>
                    </div>
                    <div className="pt-4">
                      <a href="#" className="text-advisor-purple hover:underline text-sm font-medium">
                        View Detailed Career Path →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
