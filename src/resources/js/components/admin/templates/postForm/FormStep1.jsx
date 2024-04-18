import React from 'react';
import '@scss/admin/templates/postForm/FormStep1.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Step1 = ({ title, setTitle, tags, setTags, onNext }) => {

  return (
    <div className="l-step1_area">
      <div className="l-progressbar_area">
        <ul className="progressbar">
          <li className="active">タイトル・タグ</li>
          <li>本文</li>
          <li>確認</li>
          <li>完了</li>
        </ul>
      </div>
      <div className="l-btn_area">
        <a onClick={onNext} className="next_btn">次へ</a>
      </div>
      <div className="l-form_area">
        <div className="input_group">
          <label htmlFor="title">タイトルを入力してください</label>
          <input
            type="text"
            id="title"
            className="input_title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="tags">タグを追加してください (カンマ区切り)</label>
          <input
            type="text"
            id="tags"
            className="input_tag"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="タグ（カンマ区切り）"
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
