import { useState } from 'react';
import styled from '@emotion/styled';
import type { BookStatus } from '../types/book';

const FormContainer = styled.form`
  background: #222;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #555;
  max-width: 400px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  margin: 0 0 8px;
  color: #e8e8e8;
  text-align: center;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.9rem;
  color: #aaa;
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  &:focus { outline: 1px solid #deb557; }
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  &:focus { outline: 1px solid #deb557; }
`;

const StyledTextarea = styled.textarea`
  padding: 8px 12px;
  background: #2a2a2a;
  border: 1px solid #555;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  &:focus { outline: 1px solid #deb557; }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background: #deb557;
  color: #222;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #c9a045; }
`;

export function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<BookStatus>('want');
  const [rating, setRating] = useState(0);

  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <Title>Добавить книгу</Title>

      <Field>
        Название:
        <StyledInput 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Например: Утро вторника"
        />
      </Field>

      <Field>
        Автор:
        <StyledInput 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          placeholder="Например: К. Рыбкин"
        />
      </Field>

      <Field>
        Статус:
        <StyledSelect 
          value={status} 
          onChange={(e) => setStatus(e.target.value as BookStatus)}
        >
          <option value="want">Хочу прочитать</option>
          <option value="reading">Читаю</option>
          <option value="done">Прочитано</option>
        </StyledSelect>
      </Field>

      {status === 'done' && (
        <Field>
          Оценка:
          <StyledSelect 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={0}>---</option>
            <option value={1}>⭐(1/5)</option>
            <option value={2}>⭐⭐(2/5)</option>
            <option value={3}>⭐⭐⭐(3/5)</option>
            <option value={4}>⭐⭐⭐⭐(4/5)</option>
            <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
          </StyledSelect>
        </Field>
      )}

      <Field>
        Заметка:
        <StyledTextarea 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          placeholder="Ваши мысли о книге..."
        />
      </Field>
      
      <SubmitButton type="submit">
        Сохранить (на данном этапе не реализовано)
      </SubmitButton>
    </FormContainer>
  );
}