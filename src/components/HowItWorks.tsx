
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BadgeCheck, 
  BrainCircuit, 
  Briefcase, 
  FileText, 
  Lightbulb 
} from 'lucide-react';

const steps = [
  {
    id: "assessment",
    title: "Skills Assessment",
    description: "Complete a comprehensive skills assessment to identify your strengths, weaknesses, and interests.",
    details: "Our AI analyzes your responses to identify technical skills, soft skills, and work preferences to create your unique profile.",
    icon: BrainCircuit,
  },
  {
    id: "analysis",
    title: "Career Analysis",
    description: "Our AI analyzes your skills against current job market data to identify the best career matches.",
    details: "We compare your profile with thousands of career paths, industries, and job roles to find the perfect fit.",
    icon: Lightbulb,
  },
  {
    id: "recommendations",
    title: "Personalized Recommendations",
    description: "Receive tailored career path suggestions and development plans to achieve your goals.",
    details: "Get customized recommendations for career paths, skill development opportunities, and educational resources.",
    icon: Briefcase,
  },
  {
    id: "preparation",
    title: "Interview & Resume Prep",
    description: "Get expert guidance on creating an effective resume and preparing for interviews.",
    details: "Our AI helps you craft a standout resume and prepares you for interviews with industry-specific practice questions.",
    icon: FileText,
  },
  {
    id: "success",
    title: "Career Success",
    description: "Land your dream job and continue growing with ongoing career development support.",
    details: "Continue receiving personalized advice as you progress in your career to ensure long-term success.",
    icon: BadgeCheck,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-advisor-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered career advisor guides you through a simple process to discover your ideal career path
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="assessment" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto w-full mb-8">
              {steps.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="flex flex-col py-3 h-auto data-[state=active]:text-advisor-purple"
                >
                  <step.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm">{step.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {steps.map((step) => (
              <TabsContent key={step.id} value={step.id} className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full bg-advisor-purple/10 text-advisor-purple flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <p className="text-foreground">{step.details}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
