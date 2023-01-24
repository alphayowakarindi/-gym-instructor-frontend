import './AddService.css';
import { useState, useRef } from 'react';
import HamburgerMenu from '../components/hamburgerMenu';

const AddService = () => {
  const inputRef = useRef(null);

  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [classTime, setClassTime] = useState('');
  const [fee, setFee] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('duration', duration);
    formData.append('class_time', classTime);
    formData.append('fee', fee);
    formData.append('image', image);
    formData.append('description', description);

    fetch('http://127.0.0.1:8080/api/v1/services', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    }).then((response) => {
      console.log(response);
      setTitle('');
      setDuration('');
      setClassTime('');
      setFee('');
      inputRef.current.value = null;
      setDescription('');
    }).catch((error) => console.log(error));
  };

  return (
    <>
      <HamburgerMenu />
      <div id="add-service">
        <h1>Add Service</h1>
        <form className="contact-form" onSubmit={handleSubmit}>

          <label htmlFor="title">
            Title:
            {' '}
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label htmlFor="duration">
            Duration:
            {' '}
            <input type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
          </label>
          <label htmlFor="class-time">
            Class Time:
            {' '}
            <input type="text" id="class-time" value={classTime} onChange={(e) => setClassTime(e.target.value)} required />
          </label>
          <label htmlFor="fee">
            Fee:
            {' '}
            <input type="number" id="fee" value={fee} onChange={(e) => setFee(e.target.value)} required />
          </label>
          <label htmlFor="image">
            Image:
            {' '}
            <input type="file" ref={inputRef} id="image" accept="image/*" multiple={false} onInput={(e) => setImage(e.target.files[0])} required />
          </label>

          <label htmlFor="description">
            Description:
            {' '}
            <textarea name="" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddService;
