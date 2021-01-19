import { jsPDF } from "jspdf";
export function imageToPdf(imgData) {
  var doc = new jsPDF();

  doc.addImage(imgData, "JPEG", 15, 40, 180, 160);
  doc.output("datauri");
  doc.save("qr-code.pdf");
}
