import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
		e.preventDefault();

		axios.post("http://localhost:3000/login" , {
			email,
			password
		}).then((result) => {
      console.log(result.data)
      dispatch({type:"LOGIN",payload:result.data})
      navigate("/")
			})
			.catch((error) => {
				setError(true)
			});
	};

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
				<input
					type="email"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Submit</button>
				{error && <span>Wrong email or password!</span>}
			</form>
    </div>
  )
}

export default Login