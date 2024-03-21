import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
	apiKey: "AIzaSyCK8jw4c4cIPRcin-Jk_oXOYuShlCqgZUQ",
	authDomain: "final-project-52a50.firebaseapp.com",
	projectId: "final-project-52a50",
	storageBucket: "final-project-52a50.appspot.com",
	messagingSenderId: "445874157355",
	appId: "1:445874157355:web:7670b92cca077ad130b76e",
	measurementId: "G-6RPKCW1LKQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };