import React from "react";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdmin, isSaler }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    return (
        <>
            {loading === false && (
                isAuthenticated === false ?
                    <Navigate to="/login" />
                    : isSaler ? user.role !== "salesperson" ? <Navigate to="/login" /> : children
                        : isAdmin ? user.role !== "admin" ? <Navigate to="/login" /> : children : children
            )}
        </>
    );
};

export default ProtectedRoute;
