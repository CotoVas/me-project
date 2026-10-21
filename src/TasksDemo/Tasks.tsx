import { useState } from 'react';
import styled from '@emotion/styled';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: 'Прочитать «1984»', done: true },
  { id: 2, title: 'Написать конспект', done: false },
  { id: 3, title: 'Сдать проект', done: false },
];

const Section = styled.section`
  padding: 24px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #3a3a3a;
  color: #e8e8e8;
  border: 1px solid #555;
  border-radius: 4px;
  cursor: pointer;
  &:hover { background: #4a4a4a; }
`;

const TaskItem = styled.li<{ done: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  color: ${({ done }) => (done ? '#666' : '#e8e8e8')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

export function TasksDemo() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [input, setInput] = useState('');

  const addTask = () => {
    const title = input.trim();
    if (!title) return;
    const newTask: Task = { id: Date.now(), title, done: false };
    setTasks((prev) => [...prev, newTask]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Section>
      <h2>Задачи</h2>
      <Row>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Новая задача..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <Button type="button" onClick={addTask}>Добавить</Button>
      </Row>
      {tasks.length === 0 ? (
        <p>Задач нет</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((t) => (
            <TaskItem key={t.id} done={t.done}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
              />
              <span>{t.title}</span>
              <Button type="button" onClick={() => deleteTask(t.id)}>🗑️</Button>
            </TaskItem>
          ))}
        </ul>
      )}
    </Section>
  );
}