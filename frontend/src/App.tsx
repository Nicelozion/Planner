import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrpcProvider } from "./lib/trpc";
import { AllIdeasPage } from "./pages/AllIdeasPage";
import { ViewIdeaPage } from "./pages/ViewIdeaPage";
import * as routes from "./lib/routes";
import { Layout } from "./components/Layout";
import './styles/global.scss'
import { NewIdeaPage } from "./pages/NewIdeaPage";

export default function App() {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element = {<Layout />}>
          <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage />} />
          <Route path={routes.getViewIdeaRoute({ideaNick: ':ideaNick'})} element={<ViewIdeaPage />} />
          <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}
