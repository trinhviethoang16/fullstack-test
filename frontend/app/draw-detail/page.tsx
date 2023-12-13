"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackToList from '../../components/backToList';

const DrawDetail = () => {
  const router = useRouter();
  const handleCreateClick = () => {
    router.push('/create-new');
  };
  
    return (
      <div className="draw-detail-layout">
        <div className="title-holder">
          <BackToList />
          <div className="draw-detail-title">
            <p>Your Draw</p>
          </div>
          <div>
            <button onClick={handleCreateClick} className="create-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.0332 14.6875C5.07227 14.6875 5.11133 14.6836 5.15039 14.6777L8.43555 14.1016C8.47461 14.0938 8.51172 14.0762 8.53906 14.0469L16.8184 5.76758C16.8365 5.74951 16.8508 5.72805 16.8606 5.70442C16.8704 5.68079 16.8755 5.65546 16.8755 5.62988C16.8755 5.6043 16.8704 5.57897 16.8606 5.55535C16.8508 5.53172 16.8365 5.51026 16.8184 5.49219L13.5723 2.24414C13.5352 2.20703 13.4863 2.1875 13.4336 2.1875C13.3809 2.1875 13.332 2.20703 13.2949 2.24414L5.01562 10.5234C4.98633 10.5527 4.96875 10.5879 4.96094 10.627L4.38477 13.9121C4.36577 14.0167 4.37255 14.1244 4.40454 14.2258C4.43654 14.3273 4.49276 14.4193 4.56836 14.4941C4.69727 14.6191 4.85938 14.6875 5.0332 14.6875ZM6.34961 11.2812L13.4336 4.19922L14.8652 5.63086L7.78125 12.7129L6.04492 13.0195L6.34961 11.2812ZM17.1875 16.3281H2.8125C2.4668 16.3281 2.1875 16.6074 2.1875 16.9531V17.6562C2.1875 17.7422 2.25781 17.8125 2.34375 17.8125H17.6562C17.7422 17.8125 17.8125 17.7422 17.8125 17.6562V16.9531C2.1875 16.6074 17.5332 16.3281 17.1875 16.3281Z"
                  fill="#444444"
                />
              </svg>
              <span className="create-btn-text">Create</span>
            </button>
          </div>
        </div>
        <div className="container draw-detail-list-content">
          <table className="table draw-detail-table">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Shape</th>
                <th>Color</th>
                <th>Measurement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&</td>
                <td>Rectangle</td>
                <td>#111111</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
        <div className="d-flex" style={{ justifyContent: 'center' }}>
          ...
        </div>
        </div>
        <div className="d-flex" style={{ justifyContent: 'center' }}>
          <button type="submit" className="edit-btn">
            <span className="edit-btn-text">Edit</span>
          </button>
        </div>
      </div>
    );
  };
export default DrawDetail;