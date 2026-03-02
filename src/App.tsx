import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CostManagement from "./pages/CostManagement";
import PreConstruction from "./pages/PreConstruction";
import CustomDashboards from "./pages/CustomDashboards";
import SchedulingResourceManagement from "./pages/SchedulingResourceManagement";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cost-management" element={<CostManagement />} />
          <Route path="/pre-construction" element={<PreConstruction />} />
          <Route path="/custom-dashboards" element={<CustomDashboards />} />
          <Route path="/scheduling-resource-management" element={<SchedulingResourceManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
