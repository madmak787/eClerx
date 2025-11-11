"use client";

import { useState } from "react";
import styles from "./custom-select.module.css";
import { ChevronDown, RefreshCw } from "lucide-react";

interface CustomSelectProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export function CustomSelect({
  label,
  options,
  selectedOptions,
  onChange,
  placeholder = "Select here",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className={styles.selectWrapper}>
      <button
        className={styles.selectButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selectButtonText}>
          {selectedOptions.length > 0 ? selectedOptions[0] : placeholder}
        </span>
        <span className={styles.selectArrow}>
          <ChevronDown />
        </span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <span>{placeholder}</span>
            <button className={styles.refreshBtn} onClick={() => onChange([])}>
              <RefreshCw />
            </button>
          </div>
          <div className={styles.dropdownOptions}>
            {options.map((option) => (
              <label key={option} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => toggleOption(option)}
                  className={styles.checkbox}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
