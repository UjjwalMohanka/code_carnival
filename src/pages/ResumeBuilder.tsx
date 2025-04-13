
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, FilePlus } from "lucide-react";

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("templates");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Resume Builder</h1>
          <p className="text-muted-foreground mb-8">
            Create a professional resume that highlights your skills and experience.
          </p>

          <Tabs 
            defaultValue="templates" 
            className="w-full" 
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-4 w-full max-w-xl mb-8">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="customize">Customize</TabsTrigger>
              <TabsTrigger value="download">Download</TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Choose a Resume Template</CardTitle>
                  <CardDescription>Select a professional template that suits your industry and style.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((template) => (
                      <div key={template} className="border rounded-md overflow-hidden cursor-pointer hover:border-advisor-purple transition-colors">
                        <div className="aspect-[8.5/11] bg-gray-100 flex items-center justify-center">
                          <FilePlus className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="p-3 text-center border-t">
                          <p className="font-medium">Template {template}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button onClick={() => setActiveTab("content")}>Continue</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Add Your Information</CardTitle>
                  <CardDescription>
                    Fill in your details to personalize your resume. AI will suggest improvements.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-muted-foreground">
                    This is a placeholder for the resume content editor interface. In a complete implementation, this would contain forms for personal information, work experience, education, skills, etc.
                  </p>
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setActiveTab("templates")}>
                      Back
                    </Button>
                    <Button onClick={() => setActiveTab("customize")}>Continue</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="customize">
              <Card>
                <CardHeader>
                  <CardTitle>Customize Your Resume</CardTitle>
                  <CardDescription>
                    Adjust colors, fonts, and layout to make your resume stand out.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-muted-foreground">
                    This is a placeholder for the resume customization interface. In a complete implementation, this would contain options for styling and formatting.
                  </p>
                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setActiveTab("content")}>
                      Back
                    </Button>
                    <Button onClick={() => setActiveTab("download")}>Continue</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="download">
              <Card>
                <CardHeader>
                  <CardTitle>Download Your Resume</CardTitle>
                  <CardDescription>
                    Your professional resume is ready to download and share with employers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center py-8">
                    <div className="w-full max-w-md aspect-[8.5/11] border rounded-md overflow-hidden bg-white shadow-lg">
                      <div className="p-8 h-full flex flex-col">
                        <div className="bg-advisor-purple/10 h-20 w-full rounded-md mb-4"></div>
                        <div className="space-y-2">
                          <div className="h-6 w-40 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 w-64 bg-gray-100 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="h-5 w-32 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                          <div className="h-4 w-3/4 bg-gray-100 rounded-sm"></div>
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="h-5 w-32 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                        </div>
                        <div className="mt-auto space-y-2">
                          <div className="h-5 w-32 bg-gray-200 rounded-sm"></div>
                          <div className="h-4 w-full bg-gray-100 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <Button className="bg-advisor-purple text-white space-x-2 flex">
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
