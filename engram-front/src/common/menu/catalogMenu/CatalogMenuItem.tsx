import {Level} from "../../../models/Level";
import {Link as RouterLink, useParams} from "react-router-dom";
import {Grid, Link, Typography} from "@mui/material";

const levelLinkStyle = {
    color: 'primary.main',
}

interface ICatalogMenuItemProps {
    level: Level;
}

export const CatalogMenuItem = ({ level } : ICatalogMenuItemProps) => {
    const {levelCode} = useParams();

    return (
        <Grid item>
            <Link component={RouterLink} to={`/grammar/${level.code}`}>
                <Typography
                    variant='subtitle1'
                    noWrap
                    sx={levelCode === level.code ? levelLinkStyle : {}}
                >
                    {level.code}: {level.name}
                </Typography>
            </Link>
        </Grid>
    )
}