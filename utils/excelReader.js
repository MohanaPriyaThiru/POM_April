import XLSX from "xlsx";

export function excelData() {
  const path = "test_data/utils.xlsx"; //copy the path of excel file from test data folder
  const workSheet = XLSX.readFile(path); //read the .xlsx file from that path
  const sheetName = workSheet.SheetNames[0]; //sheets in array format
  const sheet1 = workSheet.Sheets[sheetName]; //pass the sheet name into Sheets method
  const data = XLSX.utils.sheet_to_json(sheet1);
  //convert excel sheet to JSON objects using sheet_to_json()
  return data;
}
