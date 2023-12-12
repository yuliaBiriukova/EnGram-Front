import {Breadcrumbs, Grid, Link, Typography} from "@mui/material";
import {CatalogMenu} from "../../../common/menu/catalogMenu/CatalogMenu";
import {Link as RouterLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {levels} from "../../../data/levels/levels";
import { levelsDescriptions } from "../../../data/levels/levelsDescriptions";
import {topics} from "../../../data/topics/topics";
import { TopicCard } from "./TopicCard";

const levelPageStyle = {
    marginTop: '72px',
    width: '100%',
    maxWidth: 1440,
}

const contentBlockStyle = {
    px: '120px',
    paddingTop: '40px',
}

export const LevelPageContainer = () => {
    const { levelCode } = useParams();
    const [level, setLevel] = useState(levels.find(l => l.code === levelCode));

    useEffect(() => {
        setLevel(levels.find(l => l.code === levelCode));
    }, [levelCode]);

    const topicsCards = topics.filter(t => t.levelId === level?.id).map(topic =>
        <TopicCard key={topic.id} topic={topic}/>
    );

    return (
        <Grid container alignItems='start' sx={levelPageStyle}>
            <Grid item container columnSpacing='56px' wrap='nowrap' sx={contentBlockStyle}>
                <Grid item>
                    <CatalogMenu />
                </Grid>
                <Grid item container direction='column' rowSpacing='32px'>
                    <Grid item>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link component={RouterLink} to='/' color="inherit">
                                Граматика
                            </Link>
                            <Typography variant='body1' color='black'>
                                {level?.code}: {level?.name}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item container rowSpacing={2}>
                        <Grid item>
                            <Typography variant='h2'>{level?.code}: {level?.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                {level?.id ? levelsDescriptions[level?.id] : ''}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='h3'>Оберіть тему</Typography>
                    </Grid>
                    <Grid item container rowSpacing={3}>
                        {topicsCards.length === 0
                            ? (
                                <Grid item>
                                    <Typography variant='body1'>На цьому рівні ще немає тем для вивчення.</Typography>
                                </Grid>
                            )
                            : topicsCards
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}