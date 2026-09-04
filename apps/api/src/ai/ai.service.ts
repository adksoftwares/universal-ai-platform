import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  async getResponse(prompt: string, context: any) {
    // This is the AI Abstraction adapter
    // Currently mocked for Phase 2 UI testing.
    return {
      text: "I am a mocked AI response. You said: " + prompt,
      proposals: prompt.toLowerCase().includes('remind') 
        ? [{ type: 'reminder', title: 'Remind me', details: { date: 'tomorrow' } }] 
        : []
    };
  }
}
