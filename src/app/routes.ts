import { createBrowserRouter } from "react-router";

import { Root } from "./components/Root";
import { HomePage } from "./components/HomePage";
import { AirBitApisPage } from "./components/AirBitApisPage";
import { AirBitEipsPage } from "./components/AirBitEipsPage";
import { AirBitAIGatewayPage } from "./components/AirBitAIGatewayPage";
import { AirBitMCPGatewayPage } from "./components/AirBitMCPGatewayPage";
import { AirBitGuardrailsPage } from "./components/AirBitGuardrailsPage";
import { AirBitAIOPage } from "./components/AirBitAIOPage";
import { AirBitPortalPage } from "./components/AirBitPortalPage";
import { ContactPage } from "./components/ContactPage";
import { CompanyPage } from "./components/CompanyPage";
import { PartnerPage } from "./components/PartnerPage";
import { PricingPage } from "./components/PricingPage";
import { SolutionFashionPage } from "./components/SolutionFashionPage";
import { SolutionFoodPage } from "./components/SolutionFoodPage";
import { SolutionEducationPage } from "./components/SolutionEducationPage";
import { SolutionManufacturingPage } from "./components/SolutionManufacturingPage";
import { SolutionPublicPage } from "./components/SolutionPublicPage";
import { NotFoundPage } from "./components/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "airbit-apis", Component: AirBitApisPage },
      { path: "airbit-eips", Component: AirBitEipsPage },
      { path: "airbit-ai-gateway", Component: AirBitAIGatewayPage },
      { path: "airbit-mcp-gateway", Component: AirBitMCPGatewayPage },
      { path: "airbit-guardrails", Component: AirBitGuardrailsPage },
      { path: "airbit-aio", Component: AirBitAIOPage },
      { path: "airbit-portal", Component: AirBitPortalPage },
      { path: "contact", Component: ContactPage },
      { path: "company", Component: CompanyPage },
      { path: "partner", Component: PartnerPage },
      { path: "pricing", Component: PricingPage },
      { path: "solution-fashion", Component: SolutionFashionPage },
      { path: "solution-food", Component: SolutionFoodPage },
      { path: "solution-education", Component: SolutionEducationPage },
      { path: "solution-manufacturing", Component: SolutionManufacturingPage },
      { path: "solution-public", Component: SolutionPublicPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
