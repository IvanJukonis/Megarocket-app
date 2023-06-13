import React from 'react';
import styles from './option-input.module.css';

const SelectInput = ({ data, dataLabel, onChangeOption, setValue, name }) => {
  const ifFirstName = (item) => {
    if (item.firstName && item.lastName) {
      return `${item.firstName} ${item?.lastName}`;
    }
  };

  const ifObject = (item) => {
    if (typeof item.activity === 'object') {
<<<<<<< HEAD
      return item.activity ? `${item.activity.name} - ${item.hour}` : `incomplete ${dataLabel}`;
=======
      return item.activity ? `${item.activity.name} ${item.hour}` : `incomplete ${dataLabel}`;
>>>>>>> 52befe74225502a9b91d0ca4822cc6e90ea5590a
    }
    if (typeof item === 'object') {
      return item ? item.name : `incomplete ${dataLabel}`;
    }
  };

  return (
    <div className={styles.containerInput}>
      <label htmlFor="selectInput">{dataLabel}:</label>
      <select
        onChange={onChangeOption}
        value={setValue}
        className={styles.optionInput}
        id="selectInput"
        name={name}
      >
        <option>Pick {name}</option>
        {data.map((item, index) => {
          return (
            <option key={index} value={item._id}>
              {ifFirstName(item)}
              {ifObject(item)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
