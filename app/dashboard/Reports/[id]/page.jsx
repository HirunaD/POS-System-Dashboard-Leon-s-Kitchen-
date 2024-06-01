import { useRouter } from "next/router";
import styles from "@/app/ui/dashboard/report/reportDetail.module.css";

const ReportDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the report details based on ID
  const report = {
    id: 1,
    title: "Monthly Sales Report",
    createdAt: new Date(),
    author: "John Doe",
    content: "Detailed report content here...",
    status: "Completed",
    img: "/noavatar.png"
  };

  return (
    <div className={styles.container}>
      <h1>{report.title}</h1>
      <p><strong>Author:</strong> {report.author}</p>
      <p><strong>Created At:</strong> {report.createdAt.toString().slice(4, 16)}</p>
      <p><strong>Status:</strong> {report.status}</p>
      <div className={styles.content}>
        <p>{report.content}</p>
      </div>
    </div>
  );
};

export default ReportDetailPage;
