// lib/types.ts

// Question Type
export type Question = {
    id: number; // int8に対応するためstringが安全
    title: string;
    content: string;
};

export interface QuestionDTO {
    id: number;
    question_text: string;
    correct_answer: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
}

export interface StampDTO {
    id: number;
    userId: string;
    questionsId: number;
    obtained: boolean;
    obtainedAt: string | null; // Date を API で返す場合は string の方が安全
}

export interface User {
    id: string;
    name: string;
    email: string;
}

// APIレスポンス全体もここで定義しておくと完璧
export type ApiResponse<T> = {
    data: T;
    error: string | null;
    status: number;
}