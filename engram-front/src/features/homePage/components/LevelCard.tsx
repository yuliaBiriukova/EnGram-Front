import {Grid, Link, Typography} from "@mui/material";
import {Level} from "../../../models/Level";
import {levelsShortDescriptions} from "../../../data/levels/levelsShortDescriptions";
import {ReactComponent as ArrowIcon} from '../../../images/icons/arrow-right.svg';
import {ButtonType} from "../../../models/enums/ButtonType";
import {ButtonComponent} from "../../../common/button/ButtonComponent";
import {IconPosition} from "../../../models/enums/IconPosition";
import {Link as RouterLink} from "react-router-dom";

const levelCardStyle = {
    padding: '24px',
    borderRadius: '8px',
    backgroundColor: '#FFF',
    boxShadow: '4px 2px 12px 0px rgba(0, 0, 0, 0.06), 0px 0px 8px 0px rgba(0, 0, 0, 0.04)',
}

const levelCodeStyle = {
    color: 'primary.main',
    fontSize: 48,
    fontWeight: 700,
    lineHeight: '35px'
}

const levelNameStyle = {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '17px'
}

const buttonTextStyle = {
    padding: 0,
}

interface ILevelCardProps {
    level: Level,
}

export const LevelCard = ( {level} : ILevelCardProps) => {
    return (
        <Grid item container>
            <Grid item container direction='column' sx={levelCardStyle}>
                <Grid item container alignItems='center'>
                    <Grid item container alignItems='end' columnSpacing={2} xs>
                        <Grid item>
                            <Link component={RouterLink} to={`/grammar/${level.code}`}>
                                <Typography sx={levelCodeStyle}>{level.code}</Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to={`/grammar/${level.code}`}>
                                <Typography variant='h5' sx={levelNameStyle}>{level.name}</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to={`/grammar/${level.code}`}>
                            <ButtonComponent
                                type={ButtonType.Text}
                                iconSource={<ArrowIcon />}
                                iconPosition={IconPosition.End}
                                sx={buttonTextStyle}
                            >
                                До рівня
                            </ButtonComponent>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item marginTop={2}>
                    <Typography variant='body1'>
                        {levelsShortDescriptions[level.id]}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}