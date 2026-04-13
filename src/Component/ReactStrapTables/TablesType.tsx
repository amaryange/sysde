export interface tablesData {
  id: number;
  first_name: string;
  last_name: string;
  user_name: string;
  role: string;
  country: string;
  name?: string;
}

interface tableDataType {
  items: [] | tablesData[];
}
export interface tableTypes {
  TableSlice: tableDataType;
}
