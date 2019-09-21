// @flow strict
import React from 'react';
// import moment from 'moment';
// import { Link } from 'gatsby';
// import type { Edges } from '../../types';
import styles from './Toggle.module.scss';

// type Props = {
//   edges: Edges
// };

const Toggle = () => (
  <div>
    <div class="theme-switch-wrapper jc-fs p1">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round" />
      </label>
      <em>Enable Dark Mode!</em>
    </div>
  </div>
);

export default Toggle;