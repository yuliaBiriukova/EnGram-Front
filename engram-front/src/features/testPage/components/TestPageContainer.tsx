import {Link as RouterLink, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {topics} from "../../../data/topics/topics";
import {levels} from "../../../data/levels/levels";
import {Breadcrumbs, Grid, Link, Typography} from "@mui/material";
import {CatalogMenu} from "../../../common/menu/catalogMenu/CatalogMenu";
import {RadioSelectTask} from "./RadioSelectTask";
import { InputTask } from "./InputTask";
import {ButtonComponent} from "../../../common/button/ButtonComponent";
import {ButtonType} from "../../../models/enums/ButtonType";

const testPageStyle = {
    marginTop: '72px',
    width: '100%',
    maxWidth: 1440,
}

const contentBlockStyle = {
    px: '120px',
    paddingTop: '40px',
}

export const TestPageContainer = () => {
    const { topicId } = useParams();
    const [topic, setTopic] = useState(topics.find(t => t.id === parseInt(topicId as string)));

    useEffect(() => {
        setTopic(topics.find(t => t.id === parseInt(topicId as string)));
    }, [topicId]);

    const level = levels.find(l => l.id === topic?.levelId);

    return (
        <Grid container alignItems='start' sx={testPageStyle}>
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
                            <Link component={RouterLink} to={`/grammar/${level?.code}`} color="inherit">
                                {level?.code}: {level?.name}
                            </Link>
                            <Link component={RouterLink} to={`/grammar/${level?.code}/${topicId}`} color="inherit">
                                {topic?.name}
                            </Link>
                            <Typography variant='body1' color='black'>
                                Тест
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item container wrap='nowrap' justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant='h2'>Тест {topic?.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>2 завдання</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container rowSpacing={3}>
                        <Grid item>
                            <Typography variant='h5'>
                                Заповніть пропуски:
                            </Typography>
                        </Grid>
                        <RadioSelectTask />
                    </Grid>
                    <Grid item container rowSpacing={3}>
                        <Grid item>
                            <Typography variant='h5'>
                                Переведіть речення:
                            </Typography>
                        </Grid>
                        <InputTask />
                    </Grid>
                    <Grid item>
                        <Link component={RouterLink} to={`/grammar/${level?.code}/${topicId}/test/results`}>
                            <ButtonComponent type={ButtonType.Primary}>
                                Перевірити відповіді
                            </ButtonComponent>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}