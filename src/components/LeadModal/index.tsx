import { useState, FormEvent, SetStateAction } from 'react'
import { useContextService } from '../../SeriviceContext';

import { Input } from '../Input';

interface ClassProps {
  visibility: string;
}

export function LeadModal({visibility}:ClassProps) {

  const { createLead, setModalVisible, handleService } = useContextService();


  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const newLead = {
        name,
        email,
        phone,
        comment,
      }

      if (name && email && phone && comment !== '') {
        createLead(newLead);
        console.log('sucesso');
      }

    } catch (error) {
      console.log('algo errado não esta certo')
    }
  }

  return (
    <div className={`animate-appearModal rounded-md fixed top-64 bg-pink-400 shadow-[0_0_0_100vmax_rgba(0,0,0,0.726)] z-40 ${visibility}`}>
    <span onClick={() => setModalVisible(false)}>close</span>

      <form onSubmit={handleSubmit}>

        <Input
          type="text"
          placeholder='Nome completo'
          atualText={(event: { target: { value: SetStateAction<string>; }; }) => setName(event.target.value)}
        />

        <Input
          type="email"
          placeholder='Seu melhor e-mail'
          atualText={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
        />

        <Input
          type="number"
          placeholder='(00) 9 9999-9999'
          atualText={(event: { target: { value: SetStateAction<string>; }; }) => setPhone(event.target.value)}
        />

        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-purple-400 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalher o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
          required
        />

        <button
          type='submit'
          data-value='leads'
          onClick={handleService}
        >enviar</button>
      </form>

    </div>
  )
}