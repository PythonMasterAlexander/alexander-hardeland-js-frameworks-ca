function ContactPage() {
  return (
    <>
      <h1>If you will like to tell us anything</h1>
      <form>
        <fieldset>
          <legend>Contact</legend>
          <div>
            <label>
              Full name
              <input />
            </label>
          </div>
          <div>
            <label>
              Subject
              <textarea></textarea>
            </label>
          </div>
          <div>
            <label>
              Email
              <input />
            </label>
          </div>
          <div>
            <label>
              Body
              <input />
            </label>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
export default ContactPage;
