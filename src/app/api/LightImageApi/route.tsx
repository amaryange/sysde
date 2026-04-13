import { LightImageApiData } from '@/app/ApiData/LightImageApiData';
import { NextResponse } from 'next/server';

export async function GET(res: Request) {
  return NextResponse.json(LightImageApiData);
}
