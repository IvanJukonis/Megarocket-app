import ButtonForm from '../ButtonForm';
import styles from './table.module.css';
import { useState } from 'react';
import { ModalConfirm, ModalSuccess, ButtonActive } from '../index';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const TableComponent = ({
  columnTitleArray,
  data,
  handleClick,
  deleteButton,
  columns,
  valueField,
  classes,
  testId
}) => {
  const fieldValue = valueField;
  const [successModal, setModalSuccess] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [idDelete, setIdDelete] = useState('');
  const dispatch = useDispatch();
  const located = useLocation().pathname;

  const onConfirmOpen = (id) => {
    setModalConfirm(true);
    setIdDelete(id);
  };

  const onConfirm = () => {
    dispatch(deleteButton(idDelete));
    setModalSuccess(true);
  };

  const ifArray = (item) => {
    if (item) {
      if (Array.isArray(item)) {
        return item?.map((content, contentIndex) => (
          <span key={contentIndex}>
            {content[fieldValue?.arrayFirstValue]} {content[fieldValue?.arraySecondValue]}
          </span>
        ));
      }
    }
  };

  const ifObject = (item) => {
    if (item) {
      if (item.activity) {
        const findActivity = classes.find((act) => act._id === item._id);
        return findActivity?.activity && `${findActivity.activity?.name} - ${findActivity?.hour}`;
      }
      if (typeof item === 'object') {
        return <span>{item[fieldValue?.objectValue]}</span>;
      }
    }
  };

  const ifNotArrayNotObject = (item, itemContent) => {
    if (typeof item[itemContent] !== 'object' && !Array.isArray(item[itemContent])) {
      if (itemContent === 'firstName') {
        return (
          <span>
            {item?.firstName} {item?.lastName}
          </span>
        );
      } else if (itemContent === 'date') {
        const date = new Date(item.date);
        const format = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        };
        const dateFixed = date.toLocaleDateString(format);
        return item?.date && dateFixed;
      } else {
        return item[itemContent];
      }
    }
  };

  const ifNotExist = (item) => {
    if (item?.length === 0) {
      return <span>This element Was Deleted. Edit to add</span>;
    }
  };

  return (
    <section className={styles.container} data-testid={testId}>
      {data?.length === 0 ? (
        <div className={styles.noneTrainer}>
          <h3>The list is empty</h3>
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableContent}>
              {columnTitleArray.map((column, index) => (
                <th key={column[index]}>{column}</th>
              ))}
              {(located === '/admin/trainers' || located === '/admin/members') && <th>Active</th>}
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const rowClass = index % 2 === 0 ? styles.rowBackground1 : styles.rowBackground2;

              return (
                <tr className={rowClass} key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      {ifArray(row[column])}
                      {ifObject(row[column])}
                      {ifNotArrayNotObject(row, column)}
                      {ifNotExist(row[column])}
                    </td>
                  ))}
                  {(located === '/admin/trainers' || located === '/admin/members') && (
                    <td>
                      <ButtonActive data={row} />
                    </td>
                  )}
                  <td>
                    <ButtonForm
                      nameImg="pencil-edit.svg"
                      onAction={() => handleClick(row)}
                      testId="edit-btn"
                    />
                  </td>
                  <td>
                    <ButtonForm
                      nameImg="trash-delete.svg"
                      onAction={() => onConfirmOpen(row._id)}
                      testId="delete-btn"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {modalConfirm && (
        <ModalConfirm
          onConfirm={() => onConfirm()}
          message="Are you sure to delete this?"
          method="Delete"
          setModalConfirmOpen={setModalConfirm}
          testId="delete-confirm-modal"
        />
      )}
      {successModal && (
        <ModalSuccess
          setModalSuccessOpen={setModalSuccess}
          message="Delete Successfully"
          testId="delete-success-modal"
        />
      )}
    </section>
  );
};

export default TableComponent;
