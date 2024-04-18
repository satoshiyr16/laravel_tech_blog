import React from 'react';
import '@scss/admin/templates/postForm/FormStep3.scss';

const Step3 = ({ postContent, setPostContent, onPrevious, onSubmit }) => {
  return (
    <div className="l-step3_area">
      <div className="l-progressbar_area">
        <ul className="progressbar">
          <li className="complete">タイトル・タグ</li>
          <li className="complete">本文</li>
          <li className="active">確認</li>
          <li>完了</li>
        </ul>
      </div>
      <div className="l-btn_area">
        <a className="prev_btn" onClick={onPrevious}>戻る</a>
        <a className="next_btn" onClick={onSubmit}>送信</a>
      </div>
    </div>
  );
};

export default Step3;
