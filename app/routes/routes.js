import AboutMe from "../http/controller/aboutMe";

export default function routes() {
    return [
        { uri: "/about-me",  callback: AboutMe }
    ]
}