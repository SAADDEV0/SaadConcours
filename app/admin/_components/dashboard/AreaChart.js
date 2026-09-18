"use client";

import TimeSeriesChart from "./TimeSeriesChart";

// Single-series convenience wrapper over TimeSeriesChart — kept because most
// widgets plot exactly one line and shouldn't have to build a series array to
// say so. All the drawing, axes, tooltip and accessibility live in
// TimeSeriesChart; this only shapes the input.
export default function AreaChart({ points, formatValue, color = "var(--accent)", label = "Valeur", height, emptyMessage }) {
  return (
    <TimeSeriesChart
      series={[{ key: "main", label, color, points }]}
      formatValue={formatValue}
      height={height}
      emptyMessage={emptyMessage}
    />
  );
}
