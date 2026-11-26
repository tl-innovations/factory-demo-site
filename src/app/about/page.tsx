import type { Metadata } from "next";
import Link from "next/link";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Learn about our company, what we do and the people behind the work.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>About us</h1>
          <p>
            We are a small team building thoughtful software for growing
            businesses. This is placeholder copy that will be replaced with the
            real company story.
          </p>
          <p>
            Our mission is to make useful tools simple, reliable and a pleasure
            to use. Placeholder copy: tell visitors what you do and why it
            matters.
          </p>
        </div>
        <div className={styles.ctas}>
          <Link className={styles.secondary} href="/">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
