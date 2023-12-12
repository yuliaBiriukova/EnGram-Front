import backgroundImage from '../../../images/photoes/catalog-banner-photo.png';
import {Grid, Typography} from "@mui/material";

const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    height: 320,
    paddingLeft: '120px',
    paddingBottom: '40px',
}

export const HomePageBanner = () => {
    return (
        <Grid item container style={bannerStyle} alignItems="end">
            <Grid item container rowSpacing='16px' maxWidth={600}>
                <Grid item>
                    <Typography variant='h1'>Граматика з EnGram</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body2' color='#FCFCFC'>
                        Вивчайте та практикуйте граматику англійської мови, щоб підвищити впевненість у собі та покращити свій мовний рівень.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}