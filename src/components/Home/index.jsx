import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
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

const VehicleData = [
    {
        imageUrl:"/Vehicle.png",
        heading:"Vehicle Registration",
        desc:"One click for all the vehicle related citizen services"
    },
    {
        imageUrl:"/Fancy.png",
        heading:"Fancy Number Allocation",
        desc:"Your favorite number for your favorite vehicle"
    },
    {
        imageUrl:"/Permit.png",
        heading:"National Permit",
        desc:"Seamless online way for vehicle permits"
    },
    {
        imageUrl:"/Other.png",
        heading:"Other Services",
        desc:"LExplore the services related to your vehicle here"
    },
]

const images = [
    {imageUrl:"how-doorstep-delivery-will-work.webp"},
    {imageUrl:"banner2.jpg"},,
    {imageUrl:"learners-license-1024x640.jpg"},
    {imageUrl:"images (5).jpeg"},
    {imageUrl:"driving-license-test-1.jpeg"},
]



const SkeletonComponent = () => {
    return (
        <div>
            <div style={{marginTop:"0"}}>
                
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Carousel autoplay className="custom-slider" style={{width:"70%"}}>
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" /> 
                        <img src="" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                    </Carousel>
                </div>
                {items}
                
            </div>
        </div>
    );
};


const items = [];
for(let i = 0 ; i < 2 ;i++){
    items.push(
        <div>
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
    )
}

const OrginalComponent = () =>{
    return(
        <div>
            <div style={{marginTop:"0"}}>
                
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <Carousel autoplay className="custom-slider" style={{width:"70%"}}>
                        {images.map((each,index) => {
                            return(
                                <img key={index} src={each.imageUrl} height="250" />
                            )
                        })}
                        
                    </Carousel>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <h4 style={{color:"white"}}>License Related Services</h4>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <p style={{color:"yellow"}}>Various services related to new/old driving licence or learner's licence like Appointment Booking, Duplicate driving licence, Application Status, Online test for learner's licence, etc.</p>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    {LicenseData.map(each =>(
                        <div style={{marginRight:"20px",height:"43vh"}} className="w-1/5">
                            {/* <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} /> */}
                            <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",border:"solid",borderColor:"grey",borderRadius:"12px",alignItems:"center"}}>
                                <div >
                                    <img src={each.imageUrl} className="rounded-full" height="200" width="200" />
                                </div>
                            <div style={{textAlign:"center"}}>
                                    <h6 className="text-grey">{each.heading}</h6>
                                    <p className="text-grey">{each.desc}</p>
                            </div>
                            </div>
                         </div>
                    ))}
                    
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
                    <h4 style={{color:"white"}}>Vehicle Related Services</h4>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
                    <p style={{color:"yellow"}}>Various services related to registration of vehicle/already registered vehicle like Appointment Booking, Application Status, Duplicate Registration, Change of Address etc.</p>
                </div>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"10px"}}>
                    {VehicleData.map(each =>(
                        <div style={{marginRight:"20px",height:"43vh"}} className="w-1/5">
                            {/* <Skeleton variant="rounded" width={250} height={350} sx={{ bgcolor: 'grey.900' }} /> */}
                            <div style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"10px",border:"solid",borderColor:"grey",borderRadius:"12px",alignItems:"center"}}>
                                <div >
                                    <img src={each.imageUrl} className="rounded-full" height="200" width="200" />
                                </div>
                            <div style={{textAlign:"center"}}>
                                    <h6 className="text-grey">{each.heading}</h6>
                                    <p className="text-grey">{each.desc}</p>
                            </div>
                            </div>
                         </div>
                    ))}
                    
                    
                </div>

                
               
            </div>
        </div>
    )
}

const Home = ()=>{
    const [showNextComponent, setShowNextComponent] = useState(false);

    useEffect(() => {
        // Set a timer for 5 seconds
        const timer = setTimeout(() => {
        setShowNextComponent(true);
        }, 3000);

        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, []);
    return(
        <>  
            {showNextComponent?<OrginalComponent/>:<SkeletonComponent/>}
            
            
        </>
    )
}

export default Home;
