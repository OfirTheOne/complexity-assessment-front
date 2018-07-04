export interface Question {
    name: string;
    id: string;
    description: string;
    exemples: {input: string, output: string}[];
    expectedComplexity: string;
    startingText: string;
    tags: string[];
}
