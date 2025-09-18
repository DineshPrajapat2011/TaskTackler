import { Task } from './types'

const tasks: Task[] = []

export function getAllTasks() {
  return tasks.slice().sort((a, b) => b.createdAt - a.createdAt)
}

export function addTask(data: Omit<Task, 'id' | 'createdAt'> & { budget: number }) {
  const task: Task = {
    id: Math.random().toString(36).substring(2) + Date.now().toString(36),
    createdAt: Date.now(),
    ...data
  }
  tasks.push(task)
  return task
}

export function getTaskById(id: string) {
  return tasks.find((t) => t.id === id)
}
