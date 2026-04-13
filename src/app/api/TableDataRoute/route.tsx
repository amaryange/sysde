import { NextRequest, NextResponse } from 'next/server';
import { BasicTableData } from '@/app/ApiData/BasicTableData';

export const GET = (req: NextRequest) => {
  return NextResponse.json(BasicTableData);
};
