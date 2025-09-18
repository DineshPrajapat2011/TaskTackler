import { NextResponse } from 'next/server'
import { addTask, getAllTasks } from '@/lib/tasksStore'

export async function GET() {
  return NextResponse.json({ tasks: getAllTasks() })
}

export async function POST(req: Request) {
  const body = await req.json()
  const { title, description, budget } = body ?? {}
  if (!title || !description || typeof budget !== 'number') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }
  const task = addTask({ title, description, budget })
  return NextResponse.json({ task }, { status: 201 })
}
