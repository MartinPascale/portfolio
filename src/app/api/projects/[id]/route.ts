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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json(
      { message: 'Project ID not provided' },
      { status: 400 },
    );
  }

  const project = projects.find((proj) => proj.id === id);

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }
}
