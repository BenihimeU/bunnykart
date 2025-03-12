import Home from "../home";
import PrivacyPolicy from "../privacy-policy";
import RequestDeleteAccount from "../request-delete-account";
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
    path: 'request-delete-account',
    element: <RequestDeleteAccount />
  },
  {
    path: `*`,
    element: <Home />,
  },
];