import { GoogleChartApiData } from '@/app/ApiData/GoogleChartData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json(GoogleChartApiData);
}
