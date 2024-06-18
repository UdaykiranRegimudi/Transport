import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { Carousel } from 'rsuite';

const LicenseData = [
    {
        imageUrl:"/License.png",
        heading:"Drivers/ Learners License",
        desc:"License registration on your fingertips"
    },
    {
        imageUrl:"/School.png",
        heading:"Driving School",
        desc:"One place for application of Driving School License"
    },
    {
        imageUrl:"/Test.png",
        heading:"Online Test/ Appointment",
        desc:"Book/ Modify Online test appointments"
    },
    {
        imageUrl:"/Other.png",
        heading:"Other Services",
        desc:"Explore the plethora of services related to Driving License"
    },

]


const SkeletonComponent = () => {
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


const OrginalComponent = () =>{
    return(
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
                    <h4 style={{color:"red"}}>License Related Services</h4>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <p style={{color:"green"}}>Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online test for learner's licence, etc.</p>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    {LicenseData.map(each =>(
                        <div style={{marginRight:"20px",height:"43vh"}} className="w-1/5">
                            {/* <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} /> */}
                            <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",border:"solid",borderColor:"black",borderRadius:"12px",alignItems:"center"}}>
                                <div >
                                    <img src={each.imageUrl} className="rounded-full" height="200" width="200" />
                                </div>
                            <div style={{textAlign:"center"}}>
                                    <h6 className="text-black">{each.heading}</h6>
                                    <p className="text-black">{each.desc}</p>
                            </div>
                            </div>
                         </div>
                    ))}
                    
                    
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
    )
}

const Home = ()=>{
    return(
        <>
            <SkeletonComponent/>
            <OrginalComponent/>
        </>
    )
}

export default Home;
