import React from 'react';
import { Tooltip, PieChart, Pie, Legend } from 'recharts';

const Statistics = () => {


    const data01 = [
        { name: 'Group A', value: 400 },

    ];

    const data02 = [
        { name: 'Group F', value: 4800 },
    ];

    return (
        <div className='w-[300px] mx-auto'>
            <div>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#FF444A"
                        label
                    />
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data02}
                        cx="50%"
                        cy="50%"
                        outerRadius={40}
                        fill="#0052FF"
                        label
                    />

                    <Legend></Legend>
                    <Tooltip />
                </PieChart>
            </div>


        </div>
    );

};

export default Statistics;