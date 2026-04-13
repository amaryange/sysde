import { ToDoApiData } from '@/app/ApiData/ToDoApiData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json(ToDoApiData);
}
