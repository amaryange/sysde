import { knowledgeData } from '@/app/ApiData/knowledgeBase';
import { NextRequest } from 'next/server';
export async function GET(req: NextRequest) {
  return new Response(JSON.stringify(knowledgeData));
}
