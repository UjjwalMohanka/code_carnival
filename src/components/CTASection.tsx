
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const benefits = [
  "Find your ideal career path based on your skills",
  "Get personalized resume and interview advice",
  "Discover networking opportunities in your field",
  "Stay updated on industry trends and demands",
  "Track your career growth with AI-powered insights"
];

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-advisor-purple to-advisor-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Start Your Career Journey Today</h2>
            <p className="text-lg opacity-90">
              Join thousands of professionals who have discovered their ideal career path with our AI-powered advisor.
            </p>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button size="lg" className="bg-white text-advisor-purple hover:bg-white/90 transition-colors">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-semibold mb-4">What Our Users Say</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="italic mb-3">
                  "CareerAI helped me identify skills I didn't realize were valuable. Within two months, I landed a job in UX design that I love!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-advisor-blue/30 mr-3"></div>
                  <div>
                    <p className="font-medium">Michael T.</p>
                    <p className="text-sm opacity-80">UX Designer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="italic mb-3">
                  "The resume advice was game-changing. I received 3x more interview calls after applying the AI suggestions to my resume."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-advisor-purple/30 mr-3"></div>
                  <div>
                    <p className="font-medium">Jennifer L.</p>
                    <p className="text-sm opacity-80">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
