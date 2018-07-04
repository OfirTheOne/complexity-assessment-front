export interface AnalysisResult {
    result: {
        // id: string;
        samples: {
            inputSize: number,
            iterations: number[]
        };
        resultComplexity: string;
    } | {
        errorMessage: string;
    };
    isError: boolean;
}
