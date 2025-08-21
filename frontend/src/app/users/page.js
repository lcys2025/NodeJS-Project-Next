export default function Users() {
  return (
    <form method="post">
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" />
      <br />
      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" />
      <br />
      <button>Submit</button>
    </form>
  );
}
