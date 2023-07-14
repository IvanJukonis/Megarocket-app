import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import { ButtonForm, Loader } from 'Components/Shared';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getTrainers } from 'redux/trainers/thunks';
import { getFirebaseUidFromToken } from 'helper/firebase';
import 'firebase/compat/auth';
const editProfilePicBtn = `${process.env.PUBLIC_URL}/assets/images/image.png`;

const TrainerProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userCurrent, setUserCurrent] = useState('');
  const trainers = useSelector((state) => state.trainers.list);
  const trainer = trainers.find((oneTrainer) => oneTrainer.email === userCurrent);
  const [profilePic, setProfilePic] = useState('');
  const [photoEdit, setPhotoEdit] = useState(false);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const defaultProfile = !profilePic ? (
    <div className={styles.defaultImg}>
      <p className={styles.profileInitials}>
        <span>{trainer?.firstName.charAt()}</span> <span>{trainer?.lastName.charAt()}</span>
      </p>
    </div>
  ) : (
    sessionStorage.getItem('img')
  );

  const currentUser = async () => {
    try {
      const emailCurrentUser = await getFirebaseUidFromToken();
      setUserCurrent(emailCurrentUser);
    } catch (error) {
      return error;
    }
  };

  const handleEditClick = () => {
    history.push(`/trainer/profile/form/${trainer._id}`, { params: { ...trainer } });
  };

  useEffect(() => {
    getTrainers(dispatch);
  }, []);

  useEffect(() => {
    currentUser();
    setProfilePic(defaultProfile);
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [trainer]);

  if (!trainer) {
    return null;
  }
  const togglePhotoEdit = () => {
    setCounter(counter + 1);
    setPhotoEdit(!photoEdit);
  };

  return (
    <div className={styles.wholeContainer}>
      {loading ? (
        <Loader />
      ) : (
        <section className={styles.container}>
          <div className={styles.profilePhotoContainer}>
            {typeof profilePic === 'string' ? (
              <img className={styles.profileImg} src={profilePic} alt="profile image" />
            ) : (
              profilePic
            )}
            <img
              className={styles.editPhotoButton}
              src={editProfilePicBtn}
              onClick={togglePhotoEdit}
              alt="camera"
            />

            <h1 className={styles.adminName}>
              {trainer.firstName} {trainer.lastName}
            </h1>
          </div>
          <div className={styles.titleContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.profileIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h2 className={styles.adminInfoTitle}>Personal Information</h2>
          </div>
          <div className={styles.profileInfoContainer} data-testid="info-container">
            <p className={styles.adminInfoContainer}>
              <span className={styles.adminInfoPlaceholder}>Name</span>
              <span className={styles.adminInfo}>
                {trainer.firstName} {trainer.lastName}
              </span>
            </p>
            <p className={styles.adminInfoContainer}>
              <span className={styles.adminInfoPlaceholder}>Dni</span>
              <span className={styles.adminInfo}> {trainer.dni}</span>
            </p>
            <p className={styles.adminInfoContainer}>
              <span className={styles.adminInfoPlaceholder}>City</span>
              <span className={styles.adminInfo}> {trainer.city}</span>
            </p>
            <p className={styles.adminInfoContainer}>
              <span className={styles.adminInfoPlaceholder}>Phone</span>
              <span className={styles.adminInfo}> {trainer.phone}</span>
            </p>
            <p className={styles.adminInfoContainer}>
              <span className={styles.adminInfoPlaceholder}>Email</span>
              <span className={styles.adminInfo}> {trainer.email}</span>
            </p>
            <div className={styles.buttonEdit} onClick={handleEditClick}>
              <p>Edit Profile</p>
              <ButtonForm
                className={styles.iconEdit}
                onAction={handleEditClick}
                nameImg="edit.svg"
                testId="profile-edit-btn"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrainerProfile;
