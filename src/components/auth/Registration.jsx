import { useState } from "react";

const Registraton = () => {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [matchPwd, setMatchPwd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        autoComplete="off"
                        value={user}
                        onChange={(e) => { setUser(e.target.value) }}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        value={pwd}
                        onChange={(e) => { setPwd(e.target.value) }}
                        required
                    />
                    <label htmlFor="confirm_pwd">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm_password"
                        autoComplete="off"
                        value={matchPwd}
                        onChange={(e) => { setMatchPwd(e.target.value) }}
                        required
                    />
                    <button type="submit">Sign in</button>
                </form>
            </section>
        </>
    )
}

export default Registraton;