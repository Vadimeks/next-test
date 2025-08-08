// components/Header/Header.tsx

import Link from "next/link";
import { getCategories } from "@/lib/api";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import styles from "./Header.module.css"; // Імпарт CSS-модуля

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className={styles.header}>
      {" "}
      <Link href="/" aria-label="Home">
        NoteHub{" "}
      </Link>{" "}
      <nav aria-label="Main Navigation">
        {" "}
        <ul className={styles.navigation}>
          {" "}
          <li>
            {" "}
            <CategoriesMenu categories={categories} />{" "}
          </li>{" "}
          <li>
            <Link href="/profile">Profile</Link>{" "}
          </li>{" "}
          <li>
            <Link href="/about">About</Link>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
};

export default Header;
