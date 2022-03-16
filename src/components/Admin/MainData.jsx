import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'
import { Doughnut, Line, Pie, Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../actions/userAction';
// import MetaData from '../Layouts/MetaData';

const MainData = () => {

    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);

    console.log(users);
    useEffect(() => {
        // dispatch(getAllUsers());
    }, []);


    return (
        <>
            Helooo
            <h4 className="text-gray-100 font-medium">Total Users</h4>
            <h2 className="text-2xl font-bold">{users.length}</h2>
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full">

            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full mb-6">

            </div>
        </>
    );
};

export default MainData;
