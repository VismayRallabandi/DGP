import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const [session] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (token === 'yesyesyes') {
                    // Allow access and set the session
                    // You can set the session data as needed
                } else {
                    // Redirect to login page if token is not valid
                    router.push('/login');
                }
            } catch (error) {
                console.error(error);
                // Handle error (e.g., redirect to login page)
                router.push('/login');
            }
        };

        fetchSession();
    }, [router]);

    return { session};
};

export default useAuth;