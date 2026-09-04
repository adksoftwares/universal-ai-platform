export declare class AiService {
    getResponse(prompt: string, context: any): Promise<{
        text: string;
        proposals: {
            type: string;
            title: string;
            details: {
                date: string;
            };
        }[];
    }>;
}
