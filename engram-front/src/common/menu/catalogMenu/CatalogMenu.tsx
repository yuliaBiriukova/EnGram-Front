import {Divider, Grid, Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {levels} from "../../../data/levels/levels"
import {ENGLISH_LEVEL_TEST_LINK} from "../../utils/constants";
import {CatalogMenuItem} from "./CatalogMenuItem";

const menuStyle = {
    padding: 3,
    borderRadius: '8px',
    background: 'white',
    boxShadow: '4px 2px 12px 0px rgba(0, 0, 0, 0.06), 0px 0px 8px 0px rgba(0, 0, 0, 0.04)',
}

const dividerStyle = {
    height: 1,
    backgroundColor: '#E0E0E0',
    my: 3,
}


export const CatalogMenu = () => {

    const content = levels.map(level =>
        <CatalogMenuItem key={level.id} level={level}/>
    );

    return (
        <Grid item container direction='column' sx={menuStyle}>
            <Grid item marginBottom={2}>
                <Typography variant='h4' noWrap>Каталог рівнів</Typography>
            </Grid>
            <Grid item container rowSpacing={2} direction='column'>
                {content}
            </Grid>
            <Divider flexItem variant="fullWidth" sx={dividerStyle}/>
            <Grid item container rowSpacing={2} direction='column'>
                <Grid item>
                    <Link href={ENGLISH_LEVEL_TEST_LINK}>
                        <Typography variant='subtitle1' noWrap>Тест рівня англійської</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to={`/search`}>
                        <Typography variant='subtitle1' noWrap>Пошук</Typography>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
}