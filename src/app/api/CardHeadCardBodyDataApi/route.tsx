import { CardHeadCardBodyApiData } from '@/app/ApiData/CardHeadCardBodyApiData';
import { NextResponse } from 'next/server';

export async function GET(res: Request) {
  return NextResponse.json(CardHeadCardBodyApiData);
}
