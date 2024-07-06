"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export const AnimationLink = ({ children, href, ...props }) => {
  const { push } = useRouter();

  const handleTransitionPage = async (e) => {
    e.preventDefault();

    const Dashboardbody = document.querySelector("body");

    Dashboardbody.classList.add(".dashboard-transition");
    await sleep(500);

    push(href);

    await sleep(500);

    Dashboardbody.classList.remove(".dashboard-transition");
  };

  return (
    <Link onClick={handleTransitionPage} href={href} {...props}>
      {children}
    </Link>
  );
};
