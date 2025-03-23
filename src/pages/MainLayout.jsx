import React from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import { AuthProvider } from '../components/auth/AuthProvider';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <AuthProvider>
            <MainHeader />
            <main>
                <Outlet />  {/* This is required to display the routed pages */}
            </main>
            <MainFooter />
        </AuthProvider>
    );
}

export default MainLayout;