import { taskApiData } from '@/app/ApiData/TaskApiData';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json(taskApiData);
}
