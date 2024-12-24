import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '../../entities';
import styles from './styles.module.css';
import { useState } from 'react';
import { registerUser } from '../../services/users';

export const Register = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!login) {
      setError('Empty login');
    }

    if (!password) {
      setError('Empty password');
    }

    try {
      // @ts-ignore
      const status = await registerUser({ login, password, secondName, firstName });

      if (status === 200) {
        navigate('/login')
      }
    } catch (error: unknown) {
      console.error(error);
      setError(error as string)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>Sign up</h3>
        <Input onChange={(e) => setLogin(e.target.value)} placeholder='Login' styles={{ input: { width: "576px", height: "88px", backgroundColor: "var(--color-primary)", borderRadius: "100px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        <Input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' styles={{ input: { width: "576px", height: "88px", backgroundColor: "var(--color-primary)", borderRadius: "100px", marginTop: "20px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        <Input onChange={(e) => setFirstName(e.target.value)} placeholder='First name' styles={{ input: { width: "576px", height: "88px", backgroundColor: "var(--color-primary)", borderRadius: "100px", marginTop: "20px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />
        <Input onChange={(e) => setSecondName(e.target.value)} placeholder='Second name' styles={{ input: { width: "576px", height: "88px", backgroundColor: "var(--color-primary)", borderRadius: "100px", marginTop: "20px", fontSize: "51px", paddingLeft: "50px", color: "var(--color-accent)" } }} />

        {!error && (<span>{error}</span>)}
        <div className={styles.links}>
          <p>Already have account? <Link to="/login">Sign in</Link></p>
        </div>
        <Button w="576px" h="99px" justifyContent='center' outline onClick={handleRegister}>Sign up</Button>
      </form>
    </div>
  )
}