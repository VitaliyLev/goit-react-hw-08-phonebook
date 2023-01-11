// import { Label } from 'components/ContactForm/ContactForm.styled';

// export default function Registration() {
//   return (
//     <>
//       <h1>Потрібно зареєструватись</h1>

//       <form
//         action=""
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Label>
//           Name
//           <input type="text" name="name" placeholder="Input name" />
//         </Label>
//         <Label>
//           Email
//           <input type="email" name="email" placeholder="email@email.com" />
//         </Label>
//         <Label>
//           Password
//           <input type="password" name="password" placeholder="password" />
//         </Label>
//       </form>
//     </>
//   );
// }
//====================================================================
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // const name = form.elements.name.value;
    // const email = form.elements.email.value;
    // const password = form.elements.password.value;
    // console.log(name, email, password);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h1>Потрібно зареєструватись</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

//=======================================

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
// import { useState } from 'react';

// export default function RegisterForm() {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     dispatch(register({ name, email, password }));
//     console.log({ name, email, password });
//     setName('');
//     setEmail('');
//     setPassword('');
//   };
//   // {name: 'sdasad', email: 'sadsa@gmail.com', password: 'wdqwqdqwd'}
//   return (
//     <>
//       <h1>Потрібно зареєструватись</h1>
//       <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//         <label className={css.label}>
//           Username
//           <input value={name} onChange={e => setName(e.currentTarget.value)} />
//         </label>
//         <label className={css.label}>
//           Email
//           <input
//             value={email}
//             onChange={e => setEmail(e.currentTarget.value)}
//           />
//         </label>
//         <label className={css.label}>
//           Password
//           <input
//             value={password}
//             onChange={e => setPassword(e.currentTarget.value)}
//           />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </>
//   );
// }
