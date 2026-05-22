// src/app/api/contato/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// 1. Inicializa o Resend com sua chave secreta
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Criamos o mesmo esquema do Zod no backend para dupla segurança
const contatoSchema = z.object({
  nome: z.string().min(1),
  email: z.email(),
  mensagem: z.string().min(5),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Valida os dados que chegaram do formulário
    const result = contatoSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const { nome, email, mensagem } = result.data;
    const TargetEmail = process.env.EMAIL;
    if (!TargetEmail) {
      throw new Error('Environment variable EMAIL não está configurada');
    }

    // 3. Envia o e-mail usando o Resend
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // No plano grátis do Resend, use este remetente padrão
      to: TargetEmail, // Substitua pelo seu e-mail pessoal onde quer receber as mensagens
      subject: `💼 Novo contato do Portfólio: ${nome}`,
      html: `
        <h2>Você recebeu uma nova mensagem do seu Portfólio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}