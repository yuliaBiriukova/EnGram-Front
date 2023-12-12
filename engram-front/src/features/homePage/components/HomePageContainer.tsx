import {HomePageBanner} from "./HomePageBanner";
import {Grid, Typography} from "@mui/material";
import {CatalogMenu} from "../../../common/menu/catalogMenu/CatalogMenu";
import {ENGLISH_LEVEL_TEST_LINK} from "../../../common/utils/constants";
import {levels} from "../../../data/levels/levels";
import {LevelCard} from "./LevelCard";

const homePageStyle = {
    marginTop: '72px',
    width: '100%',
    maxWidth: 1440,
}

const contentBlockStyle = {
    px: '120px',
    paddingTop: '40px',
}

export const HomePageContainer = () => {

    const levelsCards = levels.map(level =>
        <LevelCard key={level.id} level={level}/>
    );

    return (
        <Grid container alignItems='start' sx={homePageStyle}>
            <HomePageBanner />
            <Grid item container columnSpacing='56px' wrap='nowrap' sx={contentBlockStyle}>
                <Grid item>
                    <CatalogMenu />
                </Grid>
                <Grid item container rowSpacing='64px'>
                    <Grid item container rowSpacing={2}>
                        <Grid item>
                            <Typography variant='body1'>
                                Практикуйте англійську граматику з чіткими граматичними поясненнями та практичними вправами для перевірки вашого розуміння.
                                Навчальні матеріали розділені на розділи за рівнями володіння англійською мовою. Оберіть той, що піходить саме вам.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                Не знаєте свій рівень? Пройдіть <a href={ENGLISH_LEVEL_TEST_LINK}>тест від English Council</a>, дізнайтеся свій рівень англйіської мови та
                                приступіть до підвищення ваших знань.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                Виконуючи інтерактивні вправи, ви зможете застосувати на практиці отримані знання.
                                Після кожного тесту ви сможете побачити, наскільки добре ви його виконали та які помилки зробили.
                                З повторенням та практикою граматики, ви підвищите свою впевненість в англійській мові та покращите свій мовний рівень.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1'>
                                Практика потроху і часто - найкращий спосіб покращити свою граматику, тому поверніться завтра,
                                щоб вибрати іншу граматичну тему для опрацювання. Успіхів вам!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container rowSpacing='32px'>
                        <Grid item>
                            <Typography variant='h3'>Оберіть рівень</Typography>
                        </Grid>
                        {levelsCards}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}