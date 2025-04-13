
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-advisor-purple/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Intelligent Virtual</span> Career Advisor
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Use AI to discover your perfect career path, assess your skills, and get personalized guidance for resumes and interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group">
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Career Paths
              </Button>
            </div>
            <div className="pt-4 text-sm text-muted-foreground">
              Join 10,000+ professionals who have already found their ideal career path
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square relative mx-auto max-w-md">
              <img 
                src="/lovable-uploads/fdeadf1e-33f7-4346-bb94-8074c3617302.png" 
                alt="Intelligent Virtual Career Advisor" 
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[240px] animate-pulse">
                <p className="font-medium text-advisor-purple-dark">
                  "CareerAI helped me discover the perfect career path I never knew existed!"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  - Sarah T., Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
