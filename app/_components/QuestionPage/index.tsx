import styles from "@/app/questions/[id]/page.module.css";

type questionData = {
    id: number,
    password: string,
    questionDescription:
        {
            title: string,
            content: string,
            answer: string,
        }
}

export default function  QuestionPage(question: questionData)  {

    return (
        <>
            <main>
                <div className={styles.question}>
                    <h1 className="text-2xl font-bold mb-6 bg-gray-200 p-2 rounded">問題を選択してください</h1>
                    <h1>{question.questionDescription.title}</h1>
                    <p>{question.questionDescription.content}</p>
                </div>
            </main>
        </>
    );
}