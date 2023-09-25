import React from 'react';
// import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
            {/* <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />

                </PieChart>
            </ResponsiveContainer>
            <PieChart></PieChart>
            <Tooltip></Tooltip> */}
        </div>
    );

};

export default Statistics;