'use client';
/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '../../Icons';
import { useSelector } from 'react-redux';
import { themes } from '../../styles/colorPallet/themes';
const usersfeedback = [
  { id: 1, img: '', name: 'user', feedback: "text" },
  { id: 2, img: '', name: 'user', feedback: "text" },
  { id: 3, img: '', name: 'user', feedback: "text" },
  { id: 4, img: '', name: 'user', feedback: "text" },
  { id: 5, img: '', name: 'user', feedback: "text" },
  { id: 6, img: '', name: 'user', feedback: "text" },
  { id: 7, img: '', name: 'user', feedback: "text" },
  { id: 8, img: '', name: 'user', feedback: "text" },
  { id: 9, img: '', name: 'user', feedback: "text" },
  { id: 10, img: '', name: 'user', feedback: "text" },
  { id: 11, img: '', name: 'user', feedback: "text" },
  { id: 12, img: '', name: 'user', feedback: "text" },
  { id: 13, img: '', name: 'user', feedback: "text" },
  { id: 14, img: '', name: 'user', feedback: "text" },
  { id: 15, img: '', name: 'user', feedback: "text" },
  { id: 16, img: '', name: 'user', feedback: "text" },
  { id: 17, img: '', name: 'user', feedback: "text" },
  { id: 18, img: '', name: 'user', feedback: "text" },
  { id: 19, img: '', name: 'user', feedback: "text" },
  { id: 20, img: '', name: 'user', feedback: "text" },
  { id: 21, img: '', name: 'user', feedback: "text" },
];

const Feedback = () => {
  const [writeFeedback, setWriteFeedback] = useState(false);
  const [sendFeedback, setSendFeedback] = useState(false);
  const [sendCancelFeedback, setSendCancelFeedback] = useState(false);

  const [countFeedback, setCountFeedback] = useState('')
  const feedbackText = useRef(null);
  const handleTextAreaChange = () => {
    const newText = feedbackText.current.value;
    setCountFeedback(newText);
  };
  return (
    <div className={`feedbackContainer`}>
      <h2 className={`feedbackHeader`}>Feedback</h2>

      <span className={`feedbackBtnContainer`} onClick={() => { setWriteFeedback(!writeFeedback) }}>Feedback form</span>

      {writeFeedback && (
        <div className={`feedbackFormContainer`}>
          <h2 className={``}> Feedback form <FontAwesomeIcon icon='close' className={``} onClick={() => { setWriteFeedback(!writeFeedback) }} /></h2>
          <label className={``}>
            <span className={``}>Your Name</span>
            <input placeholder={'Name'} className={``} readOnly />
          </label>
          <textarea placeholder='Your feedback text...' ref={feedbackText} onChange={handleTextAreaChange} value={countFeedback} className={``}></textarea>
          <label className={``}>
            <span>{countFeedback.length >= 600 ? 'Max' : countFeedback.length}</span>/
            <span>600</span>
          </label>
          <div className={``}>
            <button className={``} onClick={() => { setSendFeedback(!sendFeedback) }}>Send</button>
            <button className={``} onClick={() => { setSendCancelFeedback(!sendCancelFeedback) }}>Cancel</button>
          </div>
          {sendFeedback && (
            <div className={``}>
              <h2 className={``}>{"Are you sure?"} <FontAwesomeIcon icon='close' className={``} onClick={() => { setSendFeedback(!sendFeedback) }} /> </h2>
              <div className={``}>
                <button className={``} onClick={() => { setSendFeedback(!sendFeedback); setWriteFeedback(!writeFeedback); alert("Thanks for your feedback") }}>Yes</button>
                <button className={``} onClick={() => { setSendFeedback(!sendFeedback) }}>No</button>
              </div>
            </div>
          )}
          {sendCancelFeedback && (
            <div className={``}>
              <h2 className={``}>{"If you cancel your feedback won't be sent and window will be closed"}
                <FontAwesomeIcon icon='close' className={``} onClick={() => { setSendCancelFeedback(!sendCancelFeedback) }} /> </h2>
              <div className={``}>
                <button className={``} onClick={() => { setSendCancelFeedback(!sendCancelFeedback); setWriteFeedback(!writeFeedback); alert("We will be waiting for your feedback thanks for being interested") }}>Yes</button>
                <button className={``} onClick={() => { setSendCancelFeedback(!sendCancelFeedback) }}>No</button>
              </div>
            </div>
          )}
        </div>
      )}

      <p className={`feedbackPointer`}>Users feedback board</p>
      <div className={`feedbackContent`}>

        {usersfeedback.map((feeds) => (
          <div key={feeds.id} className={`feedbackCard`}>

            <div className={`feedbackImgHolder`}>
              <img src={feeds.img.src} className={`feedbackImg`} />
            </div>
            <div className={`feedbackRow`}>

              <div className={`userData`}>
                <span className={`name`}>{feeds.name}{feeds.id}</span>
                <div className={`circleIcon`}></div>
              </div>

              <p className={`userFeedbackText`}>
                {feeds.feedback}{feeds.id}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Feedback