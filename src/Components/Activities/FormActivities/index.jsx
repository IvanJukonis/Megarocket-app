import { useState, useEffect } from 'react';
import style from './modalAdd.module.css';
import { ModalConfirm, ModalSuccess, Inputs, Button } from '../../Shared';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { addActivity, updateActivity } from '../../../redux/activities/thunks';

const ModalAddActivity = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [modalConfirmOpen, setModalConfirmOpen] = useState(false);
  const [modalSuccessOpen, setModalSuccessOpen] = useState(false);
  const [bodyActivity, setBodyActivity] = useState({
    name: '',
    description: '',
    isActive: ''
  });

  const [activitiesEdit, setEditActivities] = useState({
    name: '',
    description: '',
    isActive: ''
  });

  const history = useHistory();
  const dataEdit = useLocation();

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      setBodyActivity({
        name: '',
        description: '',
        isActive: ''
      });
    } else {
      const activitiesEdited = dataEdit.state.params;
      setEditActivities({
        name: activitiesEdited.name,
        description: activitiesEdited.description,
        isActive: activitiesEdited.isActive
      });
    }
  }, []);

  const changeInput = (e) => {
    const newActivity = { ...bodyActivity, [e.target.name]: e.target.value };
    setBodyActivity(newActivity);

    const allFieldsValid = Object.values(newActivity).every((value) => {
      return value.length >= 3 && value !== '';
    });

    setActive(!allFieldsValid);
  };

  const changeInputEdit = (e) => {
    setEditActivities({
      ...activitiesEdit,
      [e.target.name]: e.target.value
    });

    if (e.target.value.length >= 3) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const postActivity = async ({ name, description, isActive }) => {
    let newActivity = {
      name,
      description,
      isActive
    };
    addActivity(dispatch, newActivity);
  };

  const submitActivity = () => {
    postActivity(bodyActivity);
    setModalConfirmOpen(false);
    setModalSuccessOpen(true);
  };

  const submitEdited = (id, activitiesEd) => {
    updateActivity(dispatch, id, activitiesEd);
    setModalConfirmOpen(false);
    setModalSuccessOpen(true);
  };

  const handleConfirmEdit = (e) => {
    e.preventDefault();
    setModalConfirmOpen(true);
  };

  const goBackTable = () => {
    setTimeout(() => {
      history.push('/activities');
    }, 1000);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className={style.containerModal}>
      <form className={style.containerForm}>
        <h3>Add</h3>
        <Inputs
          nameTitle="Name:"
          type="text"
          text={id ? activitiesEdit.name : bodyActivity.name}
          change={id ? changeInputEdit : changeInput}
          nameInput="name"
        />
        <Inputs
          nameTitle="Description:"
          type="text"
          text={id ? activitiesEdit.description : bodyActivity.description}
          change={id ? changeInputEdit : changeInput}
          nameInput="description"
        />
        <Inputs
          nameTitle="Is active:"
          type="text"
          text={id ? activitiesEdit.isActive : bodyActivity.isActive}
          change={id ? changeInputEdit : changeInput}
          nameInput="isActive"
        />
        <div className={style.containerAddButton}>
          <Button clickAction={goBack} text="Cancel" />
          <Button clickAction={handleConfirmEdit} text="Save" disabled={active} />
        </div>
      </form>
      {modalConfirmOpen && (
        <ModalConfirm
          method="Confirm"
          onConfirm={() => {
            !id ? submitActivity() : submitEdited(id, activitiesEdit);
          }}
          message="Are you sure you want to perform this action?"
          setModalConfirmOpen={setModalConfirmOpen}
        />
      )}
      {modalSuccessOpen && (
        <>
          <ModalSuccess message="¡Success!" setModalSuccessOpen={setModalSuccessOpen} />
          {setModalSuccessOpen && goBackTable()}
        </>
      )}
    </section>
  );
};

export default ModalAddActivity;
