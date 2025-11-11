"use client";

import { useState } from "react";
import styles from "./header.module.css";
import { ChevronDown, LogOut, Upload } from "lucide-react";

export function Header({ onUploadClick }: { onUploadClick: () => void }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="Product Data Repository Logo"
            className={styles.logoImage}
          />
        </div>
        <div className={styles.brand}>
          <h1 className={styles.title}>
            PRODUCT DATA
            <span className={styles.subtitle}>REPOSITORY</span>
          </h1>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userProfileWrapper}>
          <button
            className={styles.userProfile}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className={styles.userAvatar}>👤</div>
            <span>Sonia Gabriel</span>
            <span className={styles.dropdownArrow}>
              <ChevronDown />
            </span>
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <button
                className={styles.dropdownItem}
                onClick={() => {
                  onUploadClick();
                  setIsDropdownOpen(false);
                }}
              >
                <span className={styles.dropdownIcon}>
                  <Upload />
                </span>
                Upload Data
              </button>
              <button className={styles.dropdownItem}>
                <span className={styles.dropdownIcon}>
                  <LogOut />
                </span>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
