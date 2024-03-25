import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Transitions/demo-code/simple-collapse.txt";

const icon = (
    <Paper sx={{m: 1}} elevation={4}>
        <Box component="svg" sx={{width: 100, height: 100}}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
);

const SimpleCollapse = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <JumboDemoCard title={"Collapse"} demoCode={code}>
            <Box sx={{height: 300}}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange}/>}
                    label="Show"
                />
                <Box
                    sx={{
                        '& > :not(style)': {
                            display: 'flex',
                            justifyContent: 'space-around',
                            height: 120,
                            width: 250,
                        },
                    }}
                >
                    <Div>
                        <Collapse in={checked}>{icon}</Collapse>
                        <Collapse in={checked} collapsedSize={40}>
                            {icon}
                        </Collapse>
                    </Div>
                    <Div>
                        <Box sx={{width: '50%'}}>
                            <Collapse orientation="horizontal" in={checked}>
                                {icon}
                            </Collapse>
                        </Box>
                        <Box sx={{width: '50%'}}>
                            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                                {icon}
                            </Collapse>
                        </Box>
                    </Div>
                </Box>
            </Box>
        </JumboDemoCard>
    );
};
export default SimpleCollapse;
