import { Toaster } from "@/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router/router";
import { NuqsAdapter } from "nuqs/adapters/react";

const queryClient = new QueryClient();

function App() {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <div className="w-full h-screen font-inter">
          <Router />
        </div>
        <Toaster position="top-center" />
      </QueryClientProvider>
    </NuqsAdapter>
  );
}

export default App;
