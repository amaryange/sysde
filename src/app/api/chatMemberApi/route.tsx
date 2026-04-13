import { ChatMemberApiData } from '@/app/ApiData/ChatMemberApiData';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json(ChatMemberApiData);
}
