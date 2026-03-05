import { GoogleSignin, isSuccessResponse } from "@react-native-google-signin/google-signin"
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

GoogleSignin.configure({
    iosClientId: '544127242723-0sp51no7njnqvvfm4irmbpkqifjti8p2.apps.googleusercontent.com',
    webClientId: '544127242723-s8aqvqdflke54delhe2gdofeb04heb47.apps.googleusercontent.com'
})

export async function onGoogleButtonPress() {
    try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();

        if (isSuccessResponse(response)) {
            const { idToken } = response.data;

            if (!idToken) throw new Error("Token não encontrado");

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            return await auth().signInWithCredential(googleCredential);
        }
        
        return null;
    } catch (error) {
        console.log("Erro na ignição do Firebase:", error);
        throw error;
    }
}