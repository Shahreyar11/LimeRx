import { useEffect, useState } from "react";

const Dashboard = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        async function fetchUser() {

            try {

                const response = await fetch(
                    "http://localhost:3000/me",
                    {
                        credentials: "include"
                    }
                );

                const data = await response.json();

                setUser(data);

            } catch(error) {
                console.log(error);
            }

        }

        fetchUser();

    }, []);

    return (
        <div>
            <h1>
                Welcome Back 👋 {user?.username}
            </h1>
        </div>
    );
};

export default Dashboard;