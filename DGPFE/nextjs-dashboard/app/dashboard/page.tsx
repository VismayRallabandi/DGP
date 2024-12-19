'use client';
import withAuth from '../components/withAuth';

function DashboardPage() {
    return (
        <div>
            <h1>Dashboard Content</h1>
            {/* Dashboard specific content goes here */}
        </div>
    );
}

export default withAuth(DashboardPage);