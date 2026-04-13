import { BigImageApiData } from '@/app/ApiData/BigImageApiData';
import { NextResponse } from 'next/server';

export async function GET(res: Request) {
  return NextResponse.json(BigImageApiData);
}
