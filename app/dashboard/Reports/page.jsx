import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/report/report.module.css";
import Image from "next/image";
import Link from "next/link";

// Dummy data for demonstration purposes
const reports = [
  {
    id: 101,
    description: "Rice",
    usedAmount: 50,
    availableAmount: 150,
    updatedAt: new Date(),
    author: "John Doe",
    status: "Completed",
  },
  {
    id: 102,
    description: "Noodles",
    usedAmount: 30,
    availableAmount: 70,
    updatedAt: new Date(),
    author: "Jane Smith",
    status: "Pending",
  }
];

const count = reports.length; // Assuming count is the length of the reports array

const ReportPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a report..." />
        <Link href="/dashboard/Reports/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Ingredient ID</td>
            <td>Description</td>
            <td>Used Amount (kg)</td>
            <td>Available Amount (kg)</td>
            <td>Updated Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.description}</td>
              <td>{report.usedAmount}</td>
              <td>{report.availableAmount}</td>
              <td>{report.updatedAt.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/Reports/${report.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}

export default ReportPage;
