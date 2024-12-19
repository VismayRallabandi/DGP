'use client';
import React from 'react';
import  useAuth  from '../dashboard/hooks/useAuth'; // Adjust the import path as necessary
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent: React.ComponentType) => {
    const AuthHOC = (props: any) => {
        const { session} = useAuth();
        const router = useRouter();

        React.useEffect(() => {
            if (!session) {
                router.push('/login'); // Redirect to login if not authenticated
            }
        }, [session, router]);

        return <WrappedComponent {...props} />; // Render the wrapped component if authenticated
    };

    return AuthHOC;
};

export default withAuth;