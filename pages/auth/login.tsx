// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from "firebase/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router";
import { fireAuth } from "firebase/clientApp";
import useCurrentUser from "hooks/useCurrentUser";
function Login() {
  const router = useRouter();
  // Configure FirebaseUI.
  const { setCurrentUser } = useCurrentUser();
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // emailAuth and googleAuth
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
        buttonColor: "#FFBC58",
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (res: any) => {
        setCurrentUser(res.additionalUserInfo.profile);
        if (res.additionalUserInfo.isNewUser) {
          router.push("/signup");
        } else {
          router.push("/");
        }
        return false;
      },
    },
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth} />
    </div>
  );
}

export default Login;
