import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import Homepage from "pages/homepage-motion-driven-portfolio";
import AboutInteractiveJourney from "pages/about-interactive-journey";
import ExperienceTimeline from "pages/experience-timeline";
import ContactCollaborationHub from "pages/contact-collaboration-hub";
import PortfolioProjectUniverse from "pages/portfolio-project-universe";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage-motion-driven-portfolio" element={<Homepage />} />
          <Route path="/about-interactive-journey" element={<AboutInteractiveJourney />} />
          <Route path="/experience-timeline" element={<ExperienceTimeline />} />
          <Route path="/contact-collaboration-hub" element={<ContactCollaborationHub />} />
          <Route path="/portfolio-project-universe" element={<PortfolioProjectUniverse />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;