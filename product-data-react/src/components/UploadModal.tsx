"use client";

import { useState } from "react";
import styles from "./upload-modal.module.css";
import { CircleQuestionMark, Upload, X } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 10;

  const mockFiles = [
    {
      id: 1,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 2,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 3,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "Completed",
    },
    {
      id: 4,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 5,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 6,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 7,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "Completed",
    },
    {
      id: 8,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 9,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
    {
      id: 10,
      name: "Client Cost Data - Singapore.xlsx",
      type: "Cost Data",
      date: "18/07/2025 at 06:31",
      user: "Emily Smith",
      status: "In Queue",
    },
  ];

  const totalPages = Math.ceil(mockFiles.length / filesPerPage);
  const startIdx = (currentPage - 1) * filesPerPage;
  const endIdx = startIdx + filesPerPage;
  const currentFiles = mockFiles.slice(startIdx, endIdx);

  // if (!isOpen) return null;
  return (
    <>
      <div
        className={`${styles.overlay} ${
          isOpen ? styles.overlayActive : styles.overlayInActive
        }`}
        onClick={onClose}
      />
      <div
        className={`${styles.modalWrapper} ${
          isOpen ? styles.modalWrapperActive : ""
        }`}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <div>
              <span className={styles.modalTitle}>Upload Data</span>
              <span className={styles.modalTitleHelp}>
                <CircleQuestionMark />
              </span>
            </div>
            <button className={styles.modalCloseBtn} onClick={onClose}>
              <X />
            </button>
          </div>

          <div className={styles.modalBody}>
            <div className={styles.uploadSection}>
              <div className={styles.uploadSectionLabel}>
                <span>File to upload</span>
                <a className={styles.downloadTemplateLink}>Download Template</a>
              </div>

              <div className={styles.uploadDropzone}>
                <div className={styles.uploadIcon}>
                  <Upload />
                </div>
                <div className={styles.uploadText}>
                  Drag & Drop or{" "}
                  <span className={styles.uploadTextHighlight}>
                    Choose File
                  </span>{" "}
                  to upload
                </div>
              </div>
            </div>

            <div className={styles.filesTableSection}>
              <div className={styles.filesTableHeader}>
                <span className={styles.filesTableTitle}>
                  Showing {currentFiles.length} Of 11,234 results
                </span>
                <div className={styles.paginationControls}>
                  <button
                    className={styles.paginationBtn}
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    ◀ ◀
                  </button>
                  <button
                    className={styles.paginationBtn}
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    ◀
                  </button>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`${styles.paginationBtn} ${
                        currentPage === i + 1 ? styles.paginationBtnActive : ""
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button className={styles.paginationBtn} disabled>
                    ...
                  </button>
                  <button
                    className={styles.paginationBtn}
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    ▶
                  </button>
                  <button
                    className={styles.paginationBtn}
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    ▶ ▶
                  </button>
                </div>
              </div>

              <input
                type="text"
                placeholder="Search"
                className={styles.searchBox}
              />

              <div className={styles.tableWrapper}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        File Name <span className={styles.sortIcon}>⇅</span>
                      </th>
                      <th>
                        File Type <span className={styles.sortIcon}>⇅</span>
                      </th>
                      <th>
                        Uploaded On <span className={styles.sortIcon}>⇅</span>
                      </th>
                      <th>
                        User Name <span className={styles.sortIcon}>⇅</span>
                      </th>
                      <th>
                        Status <span className={styles.sortIcon}>⇅</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentFiles.map((file) => (
                      <tr key={file.id}>
                        <td>
                          <span className={styles.fileIcon}>📄</span>
                          {file.name}
                        </td>
                        <td>{file.type}</td>
                        <td>{file.date}</td>
                        <td>{file.user}</td>
                        <td>
                          <span
                            className={`${styles.statusLabel} ${
                              file.status === "In Queue"
                                ? styles.statusInQueue
                                : styles.statusCompleted
                            }`}
                          >
                            ● {file.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
