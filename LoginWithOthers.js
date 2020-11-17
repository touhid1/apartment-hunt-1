// import React, { useContext, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import { UserContext } from "../../App";
// import firebaseConfig from "../Login/firebase.config";
// const LoginWithOthers = () => {
	
	
// 		const [loggedInUser ,setLoggedInUser] =useContext(UserContext)
// 		const  history = useHistory();
// 		const location = useLocation();
// 		const { from } = location.state || { from: { pathname: "/" } };
// 		const [currentUser, setCurrentUser] = useState({
// 			isSignedIn: false,
// 			email: "",
// 			password: "",
// 			error: "",
// 			success: false,
// 		});
	
// 		if(firebase.apps.length ===0){
// 			firebase.initializeApp(firebaseConfig);
	
// 		}
// 		/* GOOGLE Sign in */
// 	const handleGoogleSignIn = () => {
// 		const provider = new firebase.auth.GoogleAuthProvider();
// 		firebase
// 			.auth()
// 			.signInWithPopup(provider)
// 			.then(function(result) {
// 				const { displayName, email } = result.user;
// 				const newUser = {
// 					isSignedIn: true,
// 					email: email,
// 					name: displayName,
// 				};
// 				setCurrentUser(newUser);

// 				setLoggedInUser(newUser);
// 				history.replace(from);
// 				console.log(newUser);
// 			})
// 			.catch(function(error) {
// 				const newUser = { ...currentUser };
// 				newUser.error = error.message;
// 				newUser.success = false;
// 				setLoggedInUser(newUser);
// 				console.log(error);
// 			});
// 	};

// 	/* FACEBOOK Sign in */
// 	const handleFacebookSignIn = () => {
// 		const provider = new firebase.auth.FacebookAuthProvider();
// 		firebase
// 			.auth()
// 			.signInWithPopup(provider)
// 			.then(function(result) {
// 				const { displayName, email } = result.user;
// 				const newUser = {
// 					isSignedIn: true,
// 					email: email,
// 					name: displayName,
// 				};
// 				setCurrentUser(newUser);

// 				setLoggedInUser(newUser);
// 				history.replace(from);
// 				console.log(newUser);
// 			})
// 			.catch(function(error) {
// 				const newUser = { ...currentUser };				
// 				newUser.success = false;
// 				setLoggedInUser(newUser);
// 				console.log(error);
// 			});
// 	};
// 	return (
// 		<div>
// 			<div className="form-divider text-center">
// 				<p>Or</p>
// 			</div>

// 			<div className="tg-thirdparty-login">
// 			<button className="btn btn-secondary"   onClick={()=>{handleFacebookSignIn()}}><img src={require("../../images/icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" /> continue with facebook</button>

// 			<button className="btn btn-secondary" onClick={()=>{handleGoogleSignIn()}}><img src={require("../../images/icon/google.png")} style={{ maxWidth: "32px" }} alt="fb logo" /> continue with google</button>
// 			</div>
// 		</div>
// 	);
// };

// export default LoginWithOthers;




