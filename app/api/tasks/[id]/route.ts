import { NextResponse } from 'next/server'
import { getTaskById } from '@/lib/tasksStore'

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const task = getTaskById(params.id)
  if (!task) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ task })
}
