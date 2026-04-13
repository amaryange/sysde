import { NextResponse } from 'next/server';
import { chatApiData } from '@/app/ApiData/ChatApiData';

export async function GET(req: Request) {
  return NextResponse.json(chatApiData);
}
