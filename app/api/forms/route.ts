import Papa from "papaparse";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRz8MblJppS-qPAVRmpVhsxIERS5Gcf5KW0MnkkAvsknqpOSgsT8Z6WBVT7sgx-PFknfUlCVGNwnUsc/pub?output=csv";

export async function GET() {
  const response = await fetch(SHEET_URL);

  const csv = await response.text();

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return Response.json(parsed.data);
}