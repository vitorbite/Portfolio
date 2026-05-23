// src/app/contato/page.tsx
'use client'; // Obrigatório para usar Hooks e estados no cliente

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Definindo as regras de validação do formulário com Zod
const contatoSchema = z.object({
  nome: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.email({ message: 'Insira um e-mail válido.' }),
  mensagem: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

// Criando a tipagem automática com base no esquema do Zod
type ContatoFormData = z.infer<typeof contatoSchema>;

export default function ContatoPage() {
  const [status, setStatus] = useState<'ocioso' | 'enviando' | 'sucesso' | 'erro'>('ocioso');

  // 2. Configurando o React Hook Form com o validador do Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
  });

  // 3. Função que roda quando o formulário passa na validação do Zod
  const onSubmit = async (data: ContatoFormData) => {
    setStatus('enviando');

    try {
      const response = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('sucesso');
        reset(); // Limpa os campos do formulário se der certo
      } else {
        setStatus('erro');
      }
    } catch (error) {
      setStatus('erro');
      console.error(error)
    }
  };

  return (
    <div id='Contato'>
      <h1 className="text-2xl font-bold mb-6">Contate-me</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Campo Nome */}
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-medium">Nome</label>
          <input
            id="nome"
            type="text"
            className="p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-indigo-500"
            {...register('nome')}
          />
          {errors.nome && <span className="text-red-400 text-xs">{errors.nome.message}</span>}
        </div>

        {/* Campo E-mail */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">E-mail</label>
          <input
            id="email"
            type="email"
            className="p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-indigo-500"
            {...register('email')}
          />
          {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
        </div>

        {/* Campo Mensagem */}
        <div className="flex flex-col gap-1">
          <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
          <textarea
            id="mensagem"
            rows={5}
            className="p-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-indigo-500 resize-none"
            {...register('mensagem')}
          />
          {errors.mensagem && <span className="text-red-400 text-xs">{errors.mensagem.message}</span>}
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={status === 'enviando'}
          className="mt-2 p-2 bg-indigo-600 hover:bg-indigo-700 transition rounded font-medium disabled:opacity-50"
        >
          {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {/* Mensagens de Feedback */}
        {status === 'sucesso' && (
          <p className="text-green-400 text-sm mt-2 text-center">Mensagem enviada com sucesso!</p>
        )}
        {status === 'erro' && (
          <p className="text-red-400 text-sm mt-2 text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
       )}
      </form>       
      </div>
  );
}