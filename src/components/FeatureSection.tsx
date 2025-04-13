
import { 
  Award, 
  BarChart, 
  BookOpen, 
  BriefcaseBusiness, 
  FileEdit, 
  MessagesSquare, 
  Users 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Skills Assessment",
    description: "Take interactive tests to identify your strongest professional skills and areas for growth.",
    icon: Award,
    color: "bg-purple-100 text-advisor-purple",
  },
  {
    title: "Job Market Analysis",
    description: "Compare your skills with current job market demands and identify high-opportunity areas.",
    icon: BarChart,
    color: "bg-blue-100 text-advisor-blue",
  },
  {
    title: "Career Suggestions",
    description: "Receive AI-powered career path recommendations based on your unique skills and interests.",
    icon: BriefcaseBusiness,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Networking Opportunities",
    description: "Discover events, communities, and connections to help advance your career.",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Resume Builder",
    description: "Get personalized guidance to create an impressive resume that highlights your strengths.",
    icon: FileEdit,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Interview Preparation",
    description: "Practice with AI-powered mock interviews tailored to your target role and industry.",
    icon: MessagesSquare,
    color: "bg-indigo-100 text-indigo-600",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Unlock Your Career Potential</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform offers comprehensive tools to guide your career journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover border border-border/40">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-md ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
