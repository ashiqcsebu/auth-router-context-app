// import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext);
    return (
        <div>
            <h1> this is home user {user?.email}</h1>
        </div>
    );
};

export default Home;