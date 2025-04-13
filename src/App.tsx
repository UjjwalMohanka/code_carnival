
import React from "react";
import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner"; // Removed due to missing module
// import { TooltipProvider } from "@/components/ui/tooltip"; // Removed due to missing module
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkillsAssessment from "./pages/SkillsAssessment";
import Careers from "./pages/Careers";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewPrep from "./pages/InterviewPrep";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills" element={<SkillsAssessment />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/interview" element={<InterviewPrep />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;
