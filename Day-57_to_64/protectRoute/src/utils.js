import { redirect } from "react-router-dom";

export default async () => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        throw redirect('/');
    }
    return null;
}