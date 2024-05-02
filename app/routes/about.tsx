import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About Us" },
    { name: "description", content: "About Page" },
  ];
};

export default function About() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>About Us</h1>
      <p>
        We are a team of developers who love building things with Remix.
      </p>
    </div>
  );
}