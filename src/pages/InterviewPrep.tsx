
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessagesSquare, Mic, Video, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const commonQuestions = [
  "Tell me about yourself.",
  "What are your greatest strengths?",
  "What are your greatest weaknesses?",
  "Why do you want to work for our company?",
  "Where do you see yourself in 5 years?",
  "Describe a challenging situation at work and how you handled it.",
  "Why should we hire you?",
  "What are your salary expectations?",
];

const InterviewPrep = () => {
  const [activeMode, setActiveMode] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Interview Preparation</h1>
          <p className="text-muted-foreground mb-8">
            Practice for your upcoming interviews with AI-powered mock interviews and feedback.
          </p>

          {!activeMode ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-hover cursor-pointer" onClick={() => setActiveMode("text")}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-blue-100 text-advisor-blue flex items-center justify-center mb-4">
                    <MessagesSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Text-Based Practice</CardTitle>
                  <CardDescription>
                    Practice interviews by typing responses to interview questions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Receive feedback on your written responses
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Practice at your own pace
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Review and refine answers
                    </li>
                  </ul>
                  <Button className="w-full btn-primary">Start Text Practice</Button>
                </CardContent>
              </Card>

              <Card className="card-hover cursor-pointer" onClick={() => setActiveMode("voice")}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-purple-100 text-advisor-purple flex items-center justify-center mb-4">
                    <Mic className="h-6 w-6" />
                  </div>
                  <CardTitle>Voice Interview</CardTitle>
                  <CardDescription>
                    Practice interviews with voice responses for a more realistic experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Analyze tone, pacing, and clarity
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Practice verbal communication
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Get feedback on speaking style
                    </li>
                  </ul>
                  <Button className="w-full btn-primary">Start Voice Interview</Button>
                </CardContent>
              </Card>

              <Card className="card-hover cursor-pointer" onClick={() => setActiveMode("video")}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <Video className="h-6 w-6" />
                  </div>
                  <CardTitle>Video Interview</CardTitle>
                  <CardDescription>
                    Full video interview simulation with feedback on body language and presentation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-muted-foreground mb-4">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Analyze facial expressions and gestures
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Practice for video interviews
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Complete simulation experience
                    </li>
                  </ul>
                  <Button className="w-full btn-primary">Start Video Interview</Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>
                      {activeMode === "text" && "Text-Based Interview Practice"}
                      {activeMode === "voice" && "Voice Interview Practice"}
                      {activeMode === "video" && "Video Interview Practice"}
                    </CardTitle>
                    <CardDescription>
                      Answer the questions as if you were in a real interview. AI will provide feedback on your responses.
                    </CardDescription>
                  </div>
                  <div className="bg-advisor-purple/10 text-advisor-purple px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    Software Developer Interview
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-medium mb-1">Common Interview Questions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      {commonQuestions.map((question, index) => (
                        <div key={index} className="bg-background p-3 rounded border text-sm hover:border-advisor-purple cursor-pointer transition-colors">
                          {question}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="bg-background p-4 rounded-md border">
                    <p className="text-center py-8 text-muted-foreground">
                      This is a placeholder for the interview practice interface. In a complete implementation, this would contain the interactive components for {activeMode}-based interview practice.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveMode(null)}>
                    Back to Options
                  </Button>
                  <Button className="btn-primary">
                    Start Practice Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InterviewPrep;
