import React from 'react';
// CSSは使わずにTailwind CSSを使うことを推奨するが、今回はファイル構造に合わせてindex.module.cssをインポートする
import styles from './index.module.css';

/**
 * 一覧画面へ戻るボタンコンポーネント
 * @param onClick - クリック時に実行される関数 (通常はルーターで一覧ページに遷移)
 */
export const BackListButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        // スタイルクラスは、例としてCSS Moduleから読み込む形にする
        <button className="btn btn-outline-primary" onClick={onClick}>
            一覧へ戻る
        </button>
    );
};
