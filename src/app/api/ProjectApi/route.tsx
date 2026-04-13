import { ProjectData } from '@/app/ApiData/ProjectData';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json(ProjectData);
}
