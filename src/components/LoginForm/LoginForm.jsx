// import { Label } from 'components/ContactForm/ContactForm.styled';

export default function LoginForm() {
  return (
    <div>
      <h1>Залогіньтесь було б круто</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input type="text" />
        {/* <Label>
          Email
          <input type="email" name="email" placeholder="email@email.com" />
        </Label>
        <Label>
          Name
          <input type="password" name="password" placeholder="password" />
        </Label> */}
      </form>
    </div>
  );
}
