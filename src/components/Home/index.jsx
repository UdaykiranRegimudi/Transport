import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from '../../assets/Navbar'
import { Carousel } from 'rsuite';


const Home = () => {
    return (
        <div>
            <div style={{marginTop:"0"}}>
                
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Carousel autoplay className="custom-slider" style={{width:"70%"}}>
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                    </Carousel>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Typography component="div" key={'h2'} variant={'h2'}>
                        <Skeleton width={500} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <Typography component="div" key={'p'} variant={'p'}>
                        <Skeleton width={1000} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Typography component="div" key={'h2'} variant={'h2'}>
                        <Skeleton width={500} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <Typography component="div" key={'p'} variant={'p'}>
                        <Skeleton width={1000} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Typography component="div" key={'h2'} variant={'h2'}>
                        <Skeleton width={500} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <Typography component="div" key={'p'} variant={'p'}>
                        <Skeleton width={1000} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Typography component="div" key={'h2'} variant={'h2'}>
                        <Skeleton width={500} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <Typography component="div" key={'p'} variant={'p'}>
                        <Skeleton width={1000} sx={{ bgcolor: 'grey.900' }}/>
                    </Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
