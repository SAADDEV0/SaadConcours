// Stamps a faint diagonal "SaadConcours" watermark across every page of a
// jsPDF document. Called once, right before doc.save(), after all content
// (and page breaks) has already been added — jsPDF only exposes the final
// page count once the document is fully built.
export function addWatermark(doc) {
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity: 0.08 }));
    doc.setFont(undefined, "bold");
    doc.setFontSize(46);
    doc.setTextColor(79, 140, 255);
    doc.text("SaadConcours", pageW / 2, pageH / 2, { align: "center", angle: 35 });
    doc.restoreGraphicsState();
  }
}
