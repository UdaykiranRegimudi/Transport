import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <div style={{backgroundColor:"black",paddingTop:"40px",padding:"20px"}}>
            <div style={{marginTop:"0"}}>
                <Skeleton variant="rounded" width="100%" height={60} sx={{ bgcolor: 'grey.900' }} />
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Skeleton variant="rounded" width="60%" height={400} sx={{ bgcolor: 'grey.900' }} />
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
