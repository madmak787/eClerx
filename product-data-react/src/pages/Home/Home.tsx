import { useState } from "react";
import styles from "./home.module.css";
import { Header } from "../../components/Header";
import { CustomSelect } from "../../components/CustomSelect";
import { UploadModal } from "../../components/UploadModal";
import { FileDown, MoveRight, Search } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClients, setSelectedClients] = useState<string[]>([]);

  const attributeData = [
    { attribute: "RAM", value: 20, uom: "mm" },
    { attribute: "OD", value: 30, uom: "mm" },
    { attribute: "Material", value: "steel", uom: "-" },
    { attribute: "Category1", value: "power tr", uom: "-" },
    { attribute: "Category2", value: "rolling hardwa", uom: "-" },
    { attribute: "Size", value: "-", uom: "-" },
    { attribute: "Color", value: "-", uom: "-" },
    { attribute: "Category3", value: "-", uom: "-" },
  ];

  const clientOptions = ["Grainger", "Digikey", "Farnell", "Galco", "Newark"];

  return (
    <div className={styles.homeContainer}>
      <Header onUploadClick={() => setIsModalOpen(true)} />
      <div className={styles.filtersSection}>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>CLIENT NAME</label>
          <CustomSelect
            label="CLIENT NAME"
            options={clientOptions}
            selectedOptions={selectedClients}
            onChange={setSelectedClients}
          />
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>MFR</label>
          <input
            type="text"
            className={styles.filterInput}
            value="SKF incorporated"
            readOnly
          />
        </div>
        <div className={styles.filterGroup}>
          <label className={styles.filterLabel}>MPN</label>
          <input
            type="text"
            className={styles.filterInput}
            placeholder="type here..."
          />
        </div>
        <button className={styles.searchButton}>
          <Search />
        </button>
        <button className={styles.downloadButton}>
          <FileDown />
          Download
        </button>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTitle}>SEARCH PRODUCT</div>
          {[1, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className={`${styles.productItemWrapper} ${
                num === 1 ? styles.activeItem : ""
              }`}
            >
              <div className={styles.productItem}>
                <div className={styles.productItemNumber}>
                  {String(num).padStart(2, "0")}
                </div>
                <div className={styles.productItemContent}>
                  <div className={styles.productItemRow}>
                    <span className={styles.productItemLabel}>MFR</span>
                    <div className={styles.productItemValue}>SKF</div>
                  </div>
                  <div className={styles.productItemRow}>
                    <span className={styles.productItemLabel}>MPN</span>
                    <div className={styles.productItemValue}>6203.ee</div>
                  </div>
                  <div className={styles.productItemRow}>
                    <span className={styles.productItemLabel}>CLIENT NAME</span>
                    <div className={styles.productItemValue}>Grainger</div>
                  </div>
                </div>
              </div>
              <div className={styles.productItemLink}>
                <a href="#" className={styles.productItemDetail}>
                  Detail <MoveRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contentArea}>
          <div className={styles.contentHeader}>
            <div className={styles.contentHeaderTitle}>ATTRIBUTE DETAIL</div>
          </div>
          <div className={styles.contentTable}>
            <table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>UOM</th>
                </tr>
              </thead>
              <tbody>
                {attributeData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.attribute}</td>
                    <td>{item.value}</td>
                    <td>{item.uom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <UploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
