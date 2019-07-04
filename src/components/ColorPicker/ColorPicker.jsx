import React from 'react';
import styles from './ColorPicker.module.css';

const ColorPicker = (props) => (
  <div className={styles.ColorPicker}>
    {props.colors.map((color, idx) =>
      <button
        color={color}
        key={color}
        className={styles.button}
        style={{
          backgroundColor: props.selColorIdx === idx ? 'white' : color,
          borderColor: color
        }}
        //eventListenr's are camel case
        onClick={() => props.ColorSelection(idx)}
        
      />
    )}
  </div>
);

export default ColorPicker;
