// lib/types.ts

// Question Type
export type Question = {
    id: number; // int8に対応するためstringが安全
    title: string;
    content: string;
    // 必要に応じて他のプロパティも追加
};

// APIレスポンス全体もここで定義しておくと完璧
export type ApiResponse<T> = {
    data: T;
    error: string | null;
    status: number;
}