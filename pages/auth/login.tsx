// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from "firebase/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useRouter } from "next/router";
import { fireAuth } from "firebase/clientApp";
import useCurrentUser from "hooks/useCurrentUser";
import AuthContainer from "components/auth/AuthContainer";
import Seo from "components/Seo";
import ButtonForm from "components/ui/ButtonForm";
import styled from "styled-components";
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

  const handleExampleLogin = () => {
    const profile = {
      email: "jiyeongstar@gmail.com",
      family_name: "박",
      given_name: "지영",
      granted_scopes: "",
      id: "116399980174675314701",
      locale: "ko",
      name: "박지영",
      picture:
        "https://lh3.googleusercontent.com/a/AGNmyxZCeDv9peWZZ7vP5FqwzgwKIOWaEUrCds7OMizDOA=s96-c",
      verified_email: true,
    };
    setCurrentUser(profile);
    router.push("/");
  };
  return (
    <>
      <Seo title="로그인" />
      <AuthContainer>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fireAuth} />
        <Div>
          <p>가입을 원하지 않으시다면 개발자의 계정으로 로그인이 가능합니다.</p>
          <ButtonForm
            text="예시 계정으로 로그인"
            onClick={handleExampleLogin}
          />
        </Div>
      </AuthContainer>
    </>
  );
}

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
