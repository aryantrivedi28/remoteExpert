const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRz8MblJppS-qPAVRmpVhsxIERS5Gcf5KW0MnkkAvsknqpOSgsT8Z6WBVT7sgx-PFknfUlCVGNwnUsc/pub?output=csv";

export async function GET() {
  const response = await fetch(SHEET_URL);
  const csv = await response.text();

  const lines = csv.trim().split("\n");

  const headers = lines[0]
    .split(",")
    .map((h) => h.trim());

  const data = lines.slice(1).map((line) => {
    const values = line.split(",");

    return headers.reduce(
      (obj, header, index) => {
        obj[header] = values[index]?.trim() || "";
        return obj;
      },
      {} as Record<string, string>
    );
  });

  return Response.json(data);
}