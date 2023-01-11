// import { Label } from 'components/ContactForm/ContactForm.styled';

// export default function LoginForm() {
//   return (
//     <div>
//       <h1>Залогіньтесь було б круто</h1>
//       <form
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Label>
//           Email
//           <input type="email" name="email" placeholder="email@email.com" />
//         </Label>
//         <Label>
//           Password
//           <input type="password" name="password" placeholder="password" />
//         </Label>
//       </form>
//     </div>
//   );
// }

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(email, password);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <h1>Залогіньтесь було б круто!</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
}