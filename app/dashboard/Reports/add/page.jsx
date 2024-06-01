// import styles from "@/app/ui/dashboard/report/addReport.module.css";

// const AddReportPage = () => {
//   return (
//     <div className={styles.container}>
//       <form className={styles.form}>
//         <input type="text" placeholder="Title" name="title" required />
//         <input type="text" placeholder="Author" name="author" required />
//         <textarea
//           required
//           name="content"
//           id="content"
//           rows="16"
//           placeholder="Content"
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddReportPage;

import styles from "@/app/ui/dashboard/report/addReport.module.css";

const AddReportPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Ingredient ID" name="ingredientId" required />
        <textarea name="description" placeholder="Description" rows="5" required></textarea>
        <input type="number" placeholder="Used Amount (kg)" name="usedAmount" required />
        <input type="number" placeholder="Available Amount (kg)" name="availableAmount" required />
        <input type="date" name="updatedDate" placeholder="Updated Date" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddReportPage;
