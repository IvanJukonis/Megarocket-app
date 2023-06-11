import React, { useState, useEffect } from 'react';
import { Loader, TableComponent, ToastError } from '../Shared';
import { useHistory } from 'react-router-dom';
import AddButton from './../Shared/AddButton/index';

function Projects() {
  const [classes, setClasses] = useState([]);
  const [toastErrorOpen, setToastErrorOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const columnTitleArray = ['Activity', 'Day', 'Hour', 'Trainer', 'Slots'];

  const columns = ['activity', 'day', 'hour', 'trainer', 'slots'];

  const valueField = {
    arrayFirstValue: 'firstName',
    arraySecondValue: 'lastName',
    objectValue: 'name'
  };

  const history = useHistory();

  const getClasses = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/class`);
      const data = await response.json();
      setClasses(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setToastMessage('Error in Database');
      setToastErrorOpen(true);
      console.error(error);
    }
  };

  useEffect(() => {
    getClasses();
  }, []);

  const deleteClassFromDB = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/class/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setClasses([...classes.filter((classes) => classes._id !== id)]);
    } catch (error) {
      console.error(error);
    }
  };

  const createMode = () => {
    history.push('/classes/ClassForm', { params: { mode: 'create' } });
  };

  const deleteClass = (id) => {
    deleteClassFromDB(id);
  };

  const handleClick = (item) => {
    history.push(`/classes/ClassForm/${item._id}`, {
      params: { item: item, mode: 'edit' }
    });
  };

  return (
    <section>
      <AddButton entity={'Class'} createMode={createMode} />{' '}
      {loading ? (
        <Loader />
      ) : (
        <TableComponent
          columnTitleArray={columnTitleArray}
          data={classes}
          handleClick={handleClick}
          deleteButton={deleteClass}
          columns={columns}
          valueField={valueField}
        />
      )}
      {toastErrorOpen && <ToastError setToastErroOpen={setToastErrorOpen} message={toastMessage} />}
    </section>
  );
}

export default Projects;
