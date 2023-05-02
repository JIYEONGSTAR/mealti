// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from "firebase/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router";
import { fireAuth } from "firebase/clientApp";
import useCurrentUser from "hooks/useCurrentUser";
import AuthContainer from "components/auth/AuthContainer";
import Seo from "components/Seo";
function Login() {
  const router = useRouter();
  // Configure FirebaseUI.
  const { setCurrentUser } = useCurrentUser();
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // emailAuth and googleAuth
    signInOptions: [
      // {
      //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   requireDisplayName: true,
      //   buttonColor: "#FFBC58",
      // },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (res: any) => {
        setCurrentUser(res.additionalUserInfo.profile);
        if (res.additionalUserInfo.isNewUser) {
          router.push("/auth/initialization");
        } else {
          router.push("/");
        }
        return false;
      },
    },
  };

  return (
    <>
      <Seo title="로그인" />
      <AuthContainer>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth} />
      </AuthContainer>
    </>
  );
}

export default Login;
