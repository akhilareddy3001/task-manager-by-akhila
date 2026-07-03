import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function exportPDF(tasks) {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Task Manager Report", 14, 20);

    const tableData = tasks.map((task) => [
        task.title,
        task.priority,
        task.category,
        task.dueDate,
        task.completed ? "Completed" : "Pending",
    ]);

    autoTable(doc, {
        head: [["Task", "Priority", "Category", "Due Date", "Status"]],
        body: tableData,
        startY: 30,
    });

    doc.save("Task_Report.pdf");
}

export default exportPDF;