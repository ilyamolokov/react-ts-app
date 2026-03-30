import { Toaster } from "@/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router/router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-screen font-inter">
        <Router />
      </div>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
