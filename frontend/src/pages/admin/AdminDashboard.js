import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from './data/data';
import ChartComponent from '../../component/ChartComponent';

const AdminDashboard = () => {
    const statItems = [
        { count: 3, icon: <SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />, description: "Employers" },
        { count: 45, icon: <WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />, description: "Jobs" },
        { count: 6, icon: <CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />, description: "Jobs categories" },
    ];

    const renderStatComponents = () => {
        return statItems.map((item, index) => (
            <StatComponent
                key={index}
                value={item.count}
                icon={item.icon}
                description={item.description}
                money=''
            />
        ));
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                Dashboard
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {renderStatComponents()}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}
                spacing={{ xs: 1, sm: 2, md: 4 }}>
                <ChartComponent>
                    <Chart
                        chartType="Bar"
                        data={data}
                        options={options}
                        width="100%"
                        height="300px"
                        legendToggle
                    />
                </ChartComponent>
            </Stack>
        </Box>
    );
}

export default AdminDashboard;