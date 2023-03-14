import './App.css';

function App() {
  return (
    <><div class="container">
      <form action="/action_page.php">
      <p>Back</p>
        <label for="usrname">Email</label><br></br>
        <input type="email" id="email" name="email"></input><br></br>

        <label for="psw">Password</label><br></br>
        <input type="password" id="psw" name="psw" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input><br></br>
        <label for="psw">Re-enter Password</label><br></br>
        <input type="password" id="psw" name="psw" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input><br></br>
        <input type="submit" value="Create Account"></input>
      </form>
    </div><div id="message">
        <h3>Password must contain the following:</h3>
        <p id="length" class="invalid">at most 8 characters</p>
        <p id="letter" class="invalid">A lower case letter</p>
        <p id="capital" class="invalid">An upper case letter</p>
        <p id="" class="invalid"> A special character</p>
        <p id="number" class="invalid">A number</p>
      </div></>


  );
}

export default App;