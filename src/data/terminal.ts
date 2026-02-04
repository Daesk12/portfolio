export interface TerminalStep {
  id: number;
  prompt: string;
  type: 'text' | 'email' | 'message';
  error: string;
}

export const terminalSteps: TerminalStep[] = [
  {
    id: 1,
    prompt: 'Ingresa tu nombre',
    type: 'text',
    error: 'Tu nombre debe de ser de almenos tres caracteres',
  },
  {
    id: 2,
    prompt: 'Ingresa tu correo electrónico:',
    type: 'email',
    error: 'Formato de correo inválido',
  },
  {
    id: 3,
    prompt: 'Por ultimo, ingresa tu mensaje:',
    type: 'message',
    error: 'El mensaje es muy corto',
  },
];
