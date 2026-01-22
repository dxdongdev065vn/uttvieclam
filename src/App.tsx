import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Candidates from "./pages/Candidates";
import Handbook from "./pages/Handbook";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Community from "./pages/Community";
import Technology from "./pages/Technology";
import CVBuilder from "./pages/CVBuilder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/viec-lam" element={<Jobs />} />
          <Route path="/ung-vien" element={<Candidates />} />
          <Route path="/cam-nang" element={<Handbook />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/ky-nang" element={<Skills />} />
          <Route path="/cong-dong" element={<Community />} />
          <Route path="/cong-nghe" element={<Technology />} />
          <Route path="/tao-cv" element={<CVBuilder />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
