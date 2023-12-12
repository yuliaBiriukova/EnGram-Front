import {Link as RouterLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {topics} from "../../../data/topics/topics";
import {Breadcrumbs, Grid, Link, Typography} from "@mui/material";
import {CatalogMenu} from "../../../common/menu/catalogMenu/CatalogMenu";
import {levels} from "../../../data/levels/levels";
import {ButtonComponent} from "../../../common/button/ButtonComponent";
import {ButtonType} from "../../../models/enums/ButtonType";
import {IconPosition} from "../../../models/enums/IconPosition";

const topicPageStyle = {
    marginTop: '72px',
    width: '100%',
    maxWidth: 1440,
}

const contentBlockStyle = {
    px: '120px',
    paddingTop: '40px',
}

export const TopicPageContainer = () => {
    const { topicId } = useParams();
    const [topic, setTopic] = useState(topics.find(t => t.id === parseInt(topicId as string)));

    useEffect(() => {
        setTopic(topics.find(t => t.id === parseInt(topicId as string)));
    }, [topicId]);

    const level = levels.find(l => l.id === topic?.levelId);
    const contentBlocks = topic?.content.split('\n\n');

    const content = contentBlocks?.map((b, bIndex) => {
        const paragraphs = b.split('\n');
        return (
            <Grid key={bIndex} item container direction='column' rowSpacing={2} xs>
                {
                    paragraphs.map((p, pIndex) =>
                        <Grid item key={bIndex * pIndex}>
                            <Typography variant='body1'>
                                {p}
                            </Typography>
                        </Grid>
                    )
                }
            </Grid>
        );
    });

    return (
        <Grid container alignItems='start' sx={topicPageStyle}>
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
                            <Typography variant='body1' color='black'>
                                {topic?.name}
                            </Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Grid item container wrap='nowrap' justifyContent='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant='h2'>{topic?.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to={`/grammar/${level?.code}/${topicId}/test`}>
                                <ButtonComponent type={ButtonType.Primary}>
                                    Пройти тест
                                </ButtonComponent>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' rowSpacing={3}>
                        <Grid item>
                            <Typography variant='h3'>
                                Правила
                            </Typography>
                        </Grid>
                        {content}
                    </Grid>
                    <Grid item container rowSpacing={3}>
                        <Grid item>
                            <Typography variant='h3'>
                                Тест
                            </Typography>
                        </Grid>
                        <Grid item container direction='column' rowSpacing={2}>
                            <Grid item>
                                <Typography variant='body1'>
                                    Пройдіть цей тест, щоб перевірити вивчену граматику.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link component={RouterLink} to={`/grammar/${level?.code}/${topicId}/test`}>
                                    <ButtonComponent type={ButtonType.Primary}>
                                        Пройти тест
                                    </ButtonComponent>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}