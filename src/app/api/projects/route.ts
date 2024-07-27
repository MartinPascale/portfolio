import { NextRequest, NextResponse } from 'next/server';

type Project = {
  id: string;
  name: string;
  description: string;
};

const projects: Project[] = [
  { id: '1', name: 'Project One', description: 'Description for project one.' },
  { id: '2', name: 'Project Two', description: 'Description for project two.' },
  // Add more projects as needed
];

export async function GET(request: NextRequest) {
  return NextResponse.json(projects);
}
