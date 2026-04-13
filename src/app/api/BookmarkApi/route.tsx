import { BookmarkApiData } from '@/app/ApiData/BookmarkApiData';
import { NextResponse } from 'next/server';

export async function GET(res: Request) {
  return NextResponse.json(BookmarkApiData);
}
