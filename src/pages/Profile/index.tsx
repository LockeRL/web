import { useEffect, useState } from 'react';
import { Input } from '../../entities';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../services/users';

export const Profile = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<any>();

  useEffect(() => {
    const id = localStorage.getItem('USER_ID');

    if (!id) {
      navigate('/login');
    }

    (async () => {
      try {
        const data = await getUserById(id || '');

        setData(data);
      } catch {
        navigate('/login');
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>Profile</h3>
        <Input disabled placeholder='Login' value={data.firstName} styles={{ input: { width: "576px", height: "108px", backgroundColor: "var(--color-primary)", borderRadius: "100px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        <Input disabled type='password' value={data.secondName} placeholder='Password' styles={{ input: { width: "576px", height: "108px", backgroundColor: "var(--color-primary)", borderRadius: "100px", marginTop: "20px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
      </form>
    </div>
  )
}