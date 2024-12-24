import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../entities';
import styles from './styles.module.css';
import { useState } from 'react';
import { loginUser } from '../../services/users';

export const Login = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!login) {
      setError('Empty login');
    }

    if (!password) {
      setError('Empty password');
    }

    try {
      const data = await loginUser(login, password);

      const { token, id } = data;

      localStorage.setItem('ACCESS_TOKEN', token)
      localStorage.setItem('USER_ID', id)

      navigate('/')
    } catch (error: unknown) {
      console.error(error);
      setError(error as string)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>Sign in</h3>
        <Input onChange={(e) => setLogin(e.target.value)} placeholder='Login' styles={{ input: { width: "576px", height: "108px", backgroundColor: "var(--color-primary)", borderRadius: "100px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        <Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' styles={{ input: { width: "576px", height: "108px", backgroundColor: "var(--color-primary)", borderRadius: "100px", marginTop: "20px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        {!error && (<span>{error}</span>)}
        <div className={styles.links}>
          <p>Don't have account? <Link to="/register">Register</Link></p>
        </div>
        <Button w="576px" h="119px" justifyContent='center' outline onClick={handleLogin}>Sign in</Button>
      </form>
    </div>
  )
}