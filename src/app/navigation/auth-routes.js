import Home from "../home";
import PrivacyPolicy from "../privacy-policy";
import TermsAndConditions from "../terms-and-conditions";

export const authRoutes = [
  {
    path: ``,
    element: <Home />,
  },
  {
    path: `privacy`,
    element: <PrivacyPolicy />,
  },
  {
    path: `terms`,
    element: <TermsAndConditions />,
  },
  {
    path: `*`,
    element: <Home />,
  },
];