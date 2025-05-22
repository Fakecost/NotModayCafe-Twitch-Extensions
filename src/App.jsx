import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Current } from "./screens/Current";
import { JoinFrame } from "./screens/JoinFrame";
import { Main } from "./screens/Main";
import { OrderFrame } from "./screens/OrderFrame";
import { QueueFrame } from "./screens/QueueFrame";
import { ReviewFrame } from "./screens/ReviewFrame";
import { Slide } from "./screens/Slide";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Main />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/review-frame",
    element: <ReviewFrame />,
  },
  {
    path: "/queue-frame",
    element: <QueueFrame />,
  },
  {
    path: "/order-frame",
    element: <OrderFrame />,
  },
  {
    path: "/join-frame",
    element: <JoinFrame />,
  },
  {
    path: "/current",
    element: <Current />,
  },
  {
    path: "/slide-16u589-1",
    element: <Slide />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
