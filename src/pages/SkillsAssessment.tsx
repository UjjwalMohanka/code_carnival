
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  experience: z.string().min(1, { message: "Please select your experience level." }),
  skills: z.string().min(3, { message: "Please list at least one skill." }),
  interests: z.string().min(3, { message: "Please share at least one career interest." }),
});

const SkillsAssessment = () => {
  const { toast } = useToast();
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      experience: "entry",
      skills: "",
      interests: "",
    },
  });

  const startAssessment = () => {
    setIsStarted(true);
    toast({
      title: "Assessment Started",
      description: "Your skills assessment has begun!",
    });
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Assessment Submitted",
      description: "We'll analyze your information and provide career recommendations soon!",
    });
    // In a real implementation, this would send the data to a backend service
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-lg font-medium mb-4">Personal Information</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        {...field}
                      >
                        <option value="entry">Entry Level (0-2 years)</option>
                        <option value="mid">Mid Level (3-5 years)</option>
                        <option value="senior">Senior Level (6+ years)</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-lg font-medium mb-4">Skills Assessment</h3>
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Skills</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List your technical and soft skills (e.g., JavaScript, Python, Project Management, Communication)"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Separate different skills with commas
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-lg font-medium mb-4">Career Interests</h3>
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Interests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What industries, roles, or work environments interest you?"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This helps us provide more tailored career recommendations
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Skills Assessment</h1>
          <p className="text-muted-foreground mb-8">
            Discover your strengths and identify areas for growth with our comprehensive skills assessment.
          </p>

          {!isStarted ? (
            <Card>
              <CardHeader>
                <CardTitle>Ready to discover your career potential?</CardTitle>
                <CardDescription>
                  This assessment takes approximately 15-20 minutes to complete and will evaluate both your technical and soft skills.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-advisor-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium">Comprehensive Evaluation</h3>
                      <p className="text-muted-foreground">Assess technical skills, soft skills, and work preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-advisor-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium">AI-Powered Insights</h3>
                      <p className="text-muted-foreground">Get detailed analysis of your strengths and development areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-advisor-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium">Personalized Recommendations</h3>
                      <p className="text-muted-foreground">Receive tailored career suggestions based on your results</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full sm:w-auto btn-primary" onClick={startAssessment}>
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Skills Assessment</CardTitle>
                <CardDescription>
                  Complete all sections to receive your personalized career recommendations.
                </CardDescription>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep} of {totalSteps}
                  </div>
                  <div className="w-full max-w-xs bg-gray-200 rounded-full h-2.5 ml-4">
                    <div 
                      className="bg-advisor-purple h-2.5 rounded-full" 
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {renderStep()}
                    
                    <div className="flex justify-between mt-8">
                      {currentStep > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Previous Step
                        </Button>
                      ) : (
                        <Button type="button" variant="outline" onClick={() => setIsStarted(false)}>
                          Cancel
                        </Button>
                      )}
                      
                      {currentStep < totalSteps ? (
                        <Button type="button" onClick={nextStep}>
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit">
                          Submit Assessment
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsAssessment;
