import React, { useState } from 'react';
import BaseLayout from '@components/admin/layouts/BaseLayout';
import Step1 from '@components/admin/templates/postForm/FormStep1';
import Step2 from '@components/admin/templates/postForm/FormStep2';
import Step3 from '@components/admin/templates/postForm/FormStep3';
import '@scss/admin/FontawesomeClassMapper.scss';
import '@scss/admin/templates/AddPostForm.scss';
import '@scss/admin/templates/postForm/ProgressBar.scss';

const AddPostForm = () => {
  const [step, setStep] = useState(1);
  const [animationStep, setAnimationStep] = useState(1);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [postContent, setPostContent] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const nextStep = () => {
    setAnimationStep(step);
    setStep(step < 3 ? step + 1 : 3);
  }

  const prevStep = () => {
    setAnimationStep(step);
    setStep(step > 1 ? step - 1 : 1);
  }

  const stepClass = (currentStep) => {
    let className = `form_step ${step > currentStep ? 'slide_out_left' : 'slide_out_right'}`;
    if (step === currentStep) {
      className = `form_step ${step > animationStep ? 'slide_in_right' : 'slide_in_left'} active`;
    }
    return className;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('tags', tags);
    formData.append('postContent', postContent);

    if (imageFile && typeof imageFile === 'string' && imageFile.startsWith('blob:')) {
      try {
        const blob = await fetch(imageFile).then(res => res.blob());
        const file = new File([blob], "uploaded_image.jpg", { type: blob.type });
        formData.append('image', file);
      } catch (error) {
        console.error('画像の変換に失敗しました', error);
        return;
      }
    } else if (imageFile instanceof File) {
      formData.append('image', imageFile);
    }

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('投稿成功！');
      } else {
        console.error('投稿失敗', await response.text());
      }
    } catch (error) {
      console.error('エラーが発生しました', error);
    }
  }



  return (
    <BaseLayout>
      <div className="l-add_post_form">
        <div className={`form_step ${stepClass(1)}`}>
          <Step1 title={title} setTitle={setTitle} tags={tags} setTags={setTags} onNext={nextStep} />
        </div>
        <div className={`form_step ${stepClass(2)}`}>
          <Step2 postContent={postContent} setPostContent={setPostContent}
            setImageFile={setImageFile}
            onPrevious={prevStep} onNext={nextStep} onSubmit={handleSubmit} />
        </div>
        <div className={`form_step ${stepClass(3)}`}>
          <Step3 postContent={postContent} setPostContent={setPostContent} onPrevious={prevStep} onSubmit={handleSubmit} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default AddPostForm;
