import { stickyData } from '@/app/ApiData/StickyData';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  return new Response(JSON.stringify(stickyData));
}
