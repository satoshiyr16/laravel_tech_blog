import React, { useCallback, useState, useMemo, useRef } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { marked } from 'marked';
import DOMPurify from "dompurify";
import '@scss/admin/templates/postForm/FormStep2.scss';

DOMPurify.setConfig({
  ALLOW_UNKNOWN_PROTOCOLS: true
});

const Step2 = ({ postContent, setPostContent, setImageFile, onPrevious, onNext }) => {
  marked.setOptions({
    gfm: true,
    sanitizer: (html) => DOMPurify.sanitize(html)
  });
  const [markdownValue, setMarkdownValue] = useState(postContent);
  const simpleMdeInstance = useRef(null);

  DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    if (node.tagName === 'IMG' && node.getAttribute('src')) {
      const src = node.getAttribute('src');
      if (src.startsWith('blob:')) {
        return;
      } else {
        node.removeAttribute('src');
      }
    }
  });

  const editorOptions = useMemo(() => ({
    spellChecker: false,
    toolbar: [
      "bold",
      "italic",
      "strikethrough",
      "|",
      {
        name: "insertBr",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection("<br>");
        },
        className: "fa fa-level-down",
        title: "Insert <br>"
      },
      {
        name: "insertSpan",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection('<span style="color: red;"></span>');
          const cursorPos = cm.getCursor();
          cursorPos.ch -= 7;
          cm.setCursor(cursorPos);
        },
        className: "fa fa-paint-brush",
        title: "Insert <span> with color"
      },
      {
        name: "underline",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection('<u></u>');
        },
        className: "fa fa-underline",
        title: "Underline"
      },
      "|",
      "heading",
      "heading-smaller",
      "heading-bigger",
      "|",
      {
        name: "alignLeft",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection('<div style="text-align: left;"></div>\n');
        },
        className: "fa fa-align-left",
        title: "Align Left"
      },
      {
        name: "alignCenter",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection('<div style="text-align: center;"></div>\n');
        },
        className: "fa fa-align-center",
        title: "Align Center"
      },
      {
        name: "alignRight",
        action: (editor) => {
          const cm = editor.codemirror;
          cm.replaceSelection('<div style="text-align: right;"></div>\n');
        },
        className: "fa fa-align-right",
        title: "Align Right"
      },
      "|",
      "horizontal-rule",
      "link",
      "|",
      "undo",
      "redo"
    ],
    status: false
  }), []);

  const handleChange = useCallback((value) => {
    setMarkdownValue(value);
    setPostContent(value);
  }, [setPostContent]);

  const handleDrop = useCallback((editor, event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(file);
        setImageFile(imageUrl);
        const cm = simpleMdeInstance.current.codemirror;
        const imageTag = `<img src="${imageUrl}" alt="Uploaded Image" width="200" height="200"/>`;
        cm.replaceSelection(imageTag + '\n');
      }
    }
  }, [setImageFile]);

  return (
    <div className="l-step2_area">
      <div className="l-progressbar_area">
        <ul className="progressbar">
          <li className="complete">タイトル・タグ</li>
          <li className="active">本文</li>
          <li>確認</li>
          <li>完了</li>
        </ul>
      </div>
      <div className="l-btn_area">
        <a className="prev_btn" onClick={onPrevious}>戻る</a>
        <a className="next_btn" onClick={onNext} >確認</a>
      </div>
      <div className="l-editor_area">
        <div className="l-markdown_area">
          <SimpleMDE
            className="markdown"
            value={markdownValue}
            onChange={handleChange}
            getMdeInstance={(instance) => { simpleMdeInstance.current = instance; }}
            options={editorOptions}
            events={{
              'drop': handleDrop,
            }}
          />
        </div>
        <div className="l-preview_area">
          <h3>プレビュー</h3>
          <div className="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(markdownValue)) }}></div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
