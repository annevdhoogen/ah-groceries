"use client";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import * as styles from "./navigation.css";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export const Navigation = () => {
  const pathname = usePathname();

  const renderItem = (route: string, label: string) => {
    return (
      <li>
        <Link
          className={classnames(
            styles.link,
            (pathname === route || pathname.startsWith(`${route}/`)) &&
              styles.active
          )}
          href={route}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {renderItem(ROUTES.home, "Home")}
        {renderItem(ROUTES.recipes, "Recepten")}
        {renderItem(ROUTES.groceries, "Boodschappen")}
        {renderItem(ROUTES.add, "Toevoegen")}
      </ul>
    </nav>
  );
};
