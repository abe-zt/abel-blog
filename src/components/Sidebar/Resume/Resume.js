// @flow strict
import React from 'react';
import styles from './Resume.module.scss';
import downloadFile from '../../../../static/Zatarain-Resume.pdf';

const Resume = () => (
  <div className={styles['resume']}> My Resume:
    <a href={downloadFile} className={styles['view-link']}>
       View
    </a>
    <a href={downloadFile} download className={styles['download-link']}>
       Download
    </a>
  </div>
);

export default Resume;
