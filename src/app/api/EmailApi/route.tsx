import { allEmailData } from '@/app/ApiData/EmailApiData';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json(allEmailData);
}
