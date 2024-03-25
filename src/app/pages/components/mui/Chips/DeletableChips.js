import React from 'react';
import {Avatar, Chip} from "@mui/material";
import {Delete} from "@mui/icons-material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/deletable-chips.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const DeletableChips = () => {
    return (
        <JumboDemoCard
            title={"Deletable Chips"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Chip
                avatar={<Avatar alt={"John"} src={getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "24x24")}/>}
                label={"Deletable Chip"}
                onDelete={() => alert('You clicked the delete icon.')}
                icon={<Delete/>}

            />
        </JumboDemoCard>
    );
};

export default DeletableChips;
