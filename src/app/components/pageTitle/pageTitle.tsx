import * as styles from "./pageTitle.css";
import Link from "next/link";

interface PageTitleProps {
  title: string;
  items?: {
    label: string;
    href: string;
  }[];
}

export const PageTitle = ({ title, items }: PageTitleProps) => {
  return (
    <div className={styles.container}>
      {items &&
        items.map(({ label, href }) => (
          <Link key={href} href={href} className={styles.link}>
            {label}
          </Link>
        ))}
      <h1>{title}</h1>
    </div>
  );
};
