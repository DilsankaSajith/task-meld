import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Showcase from "./pages/Showcase";
import Create from "./pages/Create";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "../styles/GlobalStyles";
import Home from "./pages/Home";
import Details from "./pages/Details";

// Testing Git

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="showcase" />} />
              <Route path="create" element={<Create />} />
              <Route path="showcase" element={<Showcase />} />
              <Route path="showcase/:assignmentId" element={<Details />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
