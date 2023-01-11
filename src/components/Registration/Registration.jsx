// import { Label } from 'components/ContactForm/ContactForm.styled';

export default function Registration() {
  return (
    <>
      <h1>Потрібно зареєструватись</h1>

      <form
        action=""
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input type="text" />
        {/* <Label>
          Name
          <input type="text" name="name" placeholder="Input name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" placeholder="email@email.com" />
        </Label>
        <Label>
          Name
          <input type="password" name="password" placeholder="password" />
        </Label> */}
      </form>
    </>
  );
}
