import {Grid, Link, Typography} from "@mui/material";
import {ButtonComponent} from "../../../common/button/ButtonComponent";
import {ButtonType} from "../../../models/enums/ButtonType";
import {IconPosition} from "../../../models/enums/IconPosition";
import {Link as RouterLink} from "react-router-dom";
import {Topic} from "../../../models/Topic";
import {ReactComponent as ArrowIcon} from '../../../images/icons/arrow-right.svg';
import {levels} from "../../../data/levels/levels";

const topicCardStyle = {
    padding: '24px',
    borderRadius: '8px',
    backgroundColor: '#FFF',
    boxShadow: '4px 2px 12px 0px rgba(0, 0, 0, 0.06), 0px 0px 8px 0px rgba(0, 0, 0, 0.04)',
}

const buttonTextStyle = {
    padding: 0,
}

interface ITopicCardProps {
    topic: Topic,
}

export const TopicCard = ( { topic } : ITopicCardProps) => {
    const level = levels.find(l => l.id === topic.levelId);

    return (
        <Grid item container>
            <Grid item container alignItems='center' sx={topicCardStyle}>
                <Grid item xs>
                    <Link component={RouterLink} to={`/grammar/${level?.code}/${topic.id}`}>
                        <Typography variant='h5'>{topic.name}</Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to={`/grammar/${level?.code}/${topic.id}`}>
                        <ButtonComponent
                            type={ButtonType.Text}
                            iconSource={<ArrowIcon />}
                            iconPosition={IconPosition.End}
                            sx={buttonTextStyle}
                        >
                            До правил
                        </ButtonComponent>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    );
}