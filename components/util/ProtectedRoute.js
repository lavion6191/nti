// components/ProtectedRoute.js

import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { roleGET } from "api/user/role";
import { TokenManager } from 'util/token';
import Error from 'page/error';

const DeniedPage = () => {
    return <Error http={403} title="Forbidden" description="The gatekeeper has denied you entry, dear kitten.<br>Go somewhere else pls :3" />;
};

const ProtectedRoute = ({ children, allowedRoles }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const ACT = Cookies.get('act');

                // Call TokenManager to manage ACT token
                TokenManager(ACT);

                if (!ACT) {
                    setIsLoading(false);
                    return;
                }

                const response = await roleGET(ACT);
                console.log("ProtectedRoute response:", response.data)
                setUserRole(response.data.RID);
            } catch (error) {
                console.error("Error fetching user role:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserRole();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!userRole) {
        return <DeniedPage />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <DeniedPage />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
