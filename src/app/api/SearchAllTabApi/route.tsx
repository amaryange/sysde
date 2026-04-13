import { SearchAllTabData } from '@/app/ApiData/SerachAllTabApiData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json(SearchAllTabData);
}
