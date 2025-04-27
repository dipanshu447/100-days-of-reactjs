function App() {
  
  function signUp(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let formData = new FormData(form);
    // const email = formData.get("email");
    // const password = formData.get("password");
    // const description = formData.get("description");
    // const option = formData.get("options");
    const languages = formData.getAll("lang");
    // const favouritecolor = formData.get("favcolor");
    // console.log(email);
    // console.log(password);
    // console.log(description);
    // console.log(option);
    // console.log(Object.fromEntries(formData));
    let formEntry = Object.fromEntries(formData);
    let realFormEntry = {...formEntry, lang: languages };
    console.log(realFormEntry);
    // console.log(favouritecolor);
    // console.log(languages);
    form.reset();
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor="desc">Description</label>
        <textarea name="description" id="desc"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="options" value="Full time"/>
            Full time
          </label>
          <label>
            <input type="radio" name="options" value="Part time"/>
            Part time
          </label>
          <label >
            <input type="radio" name="options" defaultChecked={true} value="Internship"/>
            Internship
          </label>
        </fieldset>

        <fieldset>
          <legend>Languages</legend>
          <label>
            <input type="checkbox" name="lang" value="C++"/>
            C++
          </label>
          <label>
            <input type="checkbox" name="lang" defaultChecked={true} value="Javascript"/>
            Javascript
          </label>
          <label >
            <input type="checkbox" name="lang" value="C#"/>
            C#
          </label>
          <label >
            <input type="checkbox" name="lang" value="Java"/>
            Java
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your fav color?</label>
        <select id="favColor" name="favcolor" defaultValue="" required>
          <option value="" disabled>-- Choose your fav color --</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Indigo">Indigo</option>
          <option value="Violet">Violet</option>
        </select>
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);