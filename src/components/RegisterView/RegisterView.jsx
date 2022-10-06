import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperation } from '../../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperation.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Имя
          <input type="text" name="name" onChange={handelChange} />
        </label>
      </form>
    </div>
  );
}
