import { Grid } from '@material-ui/core';
import React from 'react';
import { Timeline } from 'react-twitter-widgets'


export const TwitterFollowed = [

    {
        nom: 'The blockChainBacker',
        TwitterName: 'BCBAcker'
    },
    {
        nom: 'Jeremy Hogan',
        TwitterName: 'attorneyjeremy1'
    },
    {nom:'Brad GasrlingHouse',TwitterName:'bgarlinghouse'},
    {nom:'Brad GasrlingHouse',TwitterName:'bgarlinghouse'},
    {nom:'Brad GasrlingHouse',TwitterName:'bgarlinghouse'},
    {nom:'Brad GasrlingHouse',TwitterName:'bgarlinghouse'},
]
export const TwitterFeed = () => {
    return (
        <Grid item xs={6}>
        <div className="tweet-container">
            
           
            {TwitterFollowed.map((item, index) =>{
                return  <TwitterCard nom={item.nom} TwitterName={item.TwitterName} key={index}></TwitterCard>  } )}
         
        </div>
        </Grid>
    );
}

export const  TwitterCard = (props) =>{
    const {TwitterName}=props
    return(
    
    <div className='tweet-cont' > 
  
    <Timeline
        dataSource={{
          sourceType: 'Archybonker',
          screenName: TwitterName,
        }}
        options={{
          height: '400',
          width:'400'
        }}
      />
     
      </div>)
}
export default TwitterFeed;
